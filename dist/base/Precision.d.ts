import { Prec } from "./Prec";
export declare class Precision {
    private _precision;
    private _curPrec;
    private static _fixMultiplier;
    get precision(): Prec;
    private _setPrecision;
    set precision(prec: Prec);
    constructor(prec: Prec);
    sanitize(n: number): number;
}
