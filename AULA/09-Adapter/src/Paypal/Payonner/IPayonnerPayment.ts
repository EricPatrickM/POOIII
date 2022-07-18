import Token from "../../Utils/Token";

export default interface IPayonnerPayment{
    authToken() : Token;
    sendPayment() : void;
    recievePayment(): void
}