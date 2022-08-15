import { TextField,FormControl,OutlinedInput, } from "@mui/material";
import { useState } from "react";

const SearchBar =() =>{
    // apıKey:AIzaSyCU44KjS5GmVC1S7DC9xNXht3xph2tg8O0

    const [term,setTerm] =useState("")

    const onFormSubmit = (e)=>{
        e.preventDefault()
        

    }




    return(
        <div>

<FormControl sx={{ width: '100ch', marginTop:"20px" }}  onSubmit={onFormSubmit}>
  <OutlinedInput placeholder="Please enter text"  onChange={(e)=>setTerm(e.target.value)}/>

</FormControl>
        </div>
    )
}
export default SearchBar;