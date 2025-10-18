import React, { useEffect, useState } from 'react'
import Post from '../component/post.jsx'

import axios from 'axios'

const Postlist = () => {

  const [post ,setPost]=useState([])
//get the data in db
  const fetchpost=async ()=>{
    const respone=await axios.get("http://localhost:8000/api/posts")
    setPost(respone.data) // for get data
  }
  useEffect(()=>{
    fetchpost()

  },[])




  return (
    <>
{/* <header className='d-inline-block   w-100  '>
    <nav className='container-fluid  bg-light'>
        <div className="m-2  d-flex justify-content-between align-items-center">
            <h3 className='m-3'>Shikaz</h3>

            <div className=''>
                <ul className='d-flex gap-3 m-2 navs align-items-center '>
                    <li >home</li>
                    <li>Post</li>
                    <li>About</li>
                    <li>Contect</li>
                </ul>
            </div>

        </div>
    </nav>

</header> */}
{/* <header className='bg-white rounded '>
  <div className="row">
    <div className="col">
       <div className="m-2  d-flex justify-content-between align-items-center">
            <h3 className='m-3'>Shikaz</h3> </div>

    </div>

    <div className="col">
      <ul className='list-inline  m-3 navs  '>
                    <li className='list-inline-item'>home</li>
                    <li  className='list-inline-item'>Post</li>
                    <li  className='list-inline-item'>About</li>
                    <li  className='list-inline-item'>Contect</li>
                </ul>
    </div>
  </div>
</header> */}

<header>
  <nav className='navbar  navbar-white   bg-white  navbar-expand-lg'>
    <div className="container bg-light ">
      {/* toogle btn  */}
      <button className='navbar-toggler ' type='button' data-bs-toggle="collapse" data-bs-target="#btnstogle">
        <span className='navbar-toggler-icon'></span>
      </button>

      <a href="#" className='navbar-brand '>SHIkAz Blog</a>


      <div className='collapse navbar-collapse' id='btnstogle'>
        <ul className='navbar-nav ms-auto mb-2 navs'>
          <li className='nav-item'>
            <a href="#" className='nav-link'>Home</a>

          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link'>Post</a>

          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link'>About</a>

          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link'>Contect</a>

          </li>
        </ul>
      </div>
    </div>

  </nav>

</header>


<main className='ms-3 my-4 rounded container '>
  <div className=" row  ab  ">
          {/* About Me */}
          <div className="card col-12 mb-3  ">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          

             
          <div className="card  col-12" >
            <div className="card-body ">
              <h5 className="card-title">Categories</h5>
              <ul className="  d-flex cat gap-4 list-unstyled mb-0 border">
                <li><a href="#">Category 1</a></li>
                <li><a href="#">Category 2</a></li>
                <li><a href="#">Category 3</a></li>
              </ul>
            </div>
          </div>
         

        </div>
</main>
  
    <div className='ms-5 my-3'>
      <h1 >Latest Posts</h1>
    </div>

    {/* posts creations */}

    <div className='  warper container '>
       <div className='main row  col-12 '>
          {post.length > 0 ? (
              post.map((post) => (
                <Post post={post} 
                 /> 
                
              ))
            ) : (
              <p>No posts available</p>
            )}
       </div>
     

     </div>   
    
    </>
  )
}

export default Postlist