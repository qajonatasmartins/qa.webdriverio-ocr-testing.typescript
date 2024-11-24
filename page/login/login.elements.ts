export default class LoginElements {

    /**
     * Mapeamento do elemento do campo de e-mail
     */
    get inpEmail() { return $("input[aria-label='Email']") }

    /**
     * Mapeamento do elemento do campo de senha
     */
    get inpPassword() { return $("input[aria-label='Senha']") }

    /**
     * Mapeamento do elemento do botão de entrar
     */
    get btnEnter() { return $(`flt-semantics-container > flt-semantics[role="button"]:nth-child(3)`) }

}
