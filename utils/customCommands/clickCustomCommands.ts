export default class ClickCustomCommands {

    /**
     * Método para esperar o elemento ser exibido na tela e clicar nele
     * @param element 
     * @param field 
     */
    public async waitForDisplayedElementAndClick(element: any, field: string) {
        await element.waitForDisplayed({ timeoutMsg: `O botão [${field}] não está visivel.` })
        await element.click()
    }

    /**
     * Método para esperar se o elemento existe no html e clicar nele
     * @param element 
     * @param field 
     */
    public async waitForExistElementAndClick(element: any, field: string) {
        await element.waitForExist({ timeoutMsg: `O botão [${field}] não está visivel.` })
        await element.click()
    }

    /**
     * Método para esperar o elemento ser clicavel e depois realizar o click sobre ele
     * @param element 
     * @param field 
     */
    public async waitForClickableElementAndClick(element: any, field: string) {
        await element.waitForClickable({ timeoutMsg: `O botão [${field}] não está visivel.` })
        await element.click()
    }
}