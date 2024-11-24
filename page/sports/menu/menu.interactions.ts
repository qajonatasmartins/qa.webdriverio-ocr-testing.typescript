import ClickCustomCommands from "../../../utils/customCommands/clickCustomCommands";
import MenuElements from "./menu.elements";

const clickCustomCommands = new ClickCustomCommands()

export default class MenuInteractions extends MenuElements {

    /**
     * Método para clicar no menu da tela de sports
     */
    protected async clickBtnMenu() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnMenu, 'Menu')
    }

    /**
     * Método para clicar no botão de Sign Out do menu da tela de sports
     */
    protected async clickBtnSignOut() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnSignOut, 'Sing Out')
    }

    /**
     * Mapeamente para esperar o botão de Sign Out do menu.
     */
    protected async waitBtnSignOut() {
        await super.btnSignOut.waitForDisplayed()
    }

    /**
     * Método para retornar o nome do usuário logado.
     * @returns 
     */
    protected async getTextLblUserLogged() {
        await super.lblUserLogged.waitForDisplayed({ timeoutMsg: "O menu com nome do usuário logado não foi exibido." })
        return await super.lblUserLogged.getAttribute('aria-label')
    }
}