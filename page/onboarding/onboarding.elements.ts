export default class OnboardingElements {

    /**
     * Mapeamento do botão [Pular OnBoarding]
     */
    get btnSkipOnBoarding() { return $("//flt-semantics[contains(text(),'Pular OnBoarding')]") }

    /**
     * Mapeamento do botão de [Criar uma super conta]
     */
    get btnCreateNewSuperAccount() { return $("//flt-semantics[contains(text(),'Criar Uma Super Conta')]") }

    get flutterWeb() { return $("flt-semantics-placeholder[role='button']") }

}
