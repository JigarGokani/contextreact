import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>
        <NavLink to = {`/blog/${post.id}`}>
            <span className='font-bold'>{post.title}</span>
        </NavLink>
        <br></br>
        
        <p className='mt-1'>
            By {" "}
            <span>{post.author}</span>
            {" "}
             on 
             {" "}
            <NavLink to = {`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className='text-red-500 font-bold'>{post.category}</span>
            </NavLink>
        </p>
        <p> Posted on {post.date}</p>
        <p> {post.content} </p>
        <br></br>
        <div>
            {post.tags.map((tag,index)=>(
                <NavLink key={index} to = {`/tags/${tag.replaceAll(" ","-")}`}>
                   <span className='text-blue-700 mr-2'>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
        <br></br>
    </div>
  )
}

export default BlogDetails