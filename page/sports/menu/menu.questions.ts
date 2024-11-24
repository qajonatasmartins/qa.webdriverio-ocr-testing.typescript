import MenuInteractions from "./menu.interactions"

export default class MenuQuestions extends MenuInteractions {

    /**
     * Método para abrir no menu da tela de sports
     */
    public async isTheLoggedUser(userLoggedIn: string) {
        expect(await super.getTextLblUserLogged()).toBe(userLoggedIn)
    }
}