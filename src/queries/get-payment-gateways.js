import { gql } from "@apollo/client";

/**
 * GraphQL payments method query.
 */
const GET_PAYMENT_GATEWAYS = gql`query {
    paymentGateways {
        nodes {
          title
          icon
          id
        }
      }
	
}`;

export default GET_PAYMENT_GATEWAYS;