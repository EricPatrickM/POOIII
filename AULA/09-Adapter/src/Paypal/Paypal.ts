import Token from "../Utils/Token";
import IPaypalPayment from "./IPaypalPayment";

export default class PayPal implements IPaypalPayment{
    private _token : Token;

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this._token = this.authToken();
        console.log('TOKEN: ' + this._token.token);
        console.log("Realizando pagamento com paypal");
    }
    paypalRecieve(): void {
        console.log("Recebendo pagamento com paypal");
    }

}