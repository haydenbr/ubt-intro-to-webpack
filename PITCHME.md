#HSLIDE

# Intro to Webpack

<span class="primary"><strong>Hayden Braxton</strong></span> - 2017.01.19

#HSLIDE

## What is Webpack?

It's a module bundler <!-- .element: class="fragment" -->

"Webpack takes modules with dependencies and generates static assets representing those modules." <!-- .element: class="fragment" -->


#HSLIDE

![what-is-webpack](images/what-is-webpack.png)


#HSLIDE

## Why use webpack rather than gulp?

"I'm glad you asked that." <!-- .element: class="fragment" -->
- Major frameworks are using it (i.e. angular and ionic) <!-- .element: class="fragment" -->
- Growing support <!-- .element: class="fragment" -->
- Gulp isn't cool anymore. <!-- .element: class="fragment" -->
- Webpack allows for a few key optimizations <!-- .element: class="fragment" -->


#HSLIDE

## Drawbacks?

- Webpack is slower <!-- .element: class="fragment" -->
- Steeper learning curve <!-- .element: class="fragment" -->
- Documentation :'-( <!-- .element: class="fragment" -->
- Gulp was a more general purpose task runner (but you can always use npm scripts) <!-- .element: class="fragment" -->


#HSLIDE

## Some initial differences


#HSLIDE

## Defining your source files

in gulp land

```js
// gulp.js
gulp.src('src/app/**/*.ts') // etc.
  .pipe(ngAnnotate())
	.pipe(jslint())
  .pipe(minify())
	// do some more stuff
  .pipe(gulp.dest('build/app.min.js'));
```


#HSLIDE

## Defining your source files

in webpack

```js
// webpack.config.js
module.exports = {
	...
	entry: ['./src/app/main.ts'],
	output: {
		filename: 'app.min.js',
		path: './build'
	}
	...
}
```


#HSLIDE

## How does it know?

```js
import { Component, OnInit } from '@angular/core';
```

or perhaps

```js
var _ 			= require('lodash'),
		config 	= require('./config');
```


#HSLIDE

## The "Dependency Graph"


#HSLIDE

## This helps in 2 main ways.

1. Managing file dependencies <!-- .element: class="fragment" -->
2. only include what you need! <!-- .element: class="fragment" -->


#HSLIDE

Picture this:

```js
import * as _ from 'lodash';
// imports the whole of lodash

_.each([1,2,3], console.log);
```

```js
import 'lodash/each';
// only imports the each function

each([1,2,3], console.log);
```

Don't need to worry about custom builds <!-- .element: class="fragment" -->


#HSLIDE

## 4 main concepts of Webpack

1. Entry <!-- .element: class="fragment" -->
2. Output <!-- .element: class="fragment" -->
3. Loaders <!-- .element: class="fragment" -->
4. Pluggins <!-- .element: class="fragment" -->


#HSLIDE

## Loaders

### Define how to handle different file types <!-- .element: class="fragment" -->

```js
module: {
	loaders: [
		{ test: /\.scss$/, loaders: ['sass-loader'] },
		{ test: /\.ts$/, loaders: ['awesome-typescript-loader'] }
	]
}
```


#HSLIDE

## Pluggins

### Perform operations on your bundled code

- replacing constants <!-- .element: class="fragment" -->
- internationalization <!-- .element: class="fragment" -->
- dependency injections <!-- .element: class="fragment" -->


```


#HSLIDE

# Examples!!!