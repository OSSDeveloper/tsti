import {Prec} from "../base/Prec";
import {Precision} from "../base/Precision";

export class SMA{

    private readonly _sma:number;
    public get sma(){
        return this._sma;
    }

    constructor(ary:Array<number>,prec:Prec) {
        this._sma = 0;
        if(ary.length !== 0){
            if(prec < 0 || prec > 8) prec = 2;
            let precision = new Precision(prec);
            for(let i=0; i<ary.length; i++){
                this._sma += ary[i];
            }
            this._sma = precision.sanitize(this._sma/ary.length);
        }
    }
}
