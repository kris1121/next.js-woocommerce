import REGISTRATION from "../mutations/registration";

import {useMutation, useQuery} from '@apollo/client';

function Registration() {

    const defaultCustomerInfo = {
        firstName: 'Abdulah',
        lastName: 'Ray',
        address1: '123 Abc farm',
        address2: 'Hill Road',
        city: 'Mumbai',
        country: 'IN',
        state: 'Maharastra',
        postcode: '221029',
        email: 'codeytek.academy@gmail.com',
        phone: '9883778278',
        company: 'The Company',
        errors: null
    }

    const initialState = {
        billing: {
            ...defaultCustomerInfo,
        },
        shipping: {
            ...defaultCustomerInfo
        },
        // createAccount: false,
        // orderNotes: '',
        // billingDifferentThanShipping: false,
        nickname: 'Abdulah',
        password: 'Ray'
    };

    const [registerCustomer, {
        // data: checkoutResponse,
        // loading: checkoutLoading,
    }] = useMutation(REGISTRATION, {
        variables: {
            input: initialState,
        },
        onError: (error) => {
            if (error) {
                console.log(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    })


  return (
    <button onClick={registerCustomer}>Registration</button>
  )
}

export default Registration