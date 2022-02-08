"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathOps = void 0;
const Precision_1 = require("./Precision");
class MathOps {
    constructor(prec) {
        this.precision = new Precision_1.Precision(2);
        if (prec) {
            this.precision.precision = prec;
        }
    }
    ops(ary, op) {
        let _num = 0;
        if (op === 'multiply')
            _num = 1;
        if (op === 'add') {
            for (let i = 0; i < ary.length; i++) {
                _num += ary[i];
            }
        }
        else if (op === 'multiply') {
            for (let i = 0; i < ary.length; i++) {
                _num *= ary[i];
            }
        }
        return this.precision.sanitize(_num);
    }
    add(aryNum) {
        return this.ops(aryNum, 'add');
    }
    subtract(a, b) { return this.precision.sanitize(a - b); }
    multiply(aryNum) {
        return this.ops(aryNum, 'multiply');
    }
    divide(a, b) {
        return (this.precision.sanitize(a / b));
    }
}
exports.MathOps = MathOps;
