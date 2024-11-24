export default class ActionsHelpers {

    /**
     * Método para exibir os elementos do Flutter web para interação do framework de automação
     * @param selector 
     */
    public async showHiddenElementsFlutter(selector: string) {
        await browser.execute((selector) => {
            const btn = document.querySelector(selector);
            //@ts-ignore
            btn.object_name = "EnableAccessibility"
            //@ts-ignore
            btn.click();
        }, selector);
    }
}