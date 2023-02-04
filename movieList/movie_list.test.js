
const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Testing Movie List', async () => {

    // Test adding a movie to the list
    const input = await driver.findElement(By.id("input"))
    const addButton = await driver.findElement(By.xpath("//form/button"))
    await input.sendKeys("The Patriot")
    addButton.click()

    await driver.sleep(2000)

    //Test crossing off a movie
    const movieTitle = await driver.findElement(By.xpath("//span"))
    movieTitle.click()

    await driver.sleep(2000)

    // Test deleting movie from the list
    const deleteButton = await driver.findElement(By.id("ThePatriot"))
    deleteButton.click()

    await driver.sleep(2000)
})