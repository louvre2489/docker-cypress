describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('Visits the Kitchen Sink', () => {
    cy.visit('http://app:80')
  })
})
