"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tsti = exports.SMA = exports.Precision = exports.MathOps = void 0;
var MathOps_1 = require("./base/MathOps");
Object.defineProperty(exports, "MathOps", { enumerable: true, get: function () { return MathOps_1.MathOps; } });
var Precision_1 = require("./base/Precision");
Object.defineProperty(exports, "Precision", { enumerable: true, get: function () { return Precision_1.Precision; } });
var SMA_1 = require("./averages/SMA");
Object.defineProperty(exports, "SMA", { enumerable: true, get: function () { return SMA_1.SMA; } });
class Tsti {
}
exports.Tsti = Tsti;
//
// import {MathOps} from "./base/MathOps";
// import {Precision} from "./base/Precision";
// import {SMA} from "./averages/SMA";
//
// const prec = 4;
// const precision = new Precision(prec);
// const mathOps = new MathOps(prec);
// let random = 10.353456789;
// console.log(`10.353456789 sanitized to ${precision.sanitize(random)}`);
// console.log(`Add - `,mathOps.add([5.16284263,1.62531289]));
// console.log(`Subtraction - `,mathOps.subtract(5.16284263,1.62531289));
// console.log(`Multiply - `, mathOps.multiply([5.16284263,1.62531289]));
// console.log(`Division - `, mathOps.divide(5.16284263,1.62531289));
// const sma = new SMA([5.16284263,1.62531289,5.16284263],prec).sma;
// console.log("SMA : ",sma);
