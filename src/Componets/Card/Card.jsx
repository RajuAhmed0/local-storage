import React from 'react';

const Card = ({ product, products, setProducts }) => {

    const {image, description, title, price } = product

    return (
        <div>
            <div className="card bg-base-100 h-[440px] w-[300px] shadow-xl">
                <figure className="px-8 pt-8 h-80">
                    <img
                        src={image}
                        alt="Products"
                        className="rounded-xl w-full h-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h4 className=" text-black font-bold">{title}</h4>
                    <small className='text-black text-xs'>{description.slice(0, 70)}...</small>
                    <p className='text-black font-bold'>Price: ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;