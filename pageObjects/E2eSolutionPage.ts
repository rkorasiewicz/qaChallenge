import {Page} from '@playwright/test'
export class E2eSolutionPage {

    readonly page: Page
    
    constructor(page: Page){
        this.page = page
    }
    
     async headerText() {
        return await this.page.locator('.cards-block').getByRole("heading", {level: 2}).innerText()
    }

    /**
     * 
     * @param index - index of the financial services box to click
     */
    async clickFinancialServicesBox(index: number) {
      await this.page.getByRole('link', { name: 'Learn more' }).nth(index).click()
    }

  async clickProductsMenu() {
    await this.page.locator('#menu-walker').getByRole('button', { name: 'Products' }).click();
  }

  async clickFinanceAndEsg() {
    await this.page.locator('.menu-section-item').getByRole('button').filter({ hasText: /^Finance & ESG$/ }).click();
  }

/**
 * 
 * @param linkText - text of the link to click
 */
  async clickLinkByText(linkText: string) {
    await this.page.getByRole('link', { name: linkText }).click();
  }
}