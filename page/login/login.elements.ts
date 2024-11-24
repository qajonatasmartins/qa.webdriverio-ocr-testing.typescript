export default class LoginElements {

    /**
     * Mapeamento do elemento do campo de e-mail
     */
    get inpEmail() { return $("aria/Email") }

    /**
     * Mapeamento do elemento do campo de senha
     */
    get inpPassword() { return $("aria/Senha") }

    /**
     * Mapeamento do elemento do botão de entrar
     */
    get btnEnter() { return $(`flt-semantics-container > flt-semantics[role="button"]:nth-child(3)`) }

}
