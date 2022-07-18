import Token from "../../Utils/Token";

export default interface IMercadoPagoPayment{
    authToken() : Token;
    sendPayment() : void;
    recievePayment(): void
}