import { Page, Locator } from '@playwright/test';

export class HomeFinanceAndEsgPage {
  readonly page: Page;
  readonly breadcrumbMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.breadcrumbMenu = page.getByRole('menu');
  }

  /**
   * 
   * @param index 
   * @returns 
   */
  getFinancialServicesEndpoint(index: number) {
    const financialServicesEndpoints = ['/banking', '/insurance', '/finance-esg'];
    return financialServicesEndpoints[index];
  }

  async getBreadcrumbTextValue() {
    return this.breadcrumbMenu.textContent();
  }

  async verifyUserIsOnEsgKpiEnginePage() {
    await this.page.waitForURL(/\/finance-esg\/esg-kpi-engine\//);
    await this.page.getByRole('heading', { name: 'Master ESG KPI management' }).isVisible();
  }
}