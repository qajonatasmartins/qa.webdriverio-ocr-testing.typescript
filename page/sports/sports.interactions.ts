import SportElements from "./sports.elements"

const heading = 'Balanceador de Times'

export default class SportInteractions extends SportElements {

    /**
     * Método para aguardar a tela do sports carregar
     */
    public async waitForSportPage() {
        let element = super.lblHeading
        await browser.waitUntil(async function () {
            return await element.getText() === heading
        }, {
            timeout: 10000,
            interval: 500,
            timeoutMsg: 'expected text to be different after 10s'
        })
    }

    /**
     * Método para retornar o valor do título da pagina de sports
     * @returns 
     */
    public async getTextLblHeading() {
        await this.lblHeading.waitForDisplayed({ timeoutMsg: "O título da pagina de sports não foi exibido" })
        return await this.lblHeading.getText()
    }
}