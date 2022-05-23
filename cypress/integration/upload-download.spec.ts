/* eslint-disable require-jsdoc */

import {UploadFilePage} from "../page/index";

describe("the user navigates", () => {
  let uploadPage: UploadFilePage;

  before(() => {
    uploadPage = new UploadFilePage();
  });

  it("should upload file and verify the file title", () => {
    const text = "terminal_input_screenshot";
    // arrange
    uploadPage.visitUploadPage();
    // action
    uploadPage.uploadFile();
    // asserts
    uploadPage.getUploadedFileName(text);
  });
});
