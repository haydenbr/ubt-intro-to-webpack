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
// for every task
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
module.exports = {
	...
entry: ['./src/app/main.ts'],
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

## This helps in 2 main ways.

1. Managing file dependencies <!-- .element: class="fragment" -->
2. only include what you need! <!-- .element: class="fragment" -->


#HSLIDE

Suppose I had done something like this

```js
import * as _ from 'lodash';

_.each([1,2,3], console.log);
```

<!-- .element: class="fragment" -->
```js
import 'lodash/each';

each([1,2,3], console.log);
```