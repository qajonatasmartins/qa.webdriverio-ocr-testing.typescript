export default class MenuElements {

    /**
     * Mapeamento do botão do menu da página
     */
    get btnMenu() { return $("=Abrir menu de navegação") }

    /**
     * Mapeamento do texto com o nome do usuário logado
     */
    get lblUserLogged() { return $("flt-semantics[role='group']") }

    /**
     * Mapeamento do botão de [Sign Out]
     */
    get btnSignOut() { return $("=Sign Out") }

}