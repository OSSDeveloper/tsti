"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMA = void 0;
const Precision_1 = require("../base/Precision");
class SMA {
    constructor(ary, prec) {
        this._sma = 0;
        if (prec < 0 || prec > 8)
            prec = 2;
        if (ary.length > 0) {
            for (let i = 0; i < ary.length; i++) {
                this._sma += ary[i];
            }
            this._sma = new Precision_1.Precision(prec).sanitize(this._sma / ary.length);
        }
    }
    get sma() {
        return this._sma;
    }
}
exports.SMA = SMA;
