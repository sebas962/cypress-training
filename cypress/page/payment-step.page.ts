class PaymentStepPage {
  private addSelectBank: string;
  private confirm: string;
  private question: string;

  constructor() {
    this.addSelectBank = ".bankwire";
    this.confirm = "#cart_navigation > button > span";
    this.question = "#center_column > div > p > strong";
  }

  public visitOrder(): void {
    cy.get(this.addSelectBank).click();
    cy.get(this.confirm).click();
  }
  public verifyConfirmationMessage(verifyText: string): void {
    cy.get(this.question).should("have.text", verifyText);
  }
}

export { PaymentStepPage };
