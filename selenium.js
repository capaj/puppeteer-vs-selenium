const name = 'selenium'
const hrstart = process.hrtime()
console.log('started', name)

require('chromedriver')
const webdriver = require('selenium-webdriver')
const driver = new webdriver.Builder().forBrowser('chrome').build()
const { By, Key, until } = webdriver
;(async function example() {
  await driver.get('https://www.medium.com/')

  await driver.wait(
    until.elementLocated(By.css('[href="/topic/members"]', 10000))
  )
  await driver.quit()
  const hrend = process.hrtime(hrstart)
  console.log(`completed ${name} in: ${hrend[0]}s ${hrend[1] / 1000000}ms`)
})()
