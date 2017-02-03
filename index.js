/**
 * Created by maiquel on 03/02/17.
 */

(function () {
	"use strict";

	const Color = require('color');									//require the color library (added by yarn). https://github.com/qix-/color


	console.log("Hello World!");

	const redHexa = Color({r: 255, g:0, b:0}).hex();
	console.log(redHexa);

}());