/// <reference types="cypress" />

describe("learn about locators", () => {
  beforeEach(() => {
    cy.visit("form-validator/index.html");
  });

  it("Open local file", () => {
    cy.get("#form").should("be.visible");
    cy.get("#username").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#password2").should("be.visible");
    cy.get("#submit-button").should("be.visible");
  });

  it("user name validate test", () => {
    cy.get("#username").should("be.visible").type("ab");
    cy.get("#submit-button").click();
    cy.get("#username")
      .siblings()
      .contains("Username must be at least 3 characters");

    cy.get("#username").should("have.css", "border-color", "rgb(231, 76, 60)");

    cy.get("#username").clear().type("abc");

    cy.get("#submit-button").click();
    cy.get("#username")
      .siblings()
      .should("not.have.text", "Username must be at least 3 characters");

    cy.get("#username").should("have.css", "border-color", "rgb(46, 204, 113)");
  });

  it("email validate test", () => {
    cy.get("#email").should("be.visible").type("ab");
    cy.get("#submit-button").click();
    cy.get("#email").siblings().contains("Email is not valid");

    cy.get("#email").should("have.css", "border-color", "rgb(231, 76, 60)");

    cy.get("#email").clear().type("abc@naver.com");

    cy.get("#submit-button").click();
    cy.get("#email").siblings().should("not.have.text", "Email is not valid");

    cy.get("#email").should("have.css", "border-color", "rgb(46, 204, 113)");
  });

  it("password validate test", () => {
    cy.get("#password").should("be.visible").type("ab");
    cy.get("#submit-button").click();
    cy.get("#password")
      .siblings()
      .contains("Password must be at least 6 characters");

    cy.get("#password").should("have.css", "border-color", "rgb(231, 76, 60)");

    cy.get("#password").clear().type("abc123");

    cy.get("#submit-button").click();
    cy.get("#password")
      .siblings()
      .should("not.have.text", "Password must be at least 6 characters");

    cy.get("#password").should("have.css", "border-color", "rgb(46, 204, 113)");
    cy.get("#password2").siblings().contains("Passwords do not match");
    cy.get("#password2").should("have.css", "border-color", "rgb(231, 76, 60)");
    cy.get("#password2").type("abc123");

    cy.get("#submit-button").click();

    cy.get("#password2")
      .siblings()
      .should("not.have.text", "Passwords do not match");
    cy.get("#password2").should(
      "have.css",
      "border-color",
      "rgb(46, 204, 113)"
    );
  });

  it("form validate test", () => {
    cy.get("#username").type("abc");
    cy.get("#email").clear().type("abc@naver.com");
    cy.get("#password").type("abc123");
    cy.get("#password2").type("abc123");

    cy.get("#submit-button").click();

    cy.get("#username").should("have.css", "border-color", "rgb(46, 204, 113)");
    cy.get("#email").should("have.css", "border-color", "rgb(46, 204, 113)");
    cy.get("#password").should("have.css", "border-color", "rgb(46, 204, 113)");
    cy.get("#password2").should(
      "have.css",
      "border-color",
      "rgb(46, 204, 113)"
    );
  });
});
