export default class BasePage {

    async getTitle(){
        return await page.title()
    }

    async getUrl(){
        return await page.url()
    }

    async getText(selector){
        try{
            await page.waitForSelector(selector)
            return await page.$eval(selector, (el)=>el.textContent)
        } catch{
            throw new Error(`Error al obtener el texto del selector ${selector}`)

        }
    }

    async getAttribute(selector, attribute){
        try{
            await page.waitForSelector(selector)
            return await page.$eval(selector, (el)=>el.getAttribute(attribute))
        } catch{
            throw new Error(`Error al obtener el atributo del selector ${selector}`)

        }
    }

    async getValue(selector){
        try{
            await page.waitForSelector(selector)
            return await page.$eval(selector, (el)=>el.value)
        } catch{
            throw new Error(`Error al obtener el valor del selector ${selector}`)

        }
    }

    async getCount(selector){
        try{
            await page.waitForSelector(selector)
            return await page.$$eval(selector, (el)=>el.length)
        } catch{
            throw new Error(`Error al obtener el numero de elementos del selector ${selector}`)

        }
    }

    async click(selector){
        try{
            await page.waitForSelector(selector)
            await page.click(selector)
            
        } catch{
            throw new Error(`Error al dar click al selector ${selector}`)

        }
    }

    async type(selector, text, opts={}){
        try{
            await page.waitForSelector(selector)
            await page.type(selector, text, opts)
            
        } catch{
            throw new Error(`Error al dar escribir en el selector ${selector}`)

        }
    }

    async type(selector){
        try{
            await page.waitForSelector(selector)
            await page.click(selector, {clickCount:2})
            
        } catch{
            throw new Error(`Error al dar doble click en el selector ${selector}`)

        }
    }

    async wait(time){
      return page.waitForTimeout(time)
    }



}