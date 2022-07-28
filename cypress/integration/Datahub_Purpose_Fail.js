it("Datahub Visit", ()=>  {
    cy.visit("https://aedo-data-foundation-fd-stg.azurefd.net/")
    cy.contains('SIGN OUT')
    cy.wait(3000)
    cy.wait(3000)
    cy.wait(3000)
    cy.wait(3000)

});