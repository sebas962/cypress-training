/* eslint-disable require-jsdoc */
class UploadFilePage {
    const text = 'terminal_input_screenshot.PNG';
  private uploadUrlPage: string;
  private browse: string;
  private uploadbtn: string;
  private titleFile: string;
  private fileName: string;

  constructor() {
    this.uploadUrlPage = "demo.automationtesting.in/FileUpload.html";
    this.browse = "#input-4";
    this.uploadbtn = "button[title = 'Upload selected files']";
      this.titleFile = ".file-footer-caption";
    this.fileName = "terminal-input-screenshot.PNG";
  }

  public visitUploadPage(): void {
    cy.visit(this.uploadUrlPage);
  }
  public uploadFile(): void {
    cy.get(this.browse).attachFile(this.fileName);
    cy.get(this.uploadbtn).click();
  }

  public getUploadedFileName(textFile : string) {
    return cy.get(this.titleFile).should(($lis) => {
        expect($lis.eq(1)).to.contain(textFile);
      });
  }
}

export { UploadFilePage };
