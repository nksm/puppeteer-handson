import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch(
    // chrome が立ち上がる
    // {
    //   headless: false
    // }
  );
  const page = await browser.newPage();
  await page.goto('https://forstartups.com');
  await page.setViewport({
    width: 1260,
    height: 768
  });
  await page.screenshot({
    path: 'images/forstartups-1260.png',
    fullPage: true
  });

  await Promise.all([
    page.click('.p-headerNavi__changejobEntry > a'),
    page.waitForNavigation()
  ]);
  await page.screenshot({
    path: 'images/forstartups-2-1260.png',
    fullPage: true
  });
  await browser.close();
})();