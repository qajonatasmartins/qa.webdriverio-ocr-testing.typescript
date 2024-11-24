import MenuInteractions from "./menu.interactions"

export default class MenuActions extends MenuInteractions {

    /**
     * Método para abrir no menu da tela de sports
     */
    public async openMenu() {
        await super.clickBtnMenu()
        await browser.pause(5000)
        await super.waitBtnSignOut()
    }
}