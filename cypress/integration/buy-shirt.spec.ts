import {
  MenuContentPage,
  ProductListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShipingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressPage = new AddressStepPage();
const shipingStepPage = new ShipingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    let user = "aperdomobo@gmail.com";
    let pass = "WorkshopProtractor";
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.visitAddProduct();
    shoppingCartPage.visitMenuShoppingCarte();
    loginPage.login(user, pass);
    // Own locators
    addressPage.visitAddressCheckOut();
    shipingStepPage.visitAddShiping();
    paymentStepPage.visitOrder();

    paymentStepPage.verifyConfirmationMessage(
      "Your order on My Store is complete."
    );
  });
});
