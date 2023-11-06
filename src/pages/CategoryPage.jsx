import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Haeder from '../components/Haeder'
import Pagination from '../components/Pagination';

const CategoryPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div>
        <Haeder/>
        <div>
            <button 
            onClick={()=>navigate(-1)}
            >
                Back
            </button>
            <h1>
                Blogs on <span>{category}</span>
            </h1>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage