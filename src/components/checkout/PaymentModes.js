import { useQuery } from "@apollo/client";
import { useState } from "react";

import GET_PAYMENT_GATEWAYS from "../../queries/get-payment-gateways";
import Error from "./Error";

const PaymentModes = ( { input, handleOnChange } ) => {

	const { errors, paymentMethod } = input || {}
	const [paymentGateways, setPaymentGateways] = useState([]);

	const { data } = useQuery(GET_PAYMENT_GATEWAYS, {
		notifyOnNetworkStatusChange: true,
		onCompleted: (data) => {
			setPaymentGateways(data.paymentGateways.nodes);
		}
	})


	return (
		<div className="mt-3">
			<Error errors={ errors } fieldName={ 'paymentMethod' }/>
			{/*Direct bank transfers*/}
			{paymentGateways.map(item => (
				<div className="form-check woo-next-payment-input-container mt-2">
					<label className="form-check-label">
						<div className="flex">
							<input onChange={ handleOnChange } value={item.id} className="form-check-input mr-3 my-auto" name="paymentMethod" type="radio" checked={item.id === paymentMethod}/>
							<span className="woo-next-payment-content mr-2">{item.title}</span>
							{item.icon && <img src={item.icon ?? ''} alt={`${item.title}-icon`} />} 
						</div>
					</label>
				</div>
			))}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="bacs" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'bacs' === paymentMethod}/>
					<span className="woo-next-payment-content">Direct Bank Transfer</span>
				</label>
			</div> */}
			{/*Pay with Paypal*/}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="paypal" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'paypal' === paymentMethod}/>
					<span className="woo-next-payment-content">Pay with Paypal</span>
				</label>
			</div> */}
			{/*Check Payments*/}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cheque" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'cheque' === paymentMethod}/>
					<span className="woo-next-payment-content">Check Payments</span>
				</label>
			</div> */}
			{/*Pay with Stripe*/}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cod" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'cod' === paymentMethod}/>
					<span className="woo-next-payment-content">Cash on Delivery</span>
				</label>
			</div> */}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="jccpaymentgatewayredirect" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'jccpaymentgatewayredirect' === paymentMethod}/>
					<span className="woo-next-payment-content">JCC</span>
				</label>
			</div>
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="ccavenue" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'ccavenue' === paymentMethod}/>
					<span className="woo-next-payment-content">CC Avenue</span>
				</label>
			</div>
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="stripe-mode" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'stripe-mode' === paymentMethod}/>
					<span className="woo-next-payment-content">Stripe</span>
				</label>
			</div> */}
			{/*	Payment Instructions*/}
			<div className="woo-next-checkout-payment-instructions mt-2">
				Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
			</div>
		</div>
	);
};

export default PaymentModes;