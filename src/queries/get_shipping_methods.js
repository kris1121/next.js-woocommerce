import { gql } from "@apollo/client";

/**
 * GraphQL payments method query.
 */
const GET_SHIPPING_METHODS = gql`query {
    shippingMethods {
        nodes {
          id
          title
        }
      }
}`;

export default GET_SHIPPING_METHODS;