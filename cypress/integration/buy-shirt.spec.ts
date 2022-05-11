describe("Buy a t-shirt", () => {

    it("then the t-shirt should be bought", () => {
        cy.visit("http://automationpractice.com/")
        cy.get("#block_top_menu > ul > li:nth-child(3) > a").click()
        cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click()
        cy.get(".clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a").click()
        cy.get(".cart_navigation span").click()
        cy.get("#email").type("aperdomobo@gmail.com")
        cy.get("#passwd").type("WorkshopProtractor")
        // Localizadores propios
        cy.get("#SubmitLogin > span > i").click()
        cy.get(" p > button > span").click()
        cy.get("#cgv").click()
        cy.get(" p > button > span").click()
        cy.get("#HOOK_PAYMENT > div:nth-child(1) > div > p > a").click()
        cy.get("#cart_navigation > button > span").click()

        cy.get("#center_column > div > p > strong")
            .should("have.text", "Your order on My Store is complete.")
    });
});