import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder(){
    
    const [query, setQuery] = useState('')
    const navigate = useNavigate();
    
    function handlesubmit(e)
    {
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`);
        setQuery('')

    }
    return(
        <form onSubmit={handlesubmit}>

        <input placeholder="search you order#00000" value={query} onChange={(e)=>setQuery(e.target.value)}  />
        </form>
    )
}
export default SearchOrder;