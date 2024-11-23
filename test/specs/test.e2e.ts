describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url("https://team-building-balancer.web.app/#/signin")
        await browser.ocrWaitForTextDisplayed({
            text: "Email",
        });
        await browser.ocrSetValue({
            text: "Email",
            value: "rodrigo.camini@gmail.com",
        });

        await browser.ocrSetValue({
            text: "Senha",
            value: "flutter@1",
        });

        await browser.ocrClickOnText({ text: "Entrar" });

        await browser.ocrWaitForTextDisplayed({
            text: "Balanceador de Times",
        });
        // await browser.ocrClickOnText({ text: "Email" });
        await browser.pause(5000)
    })
})

