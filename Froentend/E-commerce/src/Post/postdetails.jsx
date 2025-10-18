import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'

const Postdetails = () => {

  const [post,setPost]=useState(null)
   const {id}=useParams()  // geting id from url

   const fetchpost=async()=>{
    try{
      const resp=  await axios.get(`http://localhost:8000/api/posts/${id}`)
      setPost(resp.data)
        
    }
    catch(err){
      console.log(err);
      
    }
   }
 useEffect(() => {
    fetchpost()
  },[id])

  
  if (!post) return <p className="text-center mt-5">Loading post...</p>

//DAte updates 
 const format_data = Intl.DateTimeFormat('en-US',{
  month :'long',
  day:"numeric",
  year :"numeric"
}).format(new Date(post.createdAt))


  return (<>
  {/* navbar using */}

 <header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container">

      {/* <!-- Brand (left side) --> */}
      <a class="navbar-brand" href="#">SHIkAz Blog</a>

      {/* <!-- Toggler button for mobile --> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNAV">
        <span class="navbar-toggler-icon"></span>
      </button>

      {/* <!-- Collapsible Nav Items --> */}
      <div class="collapse navbar-collapse" id="navbarNAV">
        {/* <!-- ms-auto pushes nav items to the right --> */}
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0  gap-3">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
</header>

   

     <h1 className='text-center my-3 bg-primary w-100 '>{post.title}</h1> 
 <div className=' container me-5'>

  
    <div className="row ab  ">
       <div className="card  col-8  col-md-8 m-5  bg-danger p-3 ">
        <div className="card-img img">
          <img src={post.image} className='w-100 p-3 bg-warning' />

        </div>
        <div className="card-body">
          <div className="card-title bg-white rounded text-center my-2">
           <div className="m-2"> {post.content}</div>
          </div>
          <span>   {format_data}  By  <a href="#">{post.author}</a></span>
        </div>
       </div>
    </div>
<Link to="/">
<button className='btn btn-info'> BACK</button>
</Link>
 </div>




 {/* boostrap using grid system leran  */}

 <header className='p-4'>
    <div className="row">
      <div className="col">
          <h1>this blog head</h1>
      </div>
      
      <div className="col">
        <nav>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              home
            </li>
            <li className='list-inline-item'>contect</li>
            <li className='list-inline-item'> about</li>
          </ul>
        </nav>
      </div>
    </div>
    

  </header>
 <div className="container">
 

  <div className="row">
    <div className="col-12  col-md-4   col-sm-6">
      <h2>post 1</h2>
      <p>date</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, saepe eius doloribus natus rem. Suscipit numquam ab vero quia placeat iure cum quidem corrupti ut, corporis accusamus quos adipisci.
        
      </p>
    </div>

    <div className="col-12 col-md-4  col-sm-6">
      <h2>post 2</h2>
      <p>date</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, saepe eius doloribus natus rem. Suscipit numquam ab vero quia placeat iure cum quidem corrupti ut, corporis accusamus quos adipisci.

      </p>
    </div>

    <div className="col-12 col-md-4  col-sm-6">
      <h2>post 3</h2>
      <p>date</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, saepe eius doloribus natus rem. Suscipit numquam ab vero quia placeat iure cum quidem corrupti ut, corporis accusamus quos adipisci.

      </p>
    </div>

    <div className="col-12 col-md-4  col-sm-6">
      <h2>post 4</h2>
      <p>date</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, saepe eius doloribus natus rem. Suscipit numquam ab vero quia placeat iure cum quidem corrupti ut, corporis accusamus quos adipisci.

      </p>
    </div>

    <div className="col-12 col-md-4  col-sm-6">
      <h2>post 5</h2>
      <p>date</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, saepe eius doloribus natus rem. Suscipit numquam ab vero quia placeat iure cum quidem corrupti ut, corporis accusamus quos adipisci.

      </p>
    </div>

    <div className="col-12  col-md-4  col-sm-6">
      <h2>post 6</h2>
      <p>date</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, saepe eius doloribus natus rem. Suscipit numquam ab vero quia placeat iure cum quidem corrupti ut, corporis accusamus quos adipisci.

      </p>
    </div>
 
   
  </div>


  
 </div>
 <footer className='p-4'>
    <div className="row">
      <div className="col">
        <p>2025 my blog .All the right reserverd</p>
      </div>

      <div className="col">
        <ul className='list-inline'>
          <li className='list-inline-item' >term & condition</li>
          <li className='list-inline-item' >term & condition</li>
          <li className='list-inline-item' >term & condition</li>
          
        </ul>
      </div>
    </div>
  </footer>
    
     </>
    
  


  )
}

export default Postdetails