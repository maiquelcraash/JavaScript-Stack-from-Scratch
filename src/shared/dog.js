/**
 * Created by maiquel on 03/02/17.
 */

(function () {
	"use strict";

	class Dog {
		constructor(name) {
			this.name = name;
		}

		bark() {
			return `Uau Auuu, I am ${this.name}`;
		}
	}

	/* Turns the class visible to other files */
	module.exports = Dog;

}());