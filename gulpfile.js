/**
 * Created by maiquel on 03/02/17.
 */

(function () {
	"use strict";

	const gulp = require('gulp');
	const babel = require('gulp-babel');
	const del = require('del');
	const eslint = require('gulp-eslint');
	const webpack = require('webpack-stream');
	const webpackConfig = require('./webpack.config.babel');

	/* Regists all paths. The .js?(x) is just a pattern to match .js or .jsx files. */
	const paths = {
		allSrcJs: 'src/**/*.js?(x)',
		serverSrcJs: 'src/server/**/*.js?(x)',
		sharedSrcJs: 'src/shared/**/*.js?(x)',
		clientEntryPoint: 'src/client/app.js',
		clientBundle: 'dist/client-bundle.js?(.map)',
		gulpFile: 'gulpfile.js',
		webpackFile: 'webpack.config.babel.js',
		libDir: 'lib',
		distDir: 'dist',
	};

	/* Check and formats the source files */
	gulp.task('lint', () => {
		return gulp.src([
			paths.allSrcJs,
			paths.gulpfile,
			paths.webpackFile
		])
			.pipe(eslint())
			.pipe(eslint.format())
			.pipe(eslint.failAfterError());
	});

	/* Cleans the lib directory and webpack bundles*/
	gulp.task('clean', () => {
		return del([
			paths.libDir,
			paths.clientBundle
		]);
	});

	/* Calls lint task, then clean task, then convert to ES5 whit babel, then move to the lib directory */
	gulp.task('build', ['clean'], () => {    //add "lint" if you want to use de eslinter
		return gulp.src(paths.allSrcJs)
			.pipe(babel())
			.pipe(gulp.dest(paths.libDir));
	});

	/* After clean task, executes the webpack task with the configuration expecified */
	gulp.task('main', ['clean', 'build'], () => {
		gulp.src(paths.clientEntryPoint)
			.pipe(webpack(webpackConfig))
			.pipe(gulp.dest(paths.distDir))
	});

	/* watch runs the main task when filesystem changes happen in the specified files. */
	gulp.task('watch', () => {
		gulp.watch(paths.allSrcJs, ['main']);
	});

	/* default is a special task that will be run if you simply call gulp from the CLI. In our case we want it to run both watch and main (for the first execution). */
	gulp.task('default', ['watch', 'main']);


}());