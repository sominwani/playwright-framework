import { expect, type Locator, type Page } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export class ProductPage {
  readonly page: Page;
  readonly productNameLabel: Locator;
  readonly addToBagButton: Locator
  readonly viewBagButton: Locator
  readonly productPriceLabel: Locator

  constructor(page: Page) {
    this.page = page;
    this.productNameLabel = page.getByTestId('product-title').first();
    this.addToBagButton = page.getByTestId('product-button');
    this.viewBagButton = page.getByTestId('viewYourBagButton');
    this.productPriceLabel = page.getByTestId('product-price')
  }

  async assertProductNameIsDisplayed (productTitle: string) {
    await expect(this.productNameLabel).toHaveText(productTitle);
  }

  async assertProductPrice (productPrice: string){
    await expect(this.productPriceLabel).toHaveText(productPrice);
  }

  async addToCart() {
    await this.addToBagButton.click();
    await expect(this.viewBagButton).toBeVisible();
    await this.viewBagButton.click();
  }
}
