import ActionsHelpers from "../../utils/helpers/actions.helpers"
import OnboardingInteractions from "./onboarding.interactions"

const elementFlutterWeb = "flt-semantics-placeholder[role='button']"
const actionsHelpers = new ActionsHelpers()

export default class OnboardingActions extends OnboardingInteractions {

    /**
     * Método para abrir o site do team building balancer
    */
    protected async openOnboarding() {
        await browser.url(`https://team-building-balancer.web.app`)
    }

    /**
     * Método exibir os elementos html do flutter web na tela para interação do framework de testes
     */
    public async waitLoadingElementsFlutterWeb() {
        await this.openOnboarding()
        await super.waitForFlutterWeb()
        await actionsHelpers.showHiddenElementsFlutter(elementFlutterWeb)
    }

    /**
     * Método para skipar a tela de onboarding
     */
    public async skipOnBoarding() {
        await super.clickBtnSkipOnBoarding()
    }

    /** Método para skipar o onboarding e ir para tela de login */
    public async skipOnBoardingAndGoLogin() {
        await this.skipOnBoarding()
        await super.clickBtnCreateNewSuperAccount()
    }
}
