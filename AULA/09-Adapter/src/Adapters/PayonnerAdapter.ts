import IPaypalPayment from "../Paypal/IPaypalPayment";
import Payonner from "../Paypal/Payonner/Payonner";
import PayPal from "../Paypal/Paypal";
import Token from "../Utils/Token";

export default class PayonnerAdapter implements IPaypalPayment{
    private _token : Token;
    constructor(private _payonner : Payonner){
        console.log('adaptando payonner em paypal')
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this._payonner.sendPayment();
    }
    paypalRecieve(): void {
        return this._payonner.recievePayment();
    }

}