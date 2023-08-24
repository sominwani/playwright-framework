import { Given, When, Then } from '@cucumber/cucumber'
import {CustomWorld, ICustomWorld} from './custom.world'
import {HomePage} from "../pages/home.page";


Given(/^a customer loads the Kmart home page$/, {timeout: 60 * 1000}, async function (this: ICustomWorld) {
  const homePage = new HomePage(this.page!);
  await homePage.openHomePage();
});


When(/^customer searches for product "(.*)"$/, {timeout: 60 * 1000}, async function (this: ICustomWorld, searchTerm: string) {
  const homePage = new HomePage(this.page!);
  await homePage.searchProductKey(searchTerm);
});
