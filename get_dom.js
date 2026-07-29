const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://account.africanmanagers.org/ami_auth/login');
  
  await page.type('#user_login', 'louange@muraho.tech');
  await page.type('#user_password', 'AMI12340000');
  
  await Promise.all([
    page.waitForNavigation(),
    page.click('.btnRed')
  ]);
  
  await page.waitForSelector('.select2-container', { timeout: 30000 }).catch(() => console.log('Timeout waiting for .select2-container'));
  
  // Wait a bit more for the page to fully render
  await new Promise(r => setTimeout(r, 5000));
  
  const html = await page.content();
  fs.writeFileSync('dashboard_dom.html', html);
  
  await browser.close();
  console.log('DOM saved to dashboard_dom.html');
})();
