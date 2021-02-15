'use strict';

const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('gulp-buffer');
const changed = require('gulp-changed');
const connect = require('gulp-connect');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const spawn = require('child_process').spawn;
const tap = require('gulp-tap');
const terser = require('gulp-terser');

/**
 * Settings
 */
const src = 'src/';
const dest = 'build/';

const src_paths = {
  css: src + '_css/*.{pcss,css}',
  scripts: src + '_js/*.mjs',
  html: [
    src + '_includes/pattern-library/**/*.html',
    src + '**/*.html'
  ]
};

const dest_paths = {
  styles: dest + 'assets/css',
  scripts: dest + 'assets/js',
};

const settings = {
  css: {
    outputStyle: 'compressed',
  },
};

/**
 * Build tasks
 */
// Copy Co-op components
function copyComponents() {
  return gulp.src([
    'node_modules/@coopdigital/**/*.{pcss,css,html,jpg,jpeg,gif,png,webp,svg}',
    '!node_modules/@coopdigital/**/node_modules/**',
  ], { follow: true })
    .pipe(changed('src/_includes/pattern-library/components'))
    .pipe(gulp.dest('src/_includes/pattern-library/components'))
    .pipe(gulp.dest('build/pattern-library/components/packages'))
}

// Jekyll
function contentful(gulpCallBack) {
  const contentful = spawn('jekyll', ['contentful'], {stdio: 'inherit'});
  contentful.on('exit', function(code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll Contentful process exited with code: '+code);
  });
}

function jekyll(gulpCallBack) {
  const jekyll = spawn('jekyll', ['build'], {stdio: 'inherit', cwd: 'src'});
  jekyll.on('exit', function(code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
  });
}

function html() {
  return gulp.src(dest + '**/*.html', { follow: true })
    .pipe(connect.reload());
}

// Styles
function css() {
  return gulp.src(src_paths.css, { follow: true })
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(postcss())
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest(dest_paths.styles))
    .pipe(connect.reload());
}

// Scripts
function js() {
  return gulp.src(src_paths.scripts, { read: false })
    .pipe(tap((file) => {
      file.contents = browserify(file.path, {
        debug: true,
        extensions: [
          '.cjs',
          '.js',
          '.mjs',
        ],
      })
        .transform(babelify, {
          global: true,
          ignore: [
            /\/node_modules\/(?!@coopdigital\/)/,
          ],
        })
        .bundle();
    }))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(terser())
    .pipe(rename({ extname: '.js' }))
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest(dest_paths.scripts))
    .pipe(connect.reload());
}

/**
 * Watch tasks
 */
function watch(done) {
  gulp.watch(['src/_css/**/*.{pcss,css}', '../packages/**/*.{pcss,css}'], css);
  gulp.watch(['src/_js/**/*.{cjs,js,mjs}'], js);
  gulp.watch(['../packages/**/*.{pcss,css,html,jpg,jpeg,gif,png,webp,svg}', '!../packages/**/node_modules/**'], copyComponents);
  gulp.watch(src_paths.html, gulp.series(jekyll, html));
  done();
}


/**
 * Local server
 */
function serve(done) {
  connect.server({
    host: '0.0.0.0',
    port: 9000,
    root: 'build',
    livereload: true
  });
  done();
}

/**
 * Run tasks
 */
const build = gulp.parallel(gulp.series(copyComponents, contentful, jekyll), css, js);
const server = gulp.series(build, serve, watch);


module.exports = {
  copyComponents,
  contentful,
  jekyll,
  css,
  js,
  build,
  server,
  default: server
};
