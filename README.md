# haibu

Spawn your own Node.js clouds. As used in [ukraine](https://github.com/radekstepan/ukraine).

Differences between this and [isaacs](https://github.com/nodejitsu/haibu) repo:

1. Injecting of environment variables from server `env.json` file.
1. Complete cleanup of pre-existing app before spawning a new version.
1. Logging of app outputs into files.