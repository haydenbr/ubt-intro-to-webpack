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
![gulp](images/gulp.png)
"I'm glad you asked that." <!-- .element: class="fragment" -->

#HSLIDE
- Gulp isn't cool anymore. <!-- .element: class="fragment" -->
- Major frameworks are using it (i.e. angular and ionic) <!-- .element: class="fragment" -->

#HSLIDE
## Defining your source files

in gulp land?
 ```js
gulp.src('src/app/**/*.js') // etc.
  .pipe(ngAnnotate())
	.pipe(jslint())
  .pipe(minify())
	// do some more stuff
  .pipe(gulp.dest('build/app.min.js'));
 ```

 #HSLIDE
## Defining your source files

 ```js
gulp.src('src/app/**/*.js') // etc.
  .pipe(ngAnnotate())
	.pipe(jslint())
  .pipe(minify())
	// do some more stuff
  .pipe(gulp.dest('build/app.min.js'));
 ```