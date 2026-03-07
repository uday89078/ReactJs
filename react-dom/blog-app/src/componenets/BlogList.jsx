import axios from "axios"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"

function BlogList(){

const [blogs,setBlogs]=useState([])
const [filter,setFilter]=useState("")

useEffect(()=>{
fetchBlogs()
},[])

const fetchBlogs= async()=>{
let url="http://localhost:3000/blogs"

if(filter){
url+=`?category=${filter}`
}

const res = await axios.get(url)
setBlogs(res.data)
}

useEffect(()=>{
fetchBlogs()
},[filter])

return(

<div>

<h2>Blog List</h2>

<select onChange={(e)=>setFilter(e.target.value)}>
<option value="">All</option>
<option>Entertainment</option>
<option>Technology</option>
<option>Sports</option>
<option>Business</option>
<option>Health</option>
<option>Science</option>
</select>

<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>

{blogs.map((blog)=>(
<div key={blog.id} style={{border:"1px solid gray",padding:"10px"}}>

<img src={blog.image} width="100%" />

<h3>{blog.title}</h3>

<p>{blog.category}</p>

<p>{blog.blogger_name}</p>

<p>{blog.description.slice(0,80)}...</p>

<Link to={`/blog/${blog.id}`}>
Read More...
</Link>

</div>
))}

</div>

</div>

)

}

export default BlogList