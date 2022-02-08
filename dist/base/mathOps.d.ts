import { Prec } from "./Prec";
export declare class MathOps {
    private precision;
    constructor(prec?: Prec);
    private ops;
    add(aryNum: Array<number>): number;
    subtract(a: number, b: number): number;
    multiply(aryNum: Array<number>): number;
    divide(a: number, b: number): number;
}
