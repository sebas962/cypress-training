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
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.visitAddProduct();
    shoppingCartPage.visitMenuShoppingCarte();
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    // Own locators
    addressPage.visitAddressCheckOut();
    shipingStepPage.visitAddShiping();
    paymentStepPage.visitOrder();

    paymentStepPage.verifyConfirmationMessage("Your order on My Store is complete.");
    );
  });
});
