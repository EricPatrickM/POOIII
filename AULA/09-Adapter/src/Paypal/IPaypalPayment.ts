import Token from "../Utils/Token";

export default interface IPaypalPayment{
    authToken() : Token;
    paypalPayment() : void;
    paypalRecieve() : void;
}