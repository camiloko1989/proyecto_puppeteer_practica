import BasePage from "../pages/BasePage";

export default class NavBar extends BasePage{

    constructor(){  //Mapea los elementos de la barra de navegacion
        super()
        this.navBar = '.menu-wrapper'
        this.menu = {
            home: "//a[normalize-space()='Home']",
            hotels: "//a[normalize-space()='Hotels']",
            flights: "//a[normalize-space()='flights']"
        }
    }

    async validateNaveBarIsPresent(){ // Validar si la barra de navegación se desplegó
        await page.waitForSelector(this.navBar)
        await page.waitForXPath(this.menu.home)
        await page.waitForXPath(this.menu.hotels)
        await page.waitForXPath(this.menu.flights)
    }

    async selectMenuItem(menuItem){ //Seleccionar un item de la barra de navegacion
        await this.click(this.menu[menuItem])
    }

}