const { PluginBase } = require('@electron-forge/plugin-base')

const fs = require('fs/promises')
const path = require('path')

KEEP_KEYS = [
  'name',
  'description',
  'version',
  'license',
  'private',
  'main',
  'dependencies',
]

class CleanPackage extends PluginBase {
  init = (dir) => {
    this.projectDir = dir
  }

  getHooks = () => {
    return {
      packageAfterCopy: this.packageAfterCopy,
    }
  }

  packageAfterCopy = async (_forgeConfig, buildPath) => {
    const settings = JSON.parse(await fs.readFile(path.resolve(buildPath, 'package.json')))

    const pruned = KEEP_KEYS.reduce(
      (obj, key) => {
        if (key in settings) obj[key] = settings[key]
        return obj
      }, {}
    )

    await fs.writeFile(path.resolve(buildPath, 'package.json'), JSON.stringify(pruned, null, 2))
  }
}

module.exports = { CleanPackage };
