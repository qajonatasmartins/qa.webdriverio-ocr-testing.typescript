import { Key } from 'webdriverio'

export default class KeyHelpers {

    public async tab() {
        await browser.keys(Key.Tab)
    }
}