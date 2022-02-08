import { Prec } from "../base/Prec";
export declare class SMA {
    private readonly _sma;
    get sma(): number;
    constructor(ary: Array<number>, prec: Prec);
}
