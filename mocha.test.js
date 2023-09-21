import { browser, expect } from '@wdio/globals'
import { step } from '@wdio/allure-reporter'

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://github.com/')
        await step("foo", async ( that1) => {
            that1.parameter("name1", "value1");
            await step("bar", async (that2) => {
                that2.parameter("name2", "value2");
                return await step("baz", async (that3) => {
                    that3.parameter("name3", "value3");
                })
            })
        })
    })
})
