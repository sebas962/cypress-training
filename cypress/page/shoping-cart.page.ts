class ShoppingCartPage {
  private shoppingMenuCart: string;
  private shoppingCart: string;

  constructor() {
    this.shoppingMenuCart =
      ".clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a";
    this.shoppingCart = ".cart_navigation span";
  }

  public visitMenuShoppingCarte(): void {
    cy.get(this.shoppingMenuCart).click();
    cy.get(this.shoppingCart).click();
  }
}

export { ShoppingCartPage };
