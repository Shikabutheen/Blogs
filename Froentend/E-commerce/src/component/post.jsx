import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row   g-4 align-items-center">
          <div className='border '>
                {/* Image Section */}
          <div className="col-12 col-md-7 text-center">
            {post.image ? (
              <img src={post.image} className="img-fluid rounded" alt={post.title} />
            ) : (
              <p>Loading image...</p>
            )}
          </div>

          {/* Content Section */}
          <div className="col-12 col-md-7 text-center">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content.substring(0, 20)}...</p>
              <Link to={`/post/${post._id}`}>
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
          </div>

      

        </div>
      </div>
    </>
  )
}

export default Post
