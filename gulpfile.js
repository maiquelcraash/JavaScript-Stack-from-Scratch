/**
 * Created by maiquel on 03/02/17.
 */

(function () {
	"use strict";

	const gulp = require('gulp');
	const babel = require('gulp-babel');
	const del = require('del');
	const exec = require('child_process').exec;

	/* Regists all paths */
	const paths = {
		allSrcJs: "src/**/*.js",
		libDir: "lib"
	};

	/* Cleans the lib directory */
	gulp.task('clean', () => {
		return del(paths.libDir);
	});

	/* Calls clean task, then convert to ES5 whit babel, then move to the lib directory */
	gulp.task('build', ['clean'], () => {
		return gulp.src(paths.allSrcJs)
			.pipe(babel())
			.pipe(gulp.dest(paths.libDir));
	});

	/* After build task, exec in the shell "$ node lib". It looks for the index.js file and logs the stdout. */
	gulp.task('main', ['build'], (callback) => {
		exec(`node ${paths.libDir}`, (error, stdout) => {
			console.log(stdout);
			return callback(error);
		})
	});

	/* watch runs the main task when filesystem changes happen in the specified files. */
	gulp.task('watch', () => {
		gulp.watch(paths.allSrcJs, ['main']);
	});

	/* default is a special task that will be run if you simply call gulp from the CLI. In our case we want it to run both watch and main (for the first execution). */
	gulp.task('default', ['watch', 'main']);


}());