import { TextField,FormControl,OutlinedInput, } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const SearchBar =({onTermSubmit}) =>{
    

    const [term,setTerm] =useState("")

    const onFormSubmit = (e)=>{
        e.preventDefault();
        onTermSubmit(term);
        

    }




    return(


//  <FormControl sx={{ width: '100ch', marginTop:"20px" }}  onSubmit={onFormSubmit}>
//   <OutlinedInput placeholder="Please enter text" value={term} onChange={(e)=>setTerm(e.target.value)}/>

//  </FormControl> 
 




        

 <div className="ui segment container" style={{margin:"20px 0"}}>
<form onSubmit={onFormSubmit} className="ui form">
  <div className="field">
    <input
      value={term}
      type="text"
      placeholder="Search..."
      onChange={(e) => setTerm(e.target.value)}
    />
  </div>
</form>
</div> 
    )
}
export default SearchBar;