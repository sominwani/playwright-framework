import { expect, type Locator, type Page } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export class CheckoutBagPage {
  readonly page: Page;
  readonly productNameLabel: Locator;
  readonly addToBagButton: Locator
  readonly viewBagButton: Locator
  readonly clickAndCollectButton: Locator
  readonly deliveryButton: Locator
  readonly deleteButton: Locator
  readonly continueToDetailsButton: Locator
  readonly bagTotalLabel: Locator
  readonly bagShippingChargesLabel: Locator

  constructor(page: Page) {
    this.page = page;
    this.productNameLabel = page.getByTestId('product-title').first();
    this.addToBagButton = page.getByTestId('product-button');
    this.viewBagButton = page.getByTestId('viewYourBagButton');
    this.clickAndCollectButton = page.locator('//button/span[text()="Click & Collect"]');
    this.deliveryButton = page.locator('//button/span[text()="Delivery"]')
    this.deleteButton = page.getByTestId('deleteButton');
    this.continueToDetailsButton = page.getByTestId('checkout-button');
    this.bagTotalLabel = page.locator('//dd[@data-testid="bagTotal"]/span');
    this.bagShippingChargesLabel = page.locator('//dd[@data-testid="bagShipping-dd"]/span');

  }

  async assertObjectsOnCheckoutPage(productName: string, expectedBagTotal: string){
    await expect(this.page.locator('a', {hasText: productName})).toBeVisible();
    await expect(this.deleteButton).toBeVisible();
    await expect(this.clickAndCollectButton).toBeVisible();
    await expect(this.deliveryButton).toBeVisible();
    await expect(this.continueToDetailsButton).toBeVisible();
    await expect(this.bagTotalLabel).toHaveText(expectedBagTotal)
  }

  async assertDeliveryShipping(shippingCharge: string) {
    expect(this.bagShippingChargesLabel).toHaveText(shippingCharge);
  }

  async clickOnContinueToDetails() {
    await this.continueToDetailsButton.click();
  }

  async clickOnClickAndCollect() {
    await this.clickAndCollectButton.click();
  }

  async clickOnDelivery() {
    await this.deliveryButton.click();
  }
}
