/// <reference types="cypress" />
import { _URLS } from '../../constants';
import { terminalLog } from '../../helpers';

describe('Test Automation University Applitools', () => {
  context('Learning paths endpoint', () => {
    before(() => {
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

    it('should log in terminal only the critical & serious accessibility issues if present on the page', () => {
      // run `npm run cyr` command in order to see the outcome
      cy.checkA11y(
        null,
        {
          includedImpacts: ['critical', 'serious'],
        },
        terminalLog
      );
    });
  });
});
