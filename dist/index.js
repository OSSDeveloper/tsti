"use strict";
// export {MathOps} from "./base/MathOps";
// export {Precision} from "./base/Precision";
// export {SMA} from "./averages/SMA";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tsti = void 0;
class Tsti {
}
exports.Tsti = Tsti;
const MathOps_1 = require("./base/MathOps");
const Precision_1 = require("./base/Precision");
const SMA_1 = require("./averages/SMA");
const prec = 4;
const precision = new Precision_1.Precision(prec);
const mathOps = new MathOps_1.MathOps(prec);
let random = 10.353456789;
console.log(`10.353456789 sanitized to ${precision.sanitize(random)}`);
console.log(`Add - `, mathOps.add([5.16284263, 1.62531289]));
console.log(`Subtraction - `, mathOps.subtract(5.16284263, 1.62531289));
console.log(`Multiply - `, mathOps.multiply([5.16284263, 1.62531289]));
console.log(`Division - `, mathOps.divide(5.16284263, 1.62531289));
const sma = new SMA_1.SMA([5.16284263, 1.62531289, 5.16284263], prec).sma;
console.log("SMA : ", sma);
