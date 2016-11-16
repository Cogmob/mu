# lambda_pattern_es6

Module that is loaded as a dev dependency for repositories that implement the
lambda pattern for development.

## usage

```shell
./dev_tools.sh --help
```

## the lambda pattern

The lambda pattern makes a clear distinction between files that should be edited
and files which are only intended to be inspected. The root of the repository
only contains .git files, readme files and a shell script for interfacing with
the development tools. All other files exist in either the 'src' or 'gen'
folder.

The only files stored by the repo are 'src' files and 'gen/release' files. The
first run of the dev_tools.sh script will prepare the repository for further
development.

### steps

#### create

Makes a new repository at the current location with the given name and runs
init.

#### init

Removes everything except for src and then generates 'gen/dev' and 'gen/release'
from scratch.

#### install / uninstall module

Installs a module as either save or save-dev in the 'gen/dev' folder and copies
the package.json into the 'src' folder.

#### build

Any files added / removed / edited from 'src' have those changes applied to
'gen/[dev|release]/src'. Those changes are then pushed through other build
processes. This step should throw up any compilation errors.

#### test

Runs unit tests for either dev or release. If a path is given, only the tests in
that file are run. If the --show-all or -s flag is given, the output of passing
tests is also shown.

#### status

Gives a report on the currents state of the repo. This includes the build status
of dev and release, whether the tests passed since the last build and whether
the template information has been filled in.

#### publish

Increments the verson number and pushes to npm.

#### todo

Adds or removes todo items, or set the order.
