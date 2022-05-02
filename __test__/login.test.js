import LoginPage from "../pages/LoginPage";

let loginPage

describe('Iniciar sesion en pagina',()=>{

    beforeAll(async()=>{
        loginPage = new LoginPage()
    })


    it('Debera ir a la pagina', async()=>{
        await loginPage.visit()
    })

    it('Debera diligenciar campos', async()=>{
        await loginPage.login('user@phptravels.com','demouser')
    },20000)

    it('Validar que el login sea exitoso', async()=>{
        await loginPage.validateLogin()
    },20000)

})

