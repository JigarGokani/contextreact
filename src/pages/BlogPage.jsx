import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Haeder from '../components/Haeder';
import { Appcontext } from '../context/Appcontext';
import BlogDetails from '../components/BlogDetails';
import { baseurl } from '../baseurl';

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog,setBlog] = useState(null);
    const [ relatedBlogs,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {setLoading,loading} = useContext(Appcontext);

    const blogid = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogid=${blogid}`;
        try{
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        }
        catch(error){
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);

        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogid){
            fetchRelatedBlogs();
        }
    },[location.pathname])

  return (
    <div>
        <Haeder/>
        <div>
            <button
            onClick={()=>navigate(-1)}
            >
                Back
            </button>
        </div>
        {
            loading ? 
            (<p>Loading</p>) : 
            blog ? 
                (<div>
                    <BlogDetails post ={blog}/>
                    <h2>Related Blogs</h2>
                    {
                        relatedBlogs.map((post)=>(
                            <div key = {post.id}>
                                <BlogDetails post ={post}/>
                            </div>
                        ))
                    }
                </div>) : 
                (<div>
                    <p>No Blog Found</p>
                </div>)

        }
    </div>
  )
}

export default BlogPage