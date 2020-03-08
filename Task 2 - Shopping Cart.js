describe('Task 2', function() {
  it('Visit the Site', function() {
    cy.visit('http://www.automationpractice.com.')				// opens the website
	cy.wait(1000)
	
	cy.get('[id="search_query_top"]').type('black dress')		//finds the search field and enters the text
	cy.get('[name="submit_search"]').click()					// finds the submit search button and clicks it	
	cy.wait(1000)
	
	cy.get('[title="Add to cart"]').eq(0).click()				// finds Add to cart button for first dress and clicks it
	cy.get('[title="Close window"]').click()					// closes the confirmation window
	cy.wait(1000)
	
	cy.get('[title="Add to cart"]').eq(1).click()				// finds Add to cart button for second dress and clicks it
	cy.get('[title="Close window"]').click()					// closes the confirmation window
	cy.wait(1000)
	
	cy.get('[title="View my shopping cart"]').click()			// click to proceed tp check out	
	cy.get('[title="Add"]').eq(1).click()						// Adds one more dress number 2
	cy.wait(1000)
	
	cy.get('[title="Delete"]').eq(0).click()					// Removes dress number one
    cy.wait(1000)
	
	cy.get('[title="Proceed to checkout"]').eq(1).click() 		// Continues to check out

  })
})