type InlineConfig = import('vite').InlineConfig;
type ViteDevServer = import('vite').ViteDevServer;
type LogLevel = import('vite').LogLevel;

type EventKey = 'closeWindow';
type InvokeKey = 'quitApp' | 'getOne' | 'getTwo';
type AppModule = 'renderer' | 'main' | 'preload';

declare namespace Electron {
  export interface IpcMain {
    handle(channel: InvokeKey, listener: (event: IpcMainInvokeEvent, ...args: any[]) => (Promise<void>) | (any)): void;
  }
  export interface WebContents {
    send(channel: EventKey, ...args: any[]): void;
  }
}

interface AppInterface {
  on(channel: EventKey, listener: (...args: any[]) => void): number;
  off(id: number);
  invoke<T = void>(channel: InvokeKey, ...args: any[]): Promise<T>;
}

interface Window {
  app: AppInterface;
}
