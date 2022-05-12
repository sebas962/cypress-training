class ShipingStepPage {
  private addContinueProcess: string;
  private addCheck: string;

  constructor() {
    this.addContinueProcess = "p > button > span";
    this.addCheck = "#cgv";
  }

  public visitAddShiping(): void {
    cy.get(this.addCheck).click();
    cy.get(this.addContinueProcess).click();
  }
}

export { ShipingStepPage };
