import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  element,
  by
} from 'protractor';

describe('Modal', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/modal');
  });

  describe('(lg screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('lg');
    });

    it('should match previous modal screenshot', (done) => {
      element(by.css('.sky-btn-primary')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-lg-screenshot'
      });
    });

    it('should match previous modal screenshot with help button in header', (done) => {
      element(by.css('.sky-modal-with-help')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-lg-with-help-screenshot'
      });
    });

    it('should match previous screenshot of modal without header or footer', (done) => {
      element(by.css('.sky-test-content-only')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-lg-content-screenshot'
      });
    });

    it('should match previous small size modal screenshot', (done) => {
      element(by.css('.sky-test-small-size-modal')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-lg-small-size-screenshot'
      });
    });

    it('should match previous medium size modal screenshot', (done) => {
      element(by.css('.sky-test-medium-size-modal')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-lg-medium-size-screenshot'
      });
    });

    it('should match previous large modal screenshot', (done) => {
      element(by.css('.sky-test-large-modal')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-lg-large-screenshot'
      });
    });

    it('should match previous unsaved work confirmation screenshot', (done) => {
      element(by.css('.sky-test-large-modal')).click();
      element(by.css('.sky-modal-btn-close')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-lg-unsaved-work-screenshot'
      });
    });

    it('should match previous large size modal screenshot', (done) => {
      element(by.css('.sky-test-large-size-modal')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-lg-large-size-screenshot'
      });
    });

    it('should match previous autofocus screenshot', (done) => {
      element(by.css('.sky-test-large-modal-autofocus')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-lg-autofocus-screenshot'
      });
    });
  });

  describe('(md screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('md');
    });

    it('should match previous large size modal screenshot on intermediate screens', (done) => {
      element(by.css('.sky-test-large-size-modal')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-md-large-size-screenshot'
      });
    });

    it('should match previous tiled modal screenshot', (done) => {
      element(by.css('.sky-test-tiled-modal')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-md-tiled-screenshot'
      });
    });
  });

  describe('(xs screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('xs');
    });

    it('should match previous modal screenshot with help button in header on small screens', (done) => {
      element(by.css('.sky-modal-with-help')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-xs-with-help-screenshot'
      });
    });

    it('should match previous modal screenshot on small screens', (done) => {
      element(by.css('.sky-btn-primary')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-xs-screenshot'
      });
    });

    it('should match previous large modal screenshot on mobile', (done) => {
      element(by.css('.sky-test-large-modal')).click();
      expect('body').toMatchBaselineScreenshot(done, {
        screenshotName: 'modal-xs-large-size-screenshot'
      });
    });
  });
});
