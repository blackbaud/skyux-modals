import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

import {
  element,
  by
} from 'protractor';

describe('Modal', () => {
  let currentTheme: string;
  let currentThemeMode: string;

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

    return name;
  }

  async function validateBasic(done: DoneFn): Promise<void> {
    await element(by.css('.sky-btn-primary')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-screenshot')
    });
  }

  async function validateHelpButton(done: DoneFn): Promise<void> {
    await element(by.css('.sky-modal-with-help')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-with-help-screenshot')
    });
  }

  async function validateExtendedTitle(done: DoneFn): Promise<void> {
    await element(by.css('.sky-modal-with-extended-title')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-with-extended-title')
    });
  }

  async function validateNoHeaderFooter(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-content-only')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-content-screenshot')
    });
  }

  async function validateSmall(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-small-size-modal')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-small-size-screenshot')
    });
  }

  async function validateMedium(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-medium-size-modal')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-medium-size-screenshot')
    });
  }

  async function validateLarge(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-large-modal')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-large-screenshot')
    });
  }

  async function validateCloseConfirm(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-large-modal-close-confirmation')).click();
    await element(by.css('.sky-modal-btn-close')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-close-confirmation-screenshot')
    });
  }

  async function validateFull(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-large-size-modal')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-large-size-screenshot')
    });
  }

  async function validateAutofocus(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-large-modal-autofocus')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-lg-autofocus-screenshot')
    });
  }

  async function validateLargMd(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-large-size-modal')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-md-large-size-screenshot')
    });
  }

  async function validateTiledMd(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-tiled-modal')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-md-tiled-screenshot')
    });
  }

  async function validateHelpButtonXs(done: DoneFn): Promise<void> {
    await element(by.css('.sky-modal-with-help')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-xs-with-help-screenshot')
    });
  }

  async function validateExtendedTitleXs(done: DoneFn): Promise<void> {
    await element(by.css('.sky-modal-with-extended-title')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-xs-with-extended-title-screenshot')
    });
  }

  async function validateBasicXs(done: DoneFn): Promise<void> {
    await element(by.css('.sky-btn-primary')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-xs-screenshot')
    });
  }

  async function validateLargeXs(done: DoneFn): Promise<void> {
    await element(by.css('.sky-test-large-modal')).click();

    expect('#modal-screenshot').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('modal-xs-large-size-screenshot')
    });
  }

  beforeEach(async () => {
    currentTheme = undefined;
    currentThemeMode = undefined;

    await SkyHostBrowser.get('visual/modal');
    await SkyHostBrowser.moveCursorOffScreen();
  });

  describe('(lg screens)', () => {
    beforeEach(async () => {
      await SkyHostBrowser.setWindowBreakpoint('lg');
    });

    it('should match previous modal screenshot', (done) => {
      validateBasic(done);
    });

    it('should match previous modal screenshot with help button in header', (done) => {
      validateHelpButton(done);
    });

    it('should match previous modal screenshot with extended header title', (done) => {
      validateExtendedTitle(done);
    });

    it('should match previous screenshot of modal without header or footer', (done) => {
      validateNoHeaderFooter(done);
    });

    it('should match previous small size modal screenshot', (done) => {
      validateSmall(done);
    });

    it('should match previous medium size modal screenshot', (done) => {
      validateMedium(done);
    });

    it('should match previous large modal screenshot', (done) => {
      validateLarge(done);
    });

    it('should match previous close confirmation screenshot', (done) => {
      validateCloseConfirm(done);
    });

    it('should match previous large size modal screenshot', (done) => {
      validateFull(done);
    });

    it('should match previous autofocus screenshot', (done) => {
      validateAutofocus(done);
    });
  });

  describe('(md screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('md');
    });

    it('should match previous large size modal screenshot on intermediate screens', (done) => {
      validateLargMd(done);
    });

    it('should match previous tiled modal screenshot', (done) => {
      validateTiledMd(done);
    });
  });

  describe('(xs screens)', () => {
    beforeEach(() => {
      SkyHostBrowser.setWindowBreakpoint('xs');
    });

    it('should match previous modal screenshot with help button in header on small screens', (done) => {
      validateHelpButtonXs(done);
    });

    it('should match previous modal screenshot with extended header title on small screens', (done) => {
      validateExtendedTitleXs(done);
    });

    it('should match previous modal screenshot on small screens', (done) => {
      validateBasicXs(done);
    });

    it('should match previous large modal screenshot on mobile', (done) => {
      validateLargeXs(done);
    });
  });

  describe('when modern theme', () => {

    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    describe('(lg screens)', () => {
      beforeEach(async () => {
        await SkyHostBrowser.setWindowBreakpoint('lg');
      });

      it('should match previous modal screenshot', (done) => {
        validateBasic(done);
      });

      it('should match previous modal screenshot with help button in header', (done) => {
        validateHelpButton(done);
      });

      it('should match previous modal screenshot with extended header title', (done) => {
        validateExtendedTitle(done);
      });

      it('should match previous screenshot of modal without header or footer', (done) => {
        validateNoHeaderFooter(done);
      });

      it('should match previous small size modal screenshot', (done) => {
        validateSmall(done);
      });

      it('should match previous medium size modal screenshot', (done) => {
        validateMedium(done);
      });

      it('should match previous large modal screenshot', (done) => {
        validateLarge(done);
      });

      it('should match previous large size modal screenshot', (done) => {
        validateFull(done);
      });

      it('should match previous autofocus screenshot', (done) => {
        validateAutofocus(done);
      });
    });

    describe('(md screens)', () => {
      beforeEach(() => {
        SkyHostBrowser.setWindowBreakpoint('md');
      });

      it('should match previous large size modal screenshot on intermediate screens', (done) => {
        validateLargMd(done);
      });
    });

    describe('(xs screens)', () => {
      beforeEach(() => {
        SkyHostBrowser.setWindowBreakpoint('xs');
      });

      it('should match previous modal screenshot with help button in header on small screens', (done) => {
        validateHelpButtonXs(done);
      });

      it('should match previous modal screenshot with extended header title on small screens', (done) => {
        validateExtendedTitleXs(done);
      });

      it('should match previous modal screenshot on small screens', (done) => {
        validateBasicXs(done);
      });

      it('should match previous large modal screenshot on mobile', (done) => {
        validateLargeXs(done);
      });
    });

  });

  describe('when modern theme in dark mode', () => {

    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    describe('(lg screens)', () => {
      beforeEach(async () => {
        await SkyHostBrowser.setWindowBreakpoint('lg');
      });

      it('should match previous modal screenshot', (done) => {
        validateBasic(done);
      });

      it('should match previous modal screenshot with help button in header', (done) => {
        validateHelpButton(done);
      });

      it('should match previous modal screenshot with extended header title', (done) => {
        validateExtendedTitle(done);
      });

      it('should match previous screenshot of modal without header or footer', (done) => {
        validateNoHeaderFooter(done);
      });

      it('should match previous small size modal screenshot', (done) => {
        validateSmall(done);
      });

      it('should match previous medium size modal screenshot', (done) => {
        validateMedium(done);
      });

      it('should match previous large modal screenshot', (done) => {
        validateLarge(done);
      });

      it('should match previous large size modal screenshot', (done) => {
        validateFull(done);
      });

      it('should match previous autofocus screenshot', (done) => {
        validateAutofocus(done);
      });
    });

    describe('(md screens)', () => {
      beforeEach(() => {
        SkyHostBrowser.setWindowBreakpoint('md');
      });

      it('should match previous large size modal screenshot on intermediate screens', (done) => {
        validateLargMd(done);
      });
    });

    describe('(xs screens)', () => {
      beforeEach(() => {
        SkyHostBrowser.setWindowBreakpoint('xs');
      });

      it('should match previous modal screenshot with help button in header on small screens', (done) => {
        validateHelpButtonXs(done);
      });

      it('should match previous modal screenshot with extended header title on small screens', (done) => {
        validateExtendedTitleXs(done);
      });

      it('should match previous modal screenshot on small screens', (done) => {
        validateBasicXs(done);
      });

      it('should match previous large modal screenshot on mobile', (done) => {
        validateLargeXs(done);
      });
    });

  });

});
