"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MathOps_1 = __importDefault(require("./base/MathOps"));
const Precision_1 = __importDefault(require("./base/Precision"));
const SMA_1 = __importDefault(require("./averages/SMA"));
class Tsti {
}
const tsti = new Tsti();
const prec = 4;
const precision = new Precision_1.default(prec);
const mathOps = new MathOps_1.default(prec);
let random = 10.353456789;
console.log(`10.353456789 sanitized to ${precision.sanitize(random)}`);
console.log(`Add - `, mathOps.add([5.16284263, 1.62531289]));
console.log(`Subtraction - `, mathOps.subtract(5.16284263, 1.62531289));
console.log(`Multiply - `, mathOps.multiply([5.16284263, 1.62531289]));
console.log(`Division - `, mathOps.divide(5.16284263, 1.62531289));
const sma = new SMA_1.default([5.16284263, 1.62531289, 5.16284263], prec).sma;
console.log(`SMA - `, sma);
