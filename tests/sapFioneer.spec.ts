import { test, expect } from '@playwright/test';
import { E2eSolutionPage } from '../pageObjects.ts/E2eSolutionPage'
import { BankingPage } from '../pageObjects.ts/BankingPage'
import { HomeFinanceAndEsgPage } from '../pageObjects.ts/HomeFinanceAndEsgPage';
import { InsurancePage } from '../pageObjects.ts/InsurancePage';
import { ContactSalesPage } from '../pageObjects.ts/ContactSalesPage';

const mainPage: string = 'https://www.sapfioneer.com/'
test.beforeEach( async ({page}) => {
  await page.goto(mainPage)
})

test('Verify financial services section', async ({ page }) => {
const e2eSolutionPage = new E2eSolutionPage(page);
const bankingPage = new BankingPage(page)

const insurancePage = new InsurancePage(page)
const homeFinanceAndEsgPage = new HomeFinanceAndEsgPage(page)

await expect(e2eSolutionPage.innerHeaderText()).toBeTruthy()
await e2eSolutionPage.clickFinancialServicesBox(0)

await expect(page.url()).toContain(bankingPage.getFinancialServicesEndpoint(0))
const breadcrumbBankingText = await bankingPage.getBreadcrumbTextValue()
expect(breadcrumbBankingText).toMatch('HomeBanking')
await page.goto(mainPage)

await e2eSolutionPage.clickFinancialServicesBox(1)

await expect(page.url()).toContain(insurancePage.getFinancialServicesEndpoint(1))
const breadcrumbInsuranceText = await insurancePage.getBreadcrumbTextValue()
expect(breadcrumbInsuranceText).toContain('HomeInsurance')
await page.goto(mainPage)

await e2eSolutionPage.clickFinancialServicesBox(2)

await expect(page.url()).toContain(homeFinanceAndEsgPage.getFinancialServicesEndpoint(2))
const breadcrumbHomefinanceAndEsgText = await homeFinanceAndEsgPage.getBreadcrumbTextValue()
expect(breadcrumbHomefinanceAndEsgText).toContain('HomeFinance and ESG')
})

test('check redirection', async ({page}) => {
  const e2eSolutionPage = new E2eSolutionPage(page);

  await e2eSolutionPage.clickProductsMenu();
  await e2eSolutionPage.clickFinanceAndEsg();
  await e2eSolutionPage.clickLinkByText('ESG KPI Engine');

  expect(page.url()).toEqual('https://www.sapfioneer.com/finance-esg/esg-kpi-engine/');
  expect(page.getByRole('heading', { name: 'Master ESG KPI management' })).toBeVisible();
})

test('email verification', async ({page}) => {
  const contactSalesPage = new ContactSalesPage(page);
  const invalidEmail = '342323';

  await contactSalesPage.goToContactSalesPage();
  expect(await contactSalesPage.getContactSalesUrl()).toEqual(`${mainPage}contact-sales/`);
  await contactSalesPage.fillEmail(invalidEmail);
  await contactSalesPage.verifyEmailValue(invalidEmail);
  await contactSalesPage.verifyEmailErrorMessage();
})
