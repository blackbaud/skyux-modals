import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  element,
  by
} from 'protractor';

describe('Confirm (lg screen)', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/confirm');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match previous OK screenshot', (done) => {
    element(by.css('.sky-confirm-btn-ok')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-ok'
    });
  });

  it('should match previous YesCancel screenshot', (done) => {
    element(by.css('.sky-confirm-btn-yescancel')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-yes-cancel'
    });
  });

  it('should match previous body screenshot', (done) => {
    element(by.css('.sky-confirm-btn-body')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-body'
    });
  });

  it('should match previous YesNoCancel screenshot', (done) => {
    element(by.css('.sky-confirm-btn-yesnocancel')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-yes-no-cancel'
    });
  });

  it('should match previous custom screenshot', (done) => {
    element(by.css('.sky-confirm-btn-custom')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-custom'
    });
  });
});

describe('Confirm (small screen)', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/confirm');
    SkyHostBrowser.setWindowBreakpoint('xs');
  });

  it('should match previous OK screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-ok')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-ok-xs'
    });
  });

  it('should match previous YesCancel screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-yescancel')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-yes-cancel-xs'
    });
  });

  it('should match previous body screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-body')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-body-xs'
    });
  });

  it('should match previous YesNoCancel screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-yesnocancel')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-yes-no-cancel-xs'
    });
  });

  it('should match previous custom screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-custom')).click();
    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: 'confirm-custom-xs'
    });
  });
});
