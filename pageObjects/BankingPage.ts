import {Page} from '@playwright/test'
export class BankingPage {

    readonly page: Page
    
    constructor(page: Page){
        this.page = page
    }

    /**
     * 
     * @param index - index of the financial services endpoint to return
     * @returns 
     */
    getFinancialServicesEndpoint(index: number): string{
        const financialServicesEndpoints: string[] = ['/banking', '/insurance', '/finance-esg' ]
        return financialServicesEndpoints[index]
    }

    async getBreadcrumbTextValue(){
        const breadcrumbRow = this.page.getByRole('menu')
        const breadcrumbText = await breadcrumbRow.textContent()
        return breadcrumbText
    }
    
}