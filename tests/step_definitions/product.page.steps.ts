import { Given, When, Then } from '@cucumber/cucumber'
import {CustomWorld, ICustomWorld} from './custom.world'
import {ProductListingPage} from "../pages/product.listing.page";
import {ProductPage} from "../pages/product.page";


Then(/^assert product title "(.*)" and price "(.*)" are displayed on product page$/, {timeout: 60 * 1000},
    async function (this: ICustomWorld, productName: string, productPrice: string) {
  const productPage = new ProductPage(this.page!);
  await productPage.assertProductNameIsDisplayed(productName);
  await productPage.assertProductPrice(productPrice);
});

Then(/^customer adds product to cart$/, {timeout: 60 * 1000}, async function (this: ICustomWorld) {
  const productPage = new ProductPage(this.page!);
  await productPage.addToCart();
});
