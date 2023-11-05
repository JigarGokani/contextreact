import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Pagination = () => {
    const {page,handlePageChange,totalPages} = useContext(Appcontext);

  return (
    <div className='max-w-[600px] mx-auto'>
        { page > 1 &&
            (<button onClick={()=>handlePageChange(page-1) } className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Previous
            </button>)
        }
        {
            page < totalPages && 
            (
                <button onClick={()=>handlePageChange(page+1)} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                    Next
                </button>
            )
        }

        <p className='font-bold'>Page {page} of {totalPages}</p>
    </div>
  )
}

export default Pagination