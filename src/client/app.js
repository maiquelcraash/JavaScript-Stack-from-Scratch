/**
 * Created by maiquel on 13/02/17.
 */

import Dog from '../shared/dog';
import 'babel-polyfill';

const browserToby =  new Dog("Browser Toby");

document.querySelector('.app').innerText = browserToby.bark();