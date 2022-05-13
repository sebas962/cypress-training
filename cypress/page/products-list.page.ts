/* eslint-disable require-jsdoc */

class ProductListPage {
  private addProduct: string;

  constructor() {
    this.addProduct = ".ajax_add_to_cart_button";
  }

  public visitAddProduct(): void {
    cy.get(this.addProduct).click();
  }
}

export { ProductListPage };
