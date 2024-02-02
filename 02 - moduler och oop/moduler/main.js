import {a, myFunction} from './modules/module1.js';
import clarasFunc from './modules/module1.js';
import { myFunction as module2Function } from './modules/module2.js';
import * as myObj from './modules/module1.js'

clarasFunc()
console.log(a);
myFunction();
module2Function();

console.log(myObj);
myObj.default();
