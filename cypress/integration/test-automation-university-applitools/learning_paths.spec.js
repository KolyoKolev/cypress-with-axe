import { _URLS } from '../../constants';

describe('Test Automation University Applitools', () => {
  context('Learning paths endpoint', () => {
    it('should log all accessibility issues if present', () => {
      cy.visit(_URLS.TEST_AUTOMATION_UNIVERSITY.LEARNING_PATHS);
      cy.injectAxe();
      cy.checkA11y();
    });

    it('should log all accessibility issues on a single DOM element if the formar are present', () => {
      cy.visit(_URLS.TEST_AUTOMATION_UNIVERSITY.LEARNING_PATHS);
      cy.injectAxe();
      cy.checkA11y('img');
    });
  });
});
