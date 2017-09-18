## do one thing well

each module is highly constrained in its behaviour and has as few dependencies as possible

it contains a large number of unit tests which exersize the module as fully as it is intended to be used. the process of compiling and running the test suite is automatic and takes less than a second

the documentation is written in the present tense as if the module is already completed and working

## file structure

the file containing the core code from which all the module's functionality flow is in the root directory and is called \_.js, the test code is launched from \_test.js

each sub folder may also have \_.js and \_.test.js files, as well as the \_test suffix being attached to individual tests

the generated code during any run is contained inside the folder \_runtime

the .release folder is the path for the data intended to be released

everything ouside of these two folders are human editable source files (or media files may be blobs)

## languages

code is written in elm, run through my own preprocessor, compiled to javascript with the elm compiler and then compiled with its dependencies using jspm

it is runnable in nodejs works with unreal.js hotswapping
