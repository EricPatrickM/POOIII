import IPaypalPayment from "../Paypal/IPaypalPayment";
import MercadoPago from "../Paypal/MercadoPago/MercadoPago";
import Token from "../Utils/Token";

export default class MercadoPagoAdapter implements IPaypalPayment{
    private _token : Token;
    constructor(private mercadopago : MercadoPago){

    }
    authToken(): Token {
        return this.mercadopago.authToken()
    }
    paypalPayment(): void {
        this.mercadopago.sendPayment()
    }
    paypalRecieve(): void {
        this.mercadopago.recievePayment()
    }
    
}