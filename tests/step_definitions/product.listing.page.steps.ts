import { Given, When, Then } from '@cucumber/cucumber'
import {CustomWorld, ICustomWorld} from './custom.world'
import {ProductListingPage} from "../pages/product.listing.page";


Given(/^customer clicks on the product from search results$/, {timeout: 60 * 1000}, async function (this: ICustomWorld) {
  const productListingPage = new ProductListingPage(this.page!);
  await productListingPage.clickOnProductListing();
});
