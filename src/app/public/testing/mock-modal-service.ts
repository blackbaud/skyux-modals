export class MockModalService {
  public closeCallback: Function;
  public helpOpenCallback: Function;

  constructor() {}

  public open() {
    return {
      closed: {
        subscribe: (callback: Function) => {
          this.closeCallback = callback;
        }
      },
      helpOpened: {
        subscribe: (callback: Function) => {
          this.helpOpenCallback = callback;
        }
      }
    };
  }
}
