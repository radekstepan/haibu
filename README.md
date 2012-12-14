# haibu

Spawn your own Node.js clouds. As used in [ukraine](https://github.com/radekstepan/ukraine).

Differences between this and [isaacs](https://github.com/nodejitsu/haibu) repo:

#. Injecting of environment variables from server `env.json` file.
#. Complete cleanup of pre-existing app before spawning a new version.
#. Logging of app outputs into files.

## Future

#. More logging everywhere.
#. Do not show install of packages in `stdout`.
#. CoffeeScript.
#. Promises.
#. Trim the fat.