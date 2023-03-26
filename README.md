# sml-slang

JavaScript-based implementation of a sublanguage of SML, written in TypeScript.

# Table of Contents

- [Requirements](#requirements)
- [Usage](#usage)
- [Using sml-slang in your local Source Academy](#using-sml-slang-in-your-local-source-academy)
- [License](#license)

# Requirements

- `node`: known working version: v16.19.0

# Usage

To build,

```shell
$ git clone https://github.com/CS4215-Project-SML/sml-slang.git
$ cd sml-slang
$ yarn
$ yarn docs
$ yarn build
```

If you didn't add `sml-slang` to your `PATH`, replace `sml-slang` with `node dist/repl/repl.js` in the following examples.

To use the REPL,

```shell
Usage: sml-slang [PROGRAM_STRING] [OPTION]
  -h, --help            display this help
  -e, --eval            disable REPL, only display the output of evaluation
```

# Using sml-slang in your local Source Academy

A common issue when developing modifications to `js-slang` is how to test it using your own local frontend. Assume that you have built your own frontend locally, here is how you can make it use `sml-slang`, instead of the one that the Source Academy team has deployed to `npm`.

First, build and link `sml-slang`:

```shell
$ cd sml-slang
$ yarn docs
$ yarn build
$ yarn link
```

Then, from your local copy of frontend:

```shell
$ cd frontend
$ yarn link sml-slang
```

Then start the frontend and `sml-slang` will be used.

# License

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

All sources in this repository are licensed under the [Apache License Version 2][apache2].

[apache2]: https://www.apache.org/licenses/LICENSE-2.0.txt
