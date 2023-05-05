describe('Search Product on Myntra', () => {
  it('Searches and Displays Results', () => {
    // Visit the Myntra website
    cy.visit('https://www.myntra.com/', { headers: { "Accept-Encoding": "gzip, deflate" } },
      { continueAfter: 3000 })

    // Search for the product
    cy.get('input[class="desktop-searchBar"]').type('shirt');
    cy.get('a[class="desktop-submit"]').click();

    // Click on the first product
    cy.get('li[class="product-base"]')
      .find('a')
      .invoke('removeAttr', 'target')
      .eq(0).click();
      //.size-buttons-size-button.size-buttons-size-button-default
      // div.size-buttons-buttonContainer p.size-buttons-unified-size
    cy.get('.size-buttons-size-button.size-buttons-size-button-default').eq(1).click({ force: true })


    cy.get('div.pdp-add-to-bag.pdp-button.pdp-flex.pdp-center').click({ force: true })

    // Click on the bag icon to view the cart
    cy.get('.myntraweb-sprite.desktop-iconBag.sprites-headerBag').click()

    cy.reload()
    cy.get('button.css-etguer').should('exist').click({ force: true })

    // Check that the URL contains the cart page
    cy.url().should('contain', '/checkout/cart')
  })
})



