/* eslint-disable require-jsdoc */

class AddressStepPage {
  private addCheckOutProccess: string;

  constructor() {
    this.addCheckOutProccess = "p > button > span";
  }

  public visitAddressCheckOut(): void {
    cy.get(this.addCheckOutProccess).click();
  }
}

export { AddressStepPage };
