export default class SetCustomCommands {

    public async waitForDisplayedElementAndAddValue(element: any, value: string | number, field: string) {
        await element.waitForDisplayed({ timeoutMsg: `O campo [${field}] não está visível.` })
        await element.addValue(value)
    }
}