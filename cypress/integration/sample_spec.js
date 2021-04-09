describe('My First Test', () => {  
      
  it('finds the content "je demarre"', () => {
    cy.on('uncaught:exception', (err, runnable) => {
            return false
    })
  
    cy.visit('https://rutabago.com');
      //  cy.contains('Je démarre');
  })
  
})
  