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
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous YesCancel screenshot', (done) => {
    element(by.css('.sky-confirm-btn-yescancel')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous body screenshot', (done) => {
    element(by.css('.sky-confirm-btn-body')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous YesNoCancel screenshot', (done) => {
    element(by.css('.sky-confirm-btn-yesnocancel')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous custom screenshot', (done) => {
    element(by.css('.sky-confirm-btn-custom')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });
});

describe('Confirm (small screen)', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/confirm');
    SkyHostBrowser.setWindowBreakpoint('xs');
  });

  it('should match previous OK screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-ok')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous YesCancel screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-yescancel')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous body screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-body')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous YesNoCancel screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-yesnocancel')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });

  it('should match previous custom screenshot on small screens', (done) => {
    element(by.css('.sky-confirm-btn-custom')).click();
    expect('.sky-modal').toMatchBaselineScreenshot(done);
  });
});
