import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Haeder from '../components/Haeder'

const HomePage = () => {
  return (
    <div>
        <Haeder/>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default HomePage