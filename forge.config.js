const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const { AutoUnpackNativesPlugin } = require('@electron-forge/plugin-auto-unpack-natives');

const { VitePlugin } = require('@electron-forge/plugin-vite');

// This is a JavaScript file to avoid having to depend on ts-node. Since Vite manages
// all the other transpiling it would only be used to load this config file.
module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  plugins: [
    new VitePlugin({
      // `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
      // If you are familiar with Vite configuration, it will look really familiar.
      build: [
        {
          // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
          entry: 'application/src/main.ts',
          config: './application/vite.main.config.ts',
          target: 'main',
        },
        {
          entry: 'application/src/preload.ts',
          config: './application/vite.preload.config.ts',
          target: 'preload',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: './main_window/vite.main_window.config.ts',
        },
      ],
    }),

    // Reduce loading times and disk consumption by unpacking
    // native Node modules from your Forge app's ASAR archive.
    new AutoUnpackNativesPlugin({}),

    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
