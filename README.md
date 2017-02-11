
Mysql5 Hashing
=========

Mysql PASSWORD() hashing npm module

[![npm version](https://badge.fury.io/js/mysql5hash.png)](https://badge.fury.io/js/mysql5hash)

## Installation

```shell
  npm install mysql5hash --save
```

## Usage

```js
  var mysql5hash = require('mysql5hash')

  var hashPass = mysql5hash("hash password")

  console.log(hashPass);

  // output => *343E9D0203CB337490174D53651E63C839334AC7
```
