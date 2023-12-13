import { app } from 'electron';
import MainWindow from './mainWindow';
import { install as devTool } from './devTools';

class Main {
  private app = app;
  private mainWindow = new MainWindow();

  constructor() {
    this.appSettings();
    this.ready().catch(e => console.error('Failed create window:', e));
  }

  static init() {
    return new Main();
  }

  private singleInstance = () => {
    const isSingleInstance = this.app.requestSingleInstanceLock();
    if (!isSingleInstance) {
      this.app.quit();
      process.exit(0);
    }
    this.app.on('second-instance', this.mainWindow.create);
  };
  
  private appSettings = () => {
    this.singleInstance();
    this.app.disableHardwareAcceleration();
    this.app.on('window-all-closed', () => this.app.quit());
    this.app.on('activate', () => this.mainWindow.get()?.show());
  };
  private ready = async () => {
    await this.app.whenReady();
    await this.mainWindow.create();
    if (import.meta.env.VITE_DEBUG) {
      await devTool(this.mainWindow.browserWindow);
    }
  };
}

Main.init();

