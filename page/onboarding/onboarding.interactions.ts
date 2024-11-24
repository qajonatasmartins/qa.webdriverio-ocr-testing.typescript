import ClickCustomCommands from "../../utils/customCommands/clickCustomCommands"
import OnboardingElements from "./onboarding.elements"

const clickCustomCommands = new ClickCustomCommands()

export default class OnboardingInteractions extends OnboardingElements {

    /**
     * Método para clicar no botão de [Pular OnBoarding]
     */
    protected async clickBtnSkipOnBoarding() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnSkipOnBoarding, "Pular OnBoarding")
    }

    protected async clickBtnCreateNewSuperAccount() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnCreateNewSuperAccount, 'Criar uma super conta')
    }

    /**
     * Método para aguardar o elemento do flutter web existir no html e depois aguardar ele ser exibido na tela.
     */
    protected async waitForFlutterWeb() {
        await this.flutterWeb.waitForExist()
        await this.flutterWeb.waitForDisplayed()
    }
}
