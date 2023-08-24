import { expect, type Locator, type Page } from '@playwright/test';
import * as dotenv from 'dotenv';
import {ProductListingPage} from "./product.listing.page";
dotenv.config();

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByTestId('autocomplete-input');
    this.searchButton = page.getByTestId('search-icon-button')
   }


  async openHomePage() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async searchProductKey(productId: string) {
    await this.searchBox.first().fill(productId);
    await this.page.keyboard.press('Enter')
    // await this.searchButton.first().click();
    let productListingPage = new ProductListingPage(this.page);
    await expect(productListingPage.filterButton).toBeVisible();
  }
}
