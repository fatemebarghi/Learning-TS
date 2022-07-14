# TS-Fundamentals 

## What is TS?

TS is a programming language built on top of Javascript that adds some features to it, like:
- Static typing
- Code completion
- Refactoring
- Shorthand notations

## Installation
1. Download the last version of node js
2. Install ts globally for being able to access ts compiler in every folder
```bash
npm i -g typescript
```
then run the command below to make sure that it's been installed successfully
```bash
tsc -v
```
important: the browser does not understand ts files. so we should compile them to js.

3. Now for compiling the ts files just run the command below in your terminal:
```bash
tsc index.ts
# put the name of your ts file instead of index.ts
```
an index.js file should be added to your project which is the compilation of ts file.
## Example of Using
type annotation:
```bash
let age: number = 23;
```
## Configuring the TS compiler
TS compiler will compile the code to ES5 which is the older version of Js. for handling it you can configure by this way:
Run the command bellow in the terminal to make a config file in the project:
```push
tsc --init
```
A "tsconfig.json" is created in the project that by changing the "target" item you can change the version of js that the TS compiler generates.


## Built-in Types
Js has got these types:
- number
- string
- boolean
- null
- undefined
- object

Moreover, TS introduces new types:
- any
- unknown
- never
- enum
- tuple

** As the best practice, avoid using the type "any".

Tuples: It is used for fixed-length arrays in which every element has a particular type.
```bash
let user: [number, string] = [1, "Fateme"]
```
** As the best practice use tuples for key-value pairs or the arrays with two elements.

Enums: It represents a list of related constants.
```bash
# using PascalCase
const enum Size { Small = 1, Medium = 2, Large = 3 };
let mySize: Size = Size.Small;
# mySize returns 1
```



