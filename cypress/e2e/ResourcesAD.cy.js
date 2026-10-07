describe('Academy Resources', () => {

  // Resources used in these tests (taken from the Resources page)
  const TOOL = 'Tool - Money Practices';
  const TOOLKIT = 'Customers & Markets Practices';
  const TOOLKIT_TOOL = 'Tool - Customers & Markets Practices';
  const COURSE = 'Business English- Techniques';

  beforeEach(() => {
    cy.visit('https://account.africanmanagers.org/ami_auth/login');
    cy.successfullogin();
    cy.Academydashboard();
    cy.academyResourcesPage();
  });

  it('should display the Resources page sections', () => {
    // "Resources" also appears in the (hidden) sidebar, so only look at visible text
    visibleText(/^\s*Resources\s*$/).should('exist');
    cy.get('input[placeholder*="Looking for a resource"]:visible').should('have.length', 1);
    visibleText(/recently viewed/i).should('exist');
    visibleText(/saved resources/i).should('exist');
    visibleText(/all saved resources/i).should('exist');
  });

  it('should search for a resource by name', () => {
    searchResource(TOOL);

    visibleText(exact(TOOL)).should('exist');
  });

  it('should show no matching resources for a nonsense search', () => {
    const nonsense = `zzqx${Date.now()}`;
    searchResource(nonsense);

    // None of the known resources should be listed any more
    cy.contains(exact(TOOLKIT), { timeout: 15000 }).should('not.exist');
  });

  it('should open a Tool and show its details', () => {
    openResource(TOOL);

    visibleText(exact(TOOL)).should('exist');
    visibleText(/tool overview/i).should('exist');
    visibleText(/download tool/i).should('exist');
    visibleText(/open file/i).should('exist');
    visibleText(/\d+\s*views/i).should('exist');
  });

  it('should download a Tool with "Download Tool"', () => {
    openResource(TOOL);

    cy.task('countDownloads').then((before) => {
      visibleText(/^\s*Download Tool\s*$/i).click();

      // A new file should land in cypress/downloads
      waitForNewDownload(before);
    });
  });

  it('should open a Tool file with "open file"', () => {
    openResource(TOOL);

    // "open file" opens the file in a new tab, which Cypress can't follow.
    // Catch the URL it would open and check that the file actually loads.
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    visibleText(/^\s*open file\s*$/i)
      .closest('a, button')
      .then(($el) => {
        const href = $el.attr('href');

        if ($el.is('a') && href && href !== '#') {
          // Plain link (target="_blank") — request the file directly
          cy.request(href).its('status').should('eq', 200);
        } else {
          // Button that opens the file via window.open(...)
          cy.wrap($el).click();
          cy.get('@windowOpen').should('have.been.called').then((stub) => {
            const fileUrl = stub.args[0][0];
            cy.request(fileUrl).its('status').should('eq', 200);
          });
        }
      });
  });

  it('should add an opened Tool to Recently Viewed', () => {
    openResource(TOOL);
    visibleText(/tool overview/i).should('exist');

    // Go back to the Resources list
    cy.go('back');
    cy.get('input[placeholder*="Looking for a resource"]', { timeout: 30000 }).should('exist');

    visibleText(/recently viewed/i).should('exist');
    cy.contains(exact(TOOL)).should('exist');
  });

  it('should open a Toolkit and list its tools', () => {
    openResource(TOOLKIT);

    visibleText(/toolkit overview/i).should('exist');
    visibleText(/download tools/i).should('exist');
    visibleText(/^\s*Tools\s*$/).should('exist');
    visibleText(exact(TOOLKIT_TOOL)).should('exist');
  });

  it('should enable "Download Tools" only after a tool is selected in a Toolkit', () => {
    openResource(TOOLKIT);

    // Nothing selected yet -> button is disabled (faded)
    downloadToolsButton().should('be.disabled');

    // Tick a tool -> button becomes enabled
    toolCheckbox(TOOLKIT_TOOL).check({ force: true });
    downloadToolsButton().should('not.be.disabled');

    // Untick it -> disabled again
    toolCheckbox(TOOLKIT_TOOL).uncheck({ force: true });
    downloadToolsButton().should('be.disabled');
  });

  it('should open a Tool from inside a Toolkit', () => {
    openResource(TOOLKIT);

    visibleText(exact(TOOLKIT_TOOL)).click();

    visibleText(/tool overview/i).should('exist');
    visibleText(exact(TOOLKIT_TOOL)).should('exist');
  });

  it('should open a Course and show its details', () => {
    openResource(COURSE);

    visibleText(/course overview/i).should('exist');
    visibleText(/instructor/i).should('exist');
    visibleText(/enrol to course/i).should('exist');
    visibleText(/enrol before/i).should('exist');
  });

  it('should expand the Course overview with "See More"', () => {
    openResource(COURSE);

    visibleText(/^\s*See More\s*$/i).click();
    visibleText(/^\s*See Less\s*$/i).should('exist');
  });

  it('should Save a resource for later and then un-save it', () => {
    openResource(COURSE);

    // Start from a known state: not saved
    cy.get('body').then(($body) => {
      if (findVisibleText($body, /^\s*Saved\s*$/)) {
        visibleText(/^\s*Saved\s*$/).click();
      }
    });

    visibleText(/save for later/i).click();
    visibleText(/^\s*Saved\s*$/).should('exist');

    // Un-save so the test leaves the data as it found it
    visibleText(/^\s*Saved\s*$/).click();
    visibleText(/save for later/i).should('exist');
  });

  it('should Like and Unlike a resource', () => {
    openResource(TOOL);

    // The like count is the first number in the Saved / likes / shares / views bar
    likeCount().invoke('text').then((text) => {
      const before = parseInt(text, 10);

      likeCount().click();
      likeCount().should(($el) => {
        expect(Math.abs(parseInt($el.text(), 10) - before)).to.eq(1);
      });

      // Click again to restore the original count
      likeCount().click();
      likeCount().should(($el) => {
        expect(parseInt($el.text(), 10)).to.eq(before);
      });
    });
  });

  it('should open All Saved Resources', () => {
    visibleText(/all saved resources/i).click();

    // The saved list should include a resource we know is saved (see Saved Resources)
    visibleText(exact(TOOL)).should('exist');
  });

  it('should load more resources with "View more items"', () => {
    const typeLabel = /^\s*(Tool|Toolkit|Course)\s*$/;

    visibleText(/view more items/i).scrollIntoView().should('exist');

    cy.get('body').then(($body) => {
      const before = $body.find('*').filter((i, el) => typeLabel.test(el.textContent)).length;

      visibleText(/view more items/i).click();

      cy.get('body', { timeout: 15000 }).should(($b) => {
        const after = $b.find('*').filter((i, el) => typeLabel.test(el.textContent)).length;
        expect(after).to.be.greaterThan(before);
      });
    });
  });

});

// Helpers -------------------------------------------------------------------

// Regex that matches an element whose whole text is exactly `text`
function exact(text) {
  const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^\\s*${escaped}\\s*$`);
}

// The visible element whose text matches `regex` (skips hidden copies, e.g. the
// sidebar or mobile menu). Retries until one appears.
function visibleText(regex) {
  return cy.get('body *', { timeout: 15000 })
    .filter(':visible')
    .filter((i, el) => regex.test(el.textContent))
    .last(); // deepest match
}

// Type into the Resources search box (the visible one)
function searchResource(text) {
  cy.get('input[placeholder*="Looking for a resource"]:visible', { timeout: 15000 })
    .first()
    .clear()
    .type(text);
}

// Search for a resource and open it from the results
function openResource(name) {
  searchResource(name);
  visibleText(exact(name)).click();

  // Every details page has a "Tool / Toolkit / Course Overview" heading
  visibleText(/^\s*(Tool|Toolkit|Course) Overview\s*$/i).should('exist');
}

// Wait (up to ~30s) until cypress/downloads has more finished files than `before`
function waitForNewDownload(before, triesLeft = 30) {
  cy.task('countDownloads').then((count) => {
    if (count > before) return;
    if (triesLeft <= 0) {
      throw new Error('No file was downloaded after clicking "Download Tool"');
    }
    cy.wait(1000);
    waitForNewDownload(before, triesLeft - 1);
  });
}

// The "Download Tools" button on a Toolkit page
function downloadToolsButton() {
  return visibleText(/download tools/i).closest('button');
}

// The checkbox on the row of a tool inside a Toolkit
function toolCheckbox(toolName) {
  return visibleText(exact(toolName))
    .parents()
    .filter((i, el) => Cypress.$(el).find('input[type="checkbox"]').length === 1)
    .first()
    .find('input[type="checkbox"]');
}

// The like count (first number-only element in the action bar)
function likeCount() {
  return cy.get('span, p, div, button')
    .filter(':visible')
    .filter((i, el) => /^\s*\d+\s*$/.test(el.textContent))
    .first();
}

// Text of the first visible element matching `regex`, or '' if none
function findVisibleText($body, regex) {
  const el = $body.find('*').filter(':visible').filter((i, e) => regex.test(e.textContent)).first();
  return el.length ? el.text() : '';
}
