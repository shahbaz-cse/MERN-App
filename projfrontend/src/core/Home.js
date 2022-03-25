import React, {useState, useEffect} from 'react'
import "../styles.css";
import {API} from "../backend"
import Base from './Base';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';


export default function Home() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProduct = () => {
        getProducts().then(data => {
            try{
                if(data.error){
                    setError(data.error);
                } else {
                    setProducts(data)
                }
            }
            catch(err){
                console.log(err);
            }
        });
    };

    useEffect(() => {
        loadAllProduct();
    }, [])
    

    return (
        <Base title='E-commerce Website' description='Welcome to the store home page!'>
            <div className="row text-center">
                <h1 className='text-white py-2'>All Available Products</h1>
                <div className='row '>
                    {products.map((product, index) => { 
                        return (
                            <div key={index} className="col-4 mb-4">
                                <Card product={product}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Base>
    );
}
