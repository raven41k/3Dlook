import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <>
            <div style={{textAlign: 'center', fontSize: '2rem'}}>Product page</div>
            <Link style={{textAlign: 'left', fontSize: '2rem'}} to="/">{'<-- Back'}</Link>
        </>
    )
    
}



export default Product;