## create command

The create command is designed to be called either from an instance of a lambda pattern project or from a global npm install of mu.

## how it works

The actual file being called is gen/release/bin.js. This is generated from src/lambda_pattern/bin.es6, which handles the arguments by setting up commander.

The arguments given are recognised by the configuration from src/create/\__commander'). This runs a series of functions:
    create
    get_metadata
    set_up
    build_tools
    overwrite_tools

All of the behaviour of this command is specified by the current global installation of mu.
