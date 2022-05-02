import BasePage from "./BasePage";

export default class FlightsPage extends BasePage{ //Se extiende para usar los metodos de Base Page
    constructor(){ //Se mapean los campos de la pagina de vuelos
        super()
        this.mainDiv = '.main_search'
        this.inputs = {
            from: "#autocomplete",
            to: "#autocomplete2",
            date: "#departure", 
            passenger: ".dropdown-toggle.dropdown-btn.waves-effect",
            search: "#flights-search",
            firstOption: ".autocomplete-result[data-index='0']",
            moreAdultsPassengers: "(//i[@class='la la-plus'])[1]" 

        }
    }

    async validatePage(){
        await page.waitForNavigation({waitUntil: 'networkidle2'})
        await page.waitForSelector(this.mainDiv)
        await page.waitForSelector(this.inputs.from)
        await page.waitForSelector(this.inputs.to)
        await page.waitForSelector(this.inputs.date)
        await page.waitForSelector(this.inputs.passenger)
        await page.waitForSelector(this.inputs.search)
    }

    async selectFlight(from, to, date, passengers){
        await this.type(this.inputs.from, from)
        await this.click(this.inputs.firstOption) //selecciona la primera opcion que aparezca

        await this.type(this.inputs.to, to)
        await this.click(this.inputs.firstOption)

        await this.type(this.inputs.date, date)

        if(passengers !== 1){
            await this.click(this.inputs.passenger)
            for(let i=0; i<passengers-1; i++){
                await this.click(this.inputs.moreAdultsPassengers)
            }
        }

        await this.click(this.inputs.search) //click en Search
    }

    async validateFligths(){
        await this.wait(5)
    }



}