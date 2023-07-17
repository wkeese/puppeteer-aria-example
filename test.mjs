import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:8080/');

  // Find the dialog.  Tests lookup by explicit ARIA role, and by aria-labelledby.
  const dialog = await page.waitForSelector('::-p-aria([role="dialog"][name="Modal dialog"])');
  console.log("found the dialog", dialog);

  // Find the section.  Tests lookup from implicit role, and aria-label.
  const section = await page.waitForSelector('::-p-aria([role="region"][name="Section header"])');
  console.log("found the section", section);

  // Find the input.  Tests lookup from implicit role, and <label>.
  const input = await page.waitForSelector('::-p-aria([role="textbox"][name="My input"])');
  console.log("found the input", input);

  await browser.close();
})();
