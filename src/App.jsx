
// import './App.css'
import Search from "./components/Search/Search"
import SearchResult from "./components/Search/SearchResult"
import {useState} from 'react'


function App() {
  const[results, setResults]=useState([])
  return (
    <div>
     <Search setResults={setResults} />
     <SearchResult results={results} /> 
    </div>
  )
}

export default App
