
import { useQuery } from "@apollo/client";
import { useState } from "react"

import GET_SHIPPING_METHODS from "../../queries/get_shipping_methods"


function ShippingModes( { input, handleOnChange } ) {
    const [shippingMethods, setShippingMethods] = useState([]);
    const { errors, shippingMethod } = input || {}

    const { data } = useQuery(GET_SHIPPING_METHODS, {
        notifyOnNetworkStatusChange: true,
        onCompleted: (data) => {
            setShippingMethods(data.shippingMethods.nodes)
            console.log(data.shippingMethods.nodes)
        }
    })
  return (
    <div className="mt-3">
	    {shippingMethods.map(item => (
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<div className="flex">
						<input onChange={ handleOnChange } value={item.id} className="form-check-input mr-3 my-auto" name="shippingMethod" type="radio" checked={item.id === shippingMethod}/>
						<span className="woo-next-payment-content mr-2">{item.title}</span>
					</div>
				</label>
			</div>
        ))}
    </div>
  )
}

export default ShippingModes