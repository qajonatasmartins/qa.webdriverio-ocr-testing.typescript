interface IUser {
    email: string,
    password: string
}
import { Key } from 'webdriverio'

export default class LoginPage {

    get btnCanvasKitLogin() { return $("flt-semantics-placeholder[role='button']") }

    get inpEmail() { return $("input[aria-label='Email']") }
    get inpPassword() { return $("input[aria-label='Senha']") }
    get btnEnter() { return $(`flt-semantics-container > flt-semantics[role="button"]:nth-child(3)`) }

    /** Métodos de interação */

    /**
     * Método para clicar no elemento do canvaskit para habilitar a identificação do html dos elementos da tela.
     */
    protected async clickBtnCanvasKitLogin() {
        await this.btnCanvasKitLogin.waitForDisplayed()
        await this.showHiddenElement(`flt-semantics-placeholder[role='button']`)
    }

    public async showHiddenElement(selector: string) {
        await this.btnCanvasKitLogin.waitForExist()
        await this.btnCanvasKitLogin.waitForDisplayed()
        await browser.execute((selector) => {
            const btn = document.querySelector(selector);
            //@ts-ignore
            btn.object_name = "EnableAccessibility"
            //@ts-ignore
            btn.click();
        }, selector);
    }

    protected async setInpEmail(email: string) {
        await this.inpEmail.waitForDisplayed()
        await this.inpEmail.click()
        await this.inpEmail.addValue(email)
    }

    protected async setInpPassword(password: string) {
        await browser.keys(Key.Tab)
        await this.inpPassword.waitForDisplayed()
        await this.inpPassword.addValue(password)
    }

    protected async clickBtnEnter() {
        await this.btnEnter.waitForDisplayed()
        await this.btnEnter.click()
    }

    /** Métodos de ação */

    /**
     * Método para abrir o site do team building balancer
     */
    public async openLoginPage() {
        await browser.url(`https://team-building-balancer.web.app/#/signin`)
    }

    /**
     * Metodo para clicar e ativar o html da página de login
     */
    public async openElementsHtml() {
        await this.clickBtnCanvasKitLogin()
    }

    public async toLogin(user: IUser) {
        await this.openLoginPage()
        await this.openElementsHtml()
        await this.setInpEmail(user.email)
        await this.setInpPassword(user.password)
        await this.clickBtnEnter()
    }

}