import { defineConfig, mergeConfig } from 'vite'

import rendererConfig from './vite.config.ts';

// Merge Vite config for Electron builds, with the config for web builds.
// Refer to: https://vite.dev/config/
export default mergeConfig(rendererConfig, defineConfig({
  // We have to configure the root where the index.html file can be found,
  // relative to where Electron Forge runs (project root). The other files
  // are able to configure build.lib.entry
  root: './main_window',
  build: {
    // Because we changed the root, the build will now instead output in
    // renderer/.vite/build/ so we have to point it back
    outDir: '../.vite/renderer/main_window',
    emptyOutDir: false,
  },

  define: {
    // Update default to be true for Electron builds
    'import.meta.env.ELECTRON': JSON.stringify(process.env.ELECTRON ?? true),
  },
}));
