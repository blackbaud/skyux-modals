import { expect, SkyHostBrowser, SkyVisualThemeSelector } from '@skyux-sdk/e2e';

import { SkyHostBrowserBreakpoint } from '@skyux-sdk/e2e/host-browser/host-browser-breakpoint';

import { by, element } from 'protractor';

describe('Confirm', () => {
  let currentTheme: string;
  let currentThemeMode: string;
  let currentBreakpoint: string;

  async function setWindowBreakpoint(
    breakpoint: SkyHostBrowserBreakpoint
  ): Promise<void> {
    await SkyHostBrowser.setWindowBreakpoint(breakpoint);
    currentBreakpoint = breakpoint;
  }

  async function scrollToTop(): Promise<void> {
    await SkyHostBrowser.scrollTo('body');
  }

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    await SkyVisualThemeSelector.selectTheme(theme, mode);
    await scrollToTop();
  }

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    if (currentBreakpoint !== 'lg') {
      name += '-' + currentBreakpoint;
    }

    return name;
  }

  async function validateOk(done: DoneFn): Promise<void> {
    await element(by.css('.sky-confirm-btn-ok')).click();

    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('confirm-ok'),
    });
  }

  async function validateYesCancel(done: DoneFn): Promise<void> {
    await element(by.css('.sky-confirm-btn-yescancel')).click();

    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('confirm-yes-cancel'),
    });
  }

  async function validateBody(done: DoneFn): Promise<void> {
    await element(by.css('.sky-confirm-btn-body')).click();

    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('confirm-body'),
    });
  }

  async function validateYesNoCancel(done: DoneFn): Promise<void> {
    await element(by.css('.sky-confirm-btn-yesnocancel')).click();

    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('confirm-yes-no-cancel'),
    });
  }

  async function validateCustom(done: DoneFn): Promise<void> {
    await element(by.css('.sky-confirm-btn-custom')).click();

    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('confirm-custom'),
    });
  }

  async function validatePreserveWhitespace(done: DoneFn): Promise<void> {
    await element(by.css('.sky-confirm-btn-preserve-white-space')).click();

    expect('#confirm-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('confirm-preserve-white-space'),
    });
  }

  beforeEach(async () => {
    currentTheme = undefined;
    currentThemeMode = undefined;

    await SkyHostBrowser.get('visual/confirm');
  });

  describe('(lg screen)', () => {
    beforeEach(async () => {
      await setWindowBreakpoint('lg');
    });

    it('should match previous OK screenshot', (done) => {
      validateOk(done);
    });

    it('should match previous YesCancel screenshot', (done) => {
      validateYesCancel(done);
    });

    it('should match previous body screenshot', (done) => {
      validateBody(done);
    });

    it('should match previous YesNoCancel screenshot', (done) => {
      validateYesNoCancel(done);
    });

    it('should match previous custom screenshot', (done) => {
      validateCustom(done);
    });

    it('should match previous preserve whitespace screenshot', (done) => {
      validatePreserveWhitespace(done);
    });
  });

  describe('(small screen)', () => {
    beforeEach(async () => {
      await setWindowBreakpoint('xs');
    });

    it('should match previous OK screenshot', (done) => {
      validateOk(done);
    });

    it('should match previous YesCancel screenshot', (done) => {
      validateYesCancel(done);
    });

    it('should match previous body screenshot', (done) => {
      validateBody(done);
    });

    it('should match previous YesNoCancel screenshot', (done) => {
      validateYesNoCancel(done);
    });

    it('should match previous custom screenshot', (done) => {
      validateCustom(done);
    });

    it('should match previous preserve whitespace screenshot', (done) => {
      validatePreserveWhitespace(done);
    });
  });

  describe('when modern theme', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    describe('(lg screen)', () => {
      beforeEach(async () => {
        await setWindowBreakpoint('lg');
      });

      it('should match previous OK screenshot', (done) => {
        validateOk(done);
      });

      it('should match previous YesCancel screenshot', (done) => {
        validateYesCancel(done);
      });

      it('should match previous body screenshot', (done) => {
        validateBody(done);
      });

      it('should match previous YesNoCancel screenshot', (done) => {
        validateYesNoCancel(done);
      });

      it('should match previous custom screenshot', (done) => {
        validateCustom(done);
      });

      it('should match previous preserve whitespace screenshot', (done) => {
        validatePreserveWhitespace(done);
      });
    });

    describe('(small screen)', () => {
      beforeEach(async () => {
        await setWindowBreakpoint('xs');
      });

      it('should match previous OK screenshot', (done) => {
        validateOk(done);
      });

      it('should match previous YesCancel screenshot', (done) => {
        validateYesCancel(done);
      });

      it('should match previous body screenshot', (done) => {
        validateBody(done);
      });

      it('should match previous YesNoCancel screenshot', (done) => {
        validateYesNoCancel(done);
      });

      it('should match previous custom screenshot', (done) => {
        validateCustom(done);
      });

      it('should match previous preserve whitespace screenshot', (done) => {
        validatePreserveWhitespace(done);
      });
    });
  });

  describe('when modern theme in dark mode', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    describe('(lg screen)', () => {
      beforeEach(async () => {
        await setWindowBreakpoint('lg');
      });

      it('should match previous OK screenshot', (done) => {
        validateOk(done);
      });

      it('should match previous YesCancel screenshot', (done) => {
        validateYesCancel(done);
      });

      it('should match previous body screenshot', (done) => {
        validateBody(done);
      });

      it('should match previous YesNoCancel screenshot', (done) => {
        validateYesNoCancel(done);
      });

      it('should match previous custom screenshot', (done) => {
        validateCustom(done);
      });

      it('should match previous preserve whitespace screenshot', (done) => {
        validatePreserveWhitespace(done);
      });
    });

    describe('(small screen)', () => {
      beforeEach(async () => {
        await setWindowBreakpoint('xs');
      });

      it('should match previous OK screenshot', (done) => {
        validateOk(done);
      });

      it('should match previous YesCancel screenshot', (done) => {
        validateYesCancel(done);
      });

      it('should match previous body screenshot', (done) => {
        validateBody(done);
      });

      it('should match previous YesNoCancel screenshot', (done) => {
        validateYesNoCancel(done);
      });

      it('should match previous custom screenshot', (done) => {
        validateCustom(done);
      });

      it('should match previous preserve whitespace screenshot', (done) => {
        validatePreserveWhitespace(done);
      });
    });
  });
});
