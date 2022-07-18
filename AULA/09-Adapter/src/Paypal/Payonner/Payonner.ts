import Token from "../../Utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment{
    private _token : Token;
    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this._token = this.authToken();
        console.log('TOKEN: ' + this._token.token);
        console.log("Realizando pagamento com Payonner");
    }
    recievePayment(): void {
        console.log("Recebendo pagamento com Payonner");
    }

}