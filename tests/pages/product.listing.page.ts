import { expect, type Locator, type Page } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export class ProductListingPage {
  readonly page: Page;
  readonly product: Locator;
  readonly filterButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.product = page.getByTestId('product-image');
    this.filterButton = page.getByTestId('filter-button');
  }

  async clickOnProductListing() {
    await this.product.first().click();
  }


}
