import { _URLS } from '../../constants';

describe('Test Automation University Applitools', () => {
  context('Learning paths endpoint', () => {
    beforeEach(() => {
      cy.visit(_URLS.TEST_AUTOMATION_UNIVERSITY.LEARNING_PATHS);
      cy.injectAxe();
    });

    it('should log all accessibility issues if present on the page', () => {
      cy.checkA11y();
    });

    it('should log all accessibility issues on a single DOM element if both are present', () => {
      cy.checkA11y('img');
    });

    it('should log only the critical accessibility issues if present on the page', () => {
      cy.checkA11y(null, {
        includedImpacts: ['critical'],
      });
    });
  });
});
