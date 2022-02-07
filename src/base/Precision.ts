import {Prec} from "./Prec";

class Precision{

    private _fixMultiplier(n:Prec):number{
        let x = 1;
        for(let i= 0; i<n;i++) x *= 10;
        return x || 100;
    }
    private _precision:Prec;
    private _curPrec = 100;

    public get precision(){
        return this._precision;
    }

    public set precision(prec:Prec){
        if(prec < 0 || prec > 8) prec = 2;
        this._precision = prec;
        this._curPrec = this._fixMultiplier(this._precision);
    }

    constructor(prec:Prec =  2){
        if(prec <0 || prec > 8) prec = 2;
        this._precision = prec;
        this._curPrec = this._fixMultiplier(this._precision);
    }

    sanitize(n:number):number{
        if (this._curPrec === 0) this._curPrec = 100;
        return Math.round(n*this._curPrec)/this._curPrec;
    }
}

export default Precision;