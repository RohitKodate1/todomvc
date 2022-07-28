it("Datahub Visit", ()=>  {
    cy.visit("https://aedo-data-foundation-fd-stg.azurefd.net/")
    cy.contains('SIGN IN')

});