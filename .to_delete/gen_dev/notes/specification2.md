## specification

This document explains the behaviour of the lambda pattern tool, and how to work with it.

### jargon

#### lambda pattern

The lambda pattern is a set of prescribed methods and structures for developing a software project.

#### lambda pattern project

A project which is developed using the lambda pattern.

#### mu, nu

The lambda pattern tool is developed in a project called the 'mu'. Inside the mu source code, the project that the tools is being used on is called the 'nu'.

#### src

The part of a lambda pattern project which is kept in version control lives in the 'src' folder.

#### conveyor belt

The conveyor belt refers to the tranformations done to the src folder. For simplicity of understanding, there should be a series of completely discrete states that move from an editable, personalised 'display' state, through the 'src' state to a clean, minified 'release state'

#### lambda pattern tool

The recommended point of entry into all lambda pattern related behavior. The lambda pattern tool is a command line interface / node module which can create a lambda pattern project and prompt the nu tool to perform other actions.

#### tool project

A project defining the behavior of the nu tool for its related lambda pattern project.

### lambda pattern skeleton

This is the starting point for a lambda pattern project:

```
root
├── display
|   ├── meta
|   │   ├── data.yaml
|   │   ├── npm_dependencies
|   │   ├── npm_dev_dependencies
|   │   ├── freeze
|   │   └── todo
│   ├── submodule1
│   │   ├── submodule.es6
│   │   └── submodule_test.es6
│   ├── __test.es6
│   └── _.es6
├── src
|   ├── meta
|   │   ├── data.yaml
|   │   ├── npm_dependencies
|   │   ├── npm_dev_dependencies
|   │   ├── freeze
|   │   └── todo
|   ├-- submodule1
│   |   ├── submodule.es6
│   |   └── submodule_test.es6
|   ├-- __test.es6
|   └-- _.es6
├── tools
│   ├── ...
│   '
├── .gitignore
├── _.es6
├── __test.es6
├── licence.md
└── readme.md
└── package.json
```

### conveyor belt

display  
generated display  
ast transformed display  
ast display  
pre ast display  
-src  
pre ast release  
ast release  
ast transformed release  
generated release  
release  
