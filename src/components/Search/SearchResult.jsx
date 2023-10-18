import React from 'react'
import './Search.css'
const SearchResult = ({results}) => {
  return (
    <div className='result'>
        {results.map((results,id)=>{
            return(
                <div key={id} className='data'>
                        {results.name}
                </div>
            )
        })}
    </div>
  )
}

export default SearchResult