import { gondola, locator, page, action } from "gondolajs";

@page
export class JiraLoginPage {
    @locator public tbUsername = `//input[@id="username"]`;
    @locator public tbPassword = `//input[@id="password"]`;
    @locator public btnLoginSubmit = `//button[@id="login-submit"]`;

    @action("login", "login")
    public async login() {
        await gondola.waitForElement(this.tbUsername, 10);
        await gondola.enter(this.tbUsername, "thanh.chi.nguyen@logigear.com");
        await gondola.click(this.btnLoginSubmit);
        await gondola.waitForElement(this.tbPassword,5);
        await gondola.enter(this.tbPassword, "Th99171590");
        await gondola.click(this.btnLoginSubmit);
    }
}

export default new JiraLoginPage();
