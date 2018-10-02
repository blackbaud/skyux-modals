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

  afterEach((done) => {
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  describe('(lg screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('lg');
    });

    it('should match previous modal screenshot', () => {
      element(by.css('.sky-btn-primary')).click();
    });

    it('should match previous modal screenshot with help button in header', () => {
      element(by.css('.sky-modal-with-help')).click();
    });

    it('should match previous screenshot of modal without header or footer', () => {
      element(by.css('.sky-test-content-only')).click();
    });

    it('should match previous small size modal screenshot', () => {
      element(by.css('.sky-test-small-size-modal')).click();
    });

    it('should match previous medium size modal screenshot', () => {
      element(by.css('.sky-test-medium-size-modal')).click();
    });

    it('should match previous large modal screenshot', () => {
      element(by.css('.sky-test-large-modal')).click();
    });

    it('should match previous large size modal screenshot', () => {
      element(by.css('.sky-test-large-size-modal')).click();
    });
  });

  describe('(md screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('md');
    });

    it('should match previous large size modal screenshot on intermediate screens', () => {
      element(by.css('.sky-test-large-size-modal')).click();
    });

    it('should match previous tiled modal screenshot', () => {
      element(by.css('.sky-test-tiled-modal')).click();
    });
  });

  describe('(xs screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('xs');
    });

    it('should match previous modal screenshot with help button in header on small screens', () => {
      element(by.css('.sky-modal-with-help')).click();
    });

    it('should match previous modal screenshot on small screens', () => {
      element(by.css('.sky-btn-primary')).click();
    });

    it('should match previous large modal screenshot on mobile', () => {
      element(by.css('.sky-test-large-modal')).click();
    });
  });
});
