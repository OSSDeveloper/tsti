import {Prec} from "./Prec";

export class Precision{

    private _precision:Prec;
    private _curPrec:number = 100;

    private static _fixMultiplier(n:Prec):number{
        let x = 1;
        for(let i= 0; i<n;i++) x *= 10;
        return x || 100;
    }

    public get precision(){
        return this._precision;
    }

    private _setPrecision(prec:Prec):void{
        if(prec < 0 || prec > 8) prec = 2;
        this._precision = prec;
        this._curPrec = Precision._fixMultiplier(this._precision);
    }

    public set precision(prec:Prec){
        this._setPrecision(prec);
    }

    constructor(prec:Prec){
        this._precision = 2;
        this._setPrecision(prec);
    }

    public sanitize(n:number):number{
        if (this._curPrec === 0) this._curPrec = 100;
        return Math.round(n*this._curPrec)/this._curPrec;
    }
}
