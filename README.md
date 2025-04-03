# Electron-Vite-Vue

Quickstart with boilerplate for an Electron app written in TypeScript with Vite
using Vue.js and popular plugins like `vue-router` and `pinia`.

## Overview

* Basic project structure for Electron
* Scaffolding from Vue's CLI
* Ready to use Vue plugins (`vue-router` and `pinia`)
* Scripts for development with HMR and packaging
* Support for both Electron and web-only builds
* Out-the-box SCSS support using `scss-embedded`

## Getting Started

This project has been setup as a template in Github. At the top of the page,
press 'Use this template' to create a repository. Afterwards, clone the new
repository using `git`, GitHub Desktop, or another suitable client, and start
coding.

Alternatively, download the code as a ZIP and unzip in the desire location. To
initialize a Git repository, use `git init`.

## NPM Commands

### Web-only builds

#### `npm run build`

Makes a web-only build of the main window renderer, with `import.meta.ELECTRON`
set to `false`. Outputs to `dist/`

#### `npm run serve`

Serves the main winow renderer as a web-only build, with `import.meta.ELECTRON`
set to `false`.

### Full Electron builds

#### `npm run start`

Maps to [`electron-forge start`](https://www.electronforge.io/cli#start).
Launches the app in development mode, changes to any renderer are automatically
reflected by Vite.

#### `npm run package`

Maps to [`electron-forge package`](https://www.electronforge.io/cli#package).
Packages the application into an executable bundle for the current platform.

#### `npm run make`

Maps to [`electron-forge make`](https://www.electronforge.io/cli#make).
Creates distributables for the application based on the installed makers.

#### `npm run publish`

Maps to [`electron-forge publish`](https://www.electronforge.io/cli#publish).
Attempts to package, make, and publish the application to defined targets.

## Project Setup

### `application/`

The application folder houses the code for the NodeJS Electron main- and
preload process. Because these processes communicate exclusively through IPC
with the renderer, they are separated into a different folder.

### `main_window/`

The main window renderer, as configured in `forge.config.js`. This folder is
setup as a normal Vue application, with its own `vite.config.ts` file for
web-only builds. The `vite.main_window.config.ts` file automatically merges
options configured in the web-only build.

## Custom Plugins

## Clean package.json

A custom plugin has been written and will be automatically copied, which prunes
fields from `package.json` such that any unwanted configuration is not
accidentally included while packaging.
