describe('Search Product on Myntra', () => {
  it('Searches and Displays Results', () => {
    cy.visit('https://www.myntra.com/', { headers: { "Accept-Encoding": "gzip, deflate" } },
      { continueAfter: 3000 })

    cy.get('input[class="desktop-searchBar"]').type('shirt');
    cy.get('a[class="desktop-submit"]').click();

    cy.get('li[class="product-base"]').find('a').invoke('removeAttr', 'target').eq(0).click();
    cy.get('.size-buttons-size-button.size-buttons-size-button-default').eq(1).click({ force: true })
    cy.get('div.pdp-add-to-bag.pdp-button.pdp-flex.pdp-center').click({ force: true })
    cy.get('.myntraweb-sprite.desktop-iconBag.sprites-headerBag').click()

    cy.reload()
    cy.get('button.css-etguer').click({ force: true })
    cy.url().should('contain', '/checkout/cart')
  })
})
