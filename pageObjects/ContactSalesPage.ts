import { Page, expect } from '@playwright/test';

export class ContactSalesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
  async goToContactSalesPage() {
    await this.page.locator('.btn--yellow').filter({ hasText: 'Get in touch' }).first().click();
  }

  /**
   * 
   * @param email 
   */
  async fillEmail(email: string) {
    const emailInputField = this.page.locator('[name="email"]');
    await emailInputField.fill(email);
  }

/**
 * 
 * @param email 
 */
  async verifyEmailValue(email: string) {
    await expect(this.page.locator('[name="email"]')).toHaveValue(email);
  }

  async verifyEmailErrorMessage() {
    await expect(this.page.getByText('Email must be formatted correctly.')).toBeVisible();
  }

  async getContactSalesUrl() {
    return this.page.url();
  }
}