import { gql } from "@apollo/client";

const REGISTRATION = gql`
    mutation REGISTRATION( $input: RegisterCutomer! ) {
        registerCustomer(input: $input) {
            clientMutationId
            shipping {
                firstName,
                lastName,
                address1,
                address2,
                city,
                country,
                state,
                postcode,
                email,
                phone,
                company,
                errors
            }
            nickname,
            password
        }
    }
`;

export default REGISTRATION;