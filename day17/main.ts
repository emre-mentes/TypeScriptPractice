
//birinci yol
//bir fonksiyonu import ederek kullanma

import {add} from "./math";
console.log(add(5,3));

//bir variable i import ederek kullanma
import {pi} from "./math";
console.log(pi);


//ikinci yol
import * as math from "./math";
console.log(math.pi);
console.log(math.add(2,3));