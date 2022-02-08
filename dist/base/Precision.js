"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Precision = void 0;
class Precision {
    constructor(prec) {
        this._curPrec = 100;
        this._precision = 2;
        this._setPrecision(prec);
    }
    static _fixMultiplier(n) {
        let x = 1;
        for (let i = 0; i < n; i++)
            x *= 10;
        return x || 100;
    }
    get precision() {
        return this._precision;
    }
    _setPrecision(prec) {
        if (prec < 0 || prec > 8)
            prec = 2;
        this._precision = prec;
        this._curPrec = Precision._fixMultiplier(this._precision);
    }
    set precision(prec) {
        this._setPrecision(prec);
    }
    sanitize(n) {
        if (this._curPrec === 0)
            this._curPrec = 100;
        return Math.round(n * this._curPrec) / this._curPrec;
    }
}
exports.Precision = Precision;
