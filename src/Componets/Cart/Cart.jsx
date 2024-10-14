import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const Cart = ({ products }) => {

    const productsId = JSON.parse(localStorage.getItem('productId')) || [];

    let cartProductsDetails = [];

    for (const product of productsId) {
        const cartProducts = products.find(pDetails => pDetails.id === product);
        if (cartProducts) {
            cartProductsDetails.push(cartProducts);
        }

    }
    if (productsId.length === 0) {
        return <h2 className='text-2xl font-semibold text-center my-8'>Not added products In Cart</h2>

    }



    const deleteButton = (id) => {

        let setProductId = JSON.parse(localStorage.getItem('productId')) || [];

        setProductId = setProductId.filter(productId => productId !== id);

        localStorage.setItem('productId', JSON.stringify(setProductId));
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center my-8'>Cart Added Products</h1>

            <div className='flex flex-col gap-4 w-64'>
                {cartProductsDetails.map(pDetails => <div key={pDetails.id}>
                    <div className='flex items-center justify-between border p-2 rounded-md border-sky-500'>
                        <div>
                            <img src={pDetails.image} alt="" srcset="" className='w-10' />
                        </div>
                        <h2>{pDetails.title.slice(0, 20)}</h2>

                        <button onClick={() => { deleteButton(pDetails.id) }} className='text-orange-700 text-2xl'><MdDeleteForever /></button>
                    </div>

                </div>)
                }
            </div>
        </div>
    );
};

export default Cart;