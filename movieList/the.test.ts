import { Builder, Capabilities, By } from "selenium-webdriver"
const chromedriver = require("chromedriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get("http://localhost:5500/movieList/index.html")
})

afterAll(async () => {
    await driver.quit()
})

test("This should test if a movie has been added", async () => {
    let search = "My Movie"
    await driver.findElement(By.xpath(`//input`)).sendKeys(`${search}\n`)
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//*[text()='My Movie']")).click()
})
