/* eslint-disable require-jsdoc */

class ProductListPage {
  private addProduct: string;

  constructor() {
    this.addProduct =
      "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
  }

  public visitAddProduct(): void {
    cy.get(this.addProduct).click();
  }
}

export { ProductListPage };
