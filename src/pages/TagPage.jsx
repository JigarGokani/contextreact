import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Haeder from '../components/Haeder'
import Pagination from '../components/Pagination'

const TagPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Haeder/>
        <div>
            <button
            onClick={()=>navigate(-1)}
            >
                Back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage