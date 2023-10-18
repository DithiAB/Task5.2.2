import {useState, useEffect} from 'react'
import './Search.css'
import axios from 'axios'

const Search = ({setResults}) => {
    const[input, setInput]=useState("")

    const getData=async(value)=>{
        const res= await axios.get("https://jsonplaceholder.typicode.com/users")
    const results= res.data.filter((user)=>{
        return(
            value&&
            user&&
            user.name&&
            user.name.toLowerCase().includes(value)
        )
    })
    setResults(results)
    console.log(setResults)
    }
    useEffect(()=>{
        getData();
    },[])
   const handelchange=(value)=>{
    setInput(value)
    getData(value)
   }
  return (
    <div className='main'>
      <input type="text"  placeholder='search here....' value={input}onChange={(e)=>handelchange(e.target.value)} />
      <p> <i class="fa-solid fa-magnifying-glass"></i></p>
    </div>
  )
}

export default Search