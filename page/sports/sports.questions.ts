import SportInteractions from "./sports.interactions"

const heading = 'Balanceador de Times'

export default class SportQuestions extends SportInteractions {

    /**
     * Método para validar o título da página de Sports
     * @param title - Título da página
     */
    public async isTheTitleEqual(title: string) {
        await super.waitForSportPage()
        expect(await super.getTextLblHeading()).toBe(title)
    }
}