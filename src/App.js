import React, { useContext, useEffect } from 'react'
import { Appcontext } from './context/Appcontext'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'


const App = () => {

  const {fetchBlogsPost} = useContext(Appcontext);

  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      // iska matlab tag vala page show karna he     
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogsPost(Number(page),tag);
     
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogsPost(Number(page),null,category);
    }
    else{
      fetchBlogsPost(Number(page));
    }
      


    

  },[location.pathname,location.search])

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/blog/:blogid" element={<BlogPage/>}></Route>
        <Route path="/tags/:tag" element={<TagPage/>}></Route>
        <Route path="/categories/:category" element={<CategoryPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App