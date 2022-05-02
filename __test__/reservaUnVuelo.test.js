import LoginPage from "../pages/LoginPage";
import FlightsPage from "../pages/FlightsPage";
import NavBar from "../components/NavBar";



let loginPage
let flightsPage
let navBar

describe('Iniciar sesion en pagina',()=>{

    beforeAll(async()=>{
        loginPage = new LoginPage()
        flightsPage = new FlightsPage()
        navBar = new NavBar()
    })


    it('Debemos iniciar sesión', async()=>{
        await loginPage.visit()
        await loginPage.login('user@phptravels.com','demouser')
    }, 20000)

    it('Validar que el login sea exitoso', async()=>{
        await loginPage.validateLogin()
    },20000)

    it('Navegar hacía pagina de vuelos', async()=>{
        await navBar.validateNaveBarIsPresent()
        await navBar.selectMenuItem('flights')
    },50000)

    it('Validar que estamos pagina de vuelos y seleccionar vuelo', async()=>{
        await flightsPage.validatePage()
        await flightsPage.selectFlight('Mexico', 'Paris', '20-11-2022', 5)
    },50000)

    it('Validar que se haya seleccionado el vuelo', async()=>{
        await flightsPage.validateFligths()
        
    },20000)

})