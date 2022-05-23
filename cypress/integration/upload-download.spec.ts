/* eslint-disable require-jsdoc */

import {UploadFilePage} from "../page/index";

describe("the user navigates", () => {
  let uploadPage: UploadFilePage;

  before(() => {
    uploadPage = new UploadFilePage();
  });

  it("should upload file and verify the file title", () => {
    const fileUpload = "terminal_input_screenshot.png";
    const text = fileUpload.slice(0, fileUpload.length - 4);
    // Arrange
    uploadPage.visitUploadPage();
    // Action
    uploadPage.uploadFile(fileUpload);
    // Asserts
    uploadPage.verifyUploadedFile(text);
  });
});
