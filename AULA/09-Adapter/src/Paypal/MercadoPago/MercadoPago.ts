import Token from "../../Utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment{
    private _token : Token;
    authToken(): Token {
        return new Token()
    }
    sendPayment(): void {
        this._token = this.authToken();
        console.log('TOKEN: ' + this._token.token);
        console.log("Realizando pagamento com MercadoPago");
    }
    recievePayment(): void {
        console.log("Recebendo pagamento com MercadoPago");
    }

}