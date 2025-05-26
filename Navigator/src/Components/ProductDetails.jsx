import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (

    <>

      <div className="product-details-container">
          <img src={product.image} alt={product.title} className="product-image" />
          
          <div className="product-info">
              <h1>{product.title}</h1>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price}</p>
          </div>
      
      </div>

      {/* <section className="promo">
      
        <h2>Special Offers 🎉</h2>
        
        <p>Don't miss our limited-time deals and seasonal discounts!</p>
        
        <img src="https://cdn.pixabay.com/photo/2016/11/29/02/00/discount-1866793_960_720.jpg" alt="Discount Banner" className="promo-image" />

      </section> */}

      <footer className="home-footer">
      
        <p>&copy; 2025 Srushti Store. All rights reserved.</p>

      </footer>

    </>

  )

}

export default ProductDetails;