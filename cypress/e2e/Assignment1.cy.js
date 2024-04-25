describe('Selectable Items Test on DemoQA', () => {
    // Setup for each test case: navigating to the page and initializing the environment
    beforeEach(() => {
      // Navigate to the Selectable items page
      cy.visit('https://demoqa.com/selectable');
      // Ensure the Grid view tab is clicked for consistent test setup
      cy.get('a#demo-tab-grid').click();
    });
  
    // List of item texts that should be highlighted when clicked
    const activeItems = ['Two', 'Four', 'Six', 'Eight'];
    // List of item texts that should remain unhighlighted
    const nonActiveItems = ['One', 'Three', 'Five', 'Seven', 'Nine'];
  
    // Single test to verify both selected and unselected items
    it('should verify that specific items are highlighted when selected and others are not', () => {
      // Loop through each active item, click it, and check for correct highlighting
      activeItems.forEach(item => {
        cy.contains('li.list-group-item', item)
          .click()
          .should('have.class', 'list-group-item-action') // Check the item has the base class for style
          .should('have.class', 'active', `${item} should be highlighted.`); // Ensure the item is marked as active
      });
  
      // Loop through each non-active item and ensure it is not highlighted
      nonActiveItems.forEach(item => {
        cy.contains('li.list-group-item', item)
          .should('have.class', 'list-group-item-action') // Check the item has the base class for style
          .should('not.have.class', 'active', `${item} should not be highlighted.`); // Verify the item is not marked as active
      });
    });
  });
  