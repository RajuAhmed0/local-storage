import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Site = () => {
    const [products, setProducts] = useState([])
    console.log(products);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <>  
          <div className='grid grid-cols-4 gap-4 pt-10'>
          {
                products.map(product => <Card
                     key={products.id}
                     product={product}
                     products={products}
                     setProducts={setProducts}
                     ></Card>)
            }
           
          </div>
        </>
    );
};

export default Site;