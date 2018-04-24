const name = 'puppeteer'
const hrstart = process.hrtime()
console.log('started', name)

const puppeteer = require('puppeteer')
;(async function example() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.medium.com/')
  await page.waitForSelector('[href="/topic/members"]')

  await browser.close()

  const hrend = process.hrtime(hrstart)
  console.log(`completed ${name} in: ${hrend[0]}s ${hrend[1] / 1000000}ms`)
})()
