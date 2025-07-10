import { Page, Locator } from '@playwright/test';

export class E2eSolutionPage {
  readonly page: Page;
  readonly productsMenu: Locator;
  readonly financeAndEsgButton: Locator;
  readonly financialServicesBoxes: Locator;
  readonly headingInCardsBlock: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsMenu = page.locator('#menu-walker').getByRole('button', { name: 'Products' });
    this.financeAndEsgButton = page.locator('.menu-section-item').getByRole('button').filter({ hasText: /^Finance & ESG$/ });
    this.financialServicesBoxes = page.getByRole('link', { name: 'Learn more' });
    this.headingInCardsBlock = page.locator('.cards-block').getByRole('heading', { level: 2 });
  }

  async getHeaderText() {
    return this.headingInCardsBlock.innerText();
  }

  async clickFinancialServicesBox(index: number) {
    await this.financialServicesBoxes.nth(index).click();
  }

  async openProductsMenu() {
    await this.productsMenu.click();
  }

  async selectFinanceAndEsg() {
    await this.financeAndEsgButton.click();
  }

  async clickLinkByText(linkText: string) {
    await this.page.getByRole('link', { name: linkText }).click();
  }

  async navigateToEsgKpiEngine() {
    await this.openProductsMenu();
    await this.selectFinanceAndEsg();
    await this.clickLinkByText('ESG KPI Engine');
  }
}