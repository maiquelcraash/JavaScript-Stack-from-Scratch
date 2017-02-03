/**
 * Created by maiquel on 03/02/17.
 */

(function () {
	"use strict";

	const Color = require('color');									//require the color library (added by yarn). https://github.com/qix-/color
	const str = "ES6";


	console.log("Hello World!");
	console.log(`Hello $(str)`);

	const redHexa = Color({r: 255, g:0, b:0}).hex();
	console.log(redHexa);

}());