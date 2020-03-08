
describe('Task 1', function() {
  it('Visit the Site', function() {
    cy.visit('http://www.automationpractice.com.')		//opens the website
	cy.wait(1000)
	
	cy.contains('Sign in').click()						// finds the Sign in and clicks on it
	cy.get('[id="email"]').type('test@test.com')		// fills the email field
	cy.wait(1000)
	
	cy.get('[id="passwd"]').type('123456')				// fills the password field
	cy.wait(1000)
	
	cy.get('[id="SubmitLogin"]').click()				// clicks on Submin login button
	  
  })
})

