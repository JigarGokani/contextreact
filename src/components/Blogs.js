import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Spinner from './Spinner'

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
                    <div className='mb-5' key ={post.id}>
                        <p className='font-bold'>{post.title}</p>
                        <p>
                            By <span>{post.author}</span> on <span className='font-bold text-red-600'>{post.category}</span>

                        </p>
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div className='text-blue-500'>
                            {post.tags.map((tag,index) => {
                                return <span className='m-1' key ={index}>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                )))
            )
        }
    </div>
  )
}

export default Blogs