import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './All.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Product = () => {

    const[value , setvalue] = useState([])

    const[page , setpage] = useState(1)

    const [input,setInput] = useState("")
    
    const navigate = useNavigate();

    const [searchParam,setSearchParam] = useSearchParams()
    // console.log(searchParam)

    const searchQuery = searchParam.get("search") || ""
    // console.log(searchQuery )
    
    useEffect(()=>{
      setInput(searchQuery)
    },[searchQuery])

    function fetchdata() 
    {
        // fetch(`http://localhost:3000/products?_page=${page}&_limit=5`)
        // .then((res) => res.json())
        // .then((data) => setvalue(data))
        // .catch((err) => console.log(err))

        axios.get(`http://localhost:3000/products?_page=${page}&_limit=6`,{
          params :{
            q:searchQuery
          }
        })
        .then((res) => setvalue(res.data))
        .catch((err) => console.log(err))
    }

    function handleChange(e)
    {
        let keyword = e.target.value
        setInput(keyword)
        setSearchParam({search:keyword})

    }

    useEffect(() =>{
        fetchdata()
    },[page,searchQuery])

    function handleDelete(id) {
      axios.delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          fetchdata() // Refresh after delete
        })
        .catch((err) => console.log(err))
    }

  return (

    <div>

      <h1>Product Page</h1>

      <div className='product-search'>

        <input type="text" value={input} placeholder='Search Item' onChange={handleChange}/>
      
      </div>

      <div className="product-grid">
        {
          value.map((el) => 
            <div className="product-card" key={el.id} onClick={() => navigate(`/product/${el.id}`)} >
              
              <h1>{el.id}</h1>
              <img src={el.image} height={200} width={200} alt={el.title} />
              <p>{el.title}</p>
              <p>{el.description}</p>
              <p>{el.category}</p>
              <p>${el.price}</p>

              <button onClick={(e) => { e.stopPropagation(); navigate(`/product/edit/${el.id}`); }}>Edit</button>

              <button onClick={(e) => { e.stopPropagation(); handleDelete(el.id); }}>Delete</button>
            
            </div>
          )
        }
      </div>

      <div className="pagination">
        <button onClick={() => setpage(page - 1)} disabled={page === 1}>Prev</button>
        <span>{page}</span>
        <button onClick={() => setpage(page + 1)} >Next</button>
      </div>

      {/* <section className="promo">
        
        <h2>Special Offers 🎉</h2>
        
        <p>Don't miss our limited-time deals and seasonal discounts!</p>
        
        <img src="https://cdn.pixabay.com/photo/2016/11/29/02/00/discount-1866793_960_720.jpg" alt="Discount Banner" className="promo-image" />

      </section> */}

      <footer className="home-footer">
        
        <p>&copy; 2025 Srushti Store. All rights reserved.</p>

      </footer>

    </div>  
    
  )
}

export default Product