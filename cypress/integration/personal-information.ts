/* eslint-disable require-jsdoc */

import {PersonalPage} from "../page/index";

const personalInformation = {
  name: "Sebastián",
  lastName: "Gómez",
  email: "sebas@email.com",
  gender: "Male",
  mobileNumber: "123456789",
  hobbies: ["Sports", "Reading"],
  subject: "Football and books",
  currentAddress: "Grant Ave",
  state: "Uttar Pradesh",
  city: "Lucknow",
};
describe("The user in the QA tools page should", () => {
  let personalInformPage: PersonalPage;

  before(() => {
    personalInformPage = new PersonalPage();
  });

  it("Fill the form", () => {
    // Arrange
    personalInformPage.visitToolsQAForm();
    const formMessage = "Thanks for submitting the form";
    // Act
    personalInformPage.fillForm(personalInformation);
    // Assert

    personalInformPage.completTheProcess(formMessage);
    personalInformPage.verifyStateAndCity(
        personalInformation.city,
        personalInformation.state
    );
  });
});
