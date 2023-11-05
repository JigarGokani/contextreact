import { createContext, useState } from "react";
import { baseurl } from "../baseurl";


// step-1 createcontext
export const Appcontext = createContext();

// step-2 provider
export default function AppcontextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);



// data filling
async function fetchBlogsPost(page = 1){
    setLoading(true);
    let url = `${baseurl}?page=${page}`;
try{
    const result = await fetch(url);
    const data =await result.json();
    console.log(data);
    setPage(data.page);
    setPosts(data.posts);
    setTotalPages(data.totalPages);

}
catch(error){
    console.log("error in fetching ");
    setPage(1);
    setPosts([]);
    setTotalPages(null);

}
setLoading(false);
}

function handlePageChange(page){
    setPage(page);
    fetchBlogsPost(page);

}


const values = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogsPost,
    handlePageChange,
};

return <Appcontext.Provider value={values}>
      {children}
</Appcontext.Provider>

 

}