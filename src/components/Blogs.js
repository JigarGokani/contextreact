import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {

  const {posts,loading} = useContext(Appcontext)
  console.log("posts showing",posts);

  return (
    <div className='w-11/12 max-w-[600px] mx-auto'>
        {
            loading ? 
            (<Spinner/>) : 
            (
                posts.length === 0 ?
                (<div>
                    <p>No Post Found</p>
                </div>) :
                (posts.map((post)=>(
                    <BlogDetails key={post.id} post = {post}/>
                )))
            )
        }
    </div>
  )
}

export default Blogs