import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css'
const App = () =>{

    const APP_ID = 'dc34792b';
    const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21'
    const [query,setQuery] = useState('')

    const [dishes,setDishes] = useState([])
    const [search,setsearch] = useState('chicken')
    



    useEffect(()=>{
async function getData(){
    const res= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const response= await res.json()
    
    setDishes(response.hits)
}

getData()
},[query])

    const submitHandler = e =>{

        e.preventDefault()
        setQuery(search)
        setsearch('')
       
    }
    return <div className="App">
    <form onSubmit={submitHandler } className="search-form">
        

        <input type="text" onChange={e =>setsearch(e.target.value )} value={search} className="search-bar"/>
            
        <button type="submit" className="search-button">Search</button>
    </form>
    {dishes.map((item,idx) => <Recipe recipelist={item} key={idx}/>)}
    </div>
}
export default App