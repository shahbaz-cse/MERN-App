import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/cartHelper';

const StripeCheckout = ({products, setReload = f => f, reload =undefined}) => {
  
    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: ""
    });

    const token = isAuthenticated() && isAuthenticated().token;
    const userId = isAuthenticated() && isAuthenticated().user._id;
    const getFinalAmount = () => {
        let amount = 0;
        products.map(p => {
            amount = amount +p.price;
        })
        return amount;
    }

    return (
    <div>
        <h3 className='text-white'>Total Amount to be paid: <span className='text-danger'>${getFinalAmount()}</span></h3>
    </div>
  )
}

export default StripeCheckout;