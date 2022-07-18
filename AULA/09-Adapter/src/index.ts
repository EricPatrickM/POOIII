import MercadoPagoAdapter from "./Adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./Adapters/PayonnerAdapter";
import IPaypalPayment from "./Paypal/IPaypalPayment";
import MercadoPago from "./Paypal/MercadoPago/MercadoPago";
import IPayonnerPayment from "./Paypal/Payonner/IPayonnerPayment";
import Payonner from "./Paypal/Payonner/Payonner";
import PayPal from "./Paypal/Paypal";

/*const payment : IPaypalPayment = new Payonner()
const payment : IPaypalPayment = new PayonnerAdapter(new Payonner)
payment.paypalPayment()
payment.paypalRecieve()*/

const payment : IPaypalPayment = new MercadoPagoAdapter(new MercadoPago)
payment.paypalPayment()
payment.paypalRecieve()