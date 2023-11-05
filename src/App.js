import React, { useContext, useEffect } from 'react'
import Haeder from './components/Haeder'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { Appcontext } from './context/Appcontext'

const App = () => {

  const {fetchBlogsPost} = useContext(Appcontext);

  useEffect(()=>{

    fetchBlogsPost();

  },[])

  return (
    <div>
      <Haeder/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App