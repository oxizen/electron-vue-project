import chalk from 'chalk';
import pkg from 'electron-builder';
import { build as viteBuild, createLogger } from 'vite';
import { baseBuildConfig } from './config.mjs';

const { build: electronBuild, createTargets, Platform } = pkg;

process.env.MODE = process.env.MODE || 'production';
const mode = process.env.MODE;

/** @param {AppModule} moduleNames */
const buildVitePackages = async (...moduleNames) => {
  for (const moduleName of moduleNames) {
    const config = moduleName === 'renderer' ? { configFile: 'modules/renderer/vite.config.ts' } : baseBuildConfig(moduleName);
    await viteBuild({ mode, ...config });
  }
};
const build = async () => {
  await buildVitePackages('main', 'preload', 'renderer');
  // noinspection JSValidateTypes
  await electronBuild({ targets: createTargets([Platform.WINDOWS], 'nsis', 'x64'), win: ['nsis', 'zip'] })
};

build().catch(error => {
  createLogger().error(chalk.red(`error during build application:\n${error.stack || error}`));
  process.exit(1);
});
