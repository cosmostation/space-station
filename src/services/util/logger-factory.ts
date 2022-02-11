import dotEnv from 'dotenv';
import _ from 'lodash';

dotEnv.config();

enum Level {
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
}

const NODE_ENV = process.env.NODE_ENV;
const DEBUG_LEVEL = process.env.REACT_APP_DEBUG_LEVEL ? process.env.REACT_APP_DEBUG_LEVEL : 'Debug';

class Logger {
  moduleName: string;
  nodeEnv: string = NODE_ENV;
  debugLevel: Level = DEBUG_LEVEL as Level;

  constructor (moduleName: string) {
    this.moduleName = moduleName;
  }

  debug (...message: any): void {
    if (this.canLog(Level.Debug)) {
      // eslint-disable-next-line no-console
      console.debug(`${this.moduleName}`, ...message);
    }
  }

  info (...message: any): void {
    if (this.canLog(Level.Info)) {
      // eslint-disable-next-line no-console
      console.info(`${this.moduleName}`, ...message);
    }
  }

  warn (...message: any): void {
    if (this.canLog(Level.Warn)) {
      // eslint-disable-next-line no-console
      console.warn(`${this.moduleName}`, ...message);
    }
  }

  error (...message: any): void {
    if (this.canLog(Level.Error)) {
      // eslint-disable-next-line no-console
      console.error(`${this.moduleName}`, ...message);
    }
  }

  private canLog (level: Level): boolean {
    if (this.nodeEnv === 'production') {
      return level === Level.Error || level === Level.Warn;
    }

    if (this.debugLevel === Level.Debug) {
      return true;
    } else if (this.debugLevel === Level.Info) {
      return _.includes([Level.Info, Level.Warn, Level.Error], level);
    } else if (this.debugLevel === Level.Warn) {
      return _.includes([Level.Warn, Level.Error], level);
    } else {
      return level === Level.Error;
    }
  }
}

function getLogger (moduleName: string): Logger {
  return new Logger(moduleName);
}

export default {
  getLogger
};
