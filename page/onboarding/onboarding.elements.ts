export default class OnboardingElements {

    /**
     * Mapeamento do botão [Pular OnBoarding]
     */
    get btnSkipOnBoarding() { return $("=Pular OnBoarding") }

    /**
     * Mapeamento do botão de [Criar uma super conta]
     */
    get btnCreateNewSuperAccount() { return $("=Criar Uma Super Conta") }

    get flutterWeb() { return $("flt-semantics-placeholder[role='button']") }

}
