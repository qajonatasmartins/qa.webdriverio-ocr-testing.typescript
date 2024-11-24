import { IUser } from "../../interfaces/login/IUser.interface"
import LoginInteractions from "./login.interactions"

export default class LoginActions extends LoginInteractions {

    /**
     * Método para realizar o login no site do team-building-balancer
     * @param user 
     */
    public async toLogin(user: IUser) {
        await this.setInpEmail(user.email)
        await this.setInpPassword(user.password)
        await this.clickBtnEnter()
    }

}