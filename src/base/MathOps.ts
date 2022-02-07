import {Prec} from "./Prec";
import {Precision} from "./Precision";

export class MathOps{

    private precision = new Precision();
    constructor(prec?: Prec) {
        if (prec) {
            this.precision.precision = prec;
        }
    }

    private ops(ary:Array<number>,op:string):number{
        let _num = 0;
        if(op==='multiply') _num = 1;

        if(op === 'add'){
            for(let i=0; i<ary.length; i++){
                _num += ary[i];
            }
        }else if(op==='multiply'){
            for(let i=0; i<ary.length; i++){
                _num *= ary[i];
            }
        }

        return this.precision.sanitize(_num);
    }
    add(aryNum:Array<number>):number{
        return this.ops(aryNum,'add');
    }

    subtract(a:number,b:number):number{
        return this.precision.sanitize(a-b);
    }

    multiply(aryNum:Array<number>):number{
        return this.ops(aryNum,'multiply');
    }

    divide(a:number,b:number):number{
        return (this.precision.sanitize(a/b));
    }
}
