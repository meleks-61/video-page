
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const[videos,setVideos]=useState([])
  const apıKey="AIzaSyCU44KjS5GmVC1S7DC9xNXht3xph2tg8O0"

  const onTermSubmit= async (term)=>{
    const response= await axios.get('https://www.googleapis.com/youtube/v3/search',{
      params:{
        part:'snippet',
        maxResults:5,
        type:'video',
        key:apıKey,
        q:term
       
      }
    })
    setVideos(response.data.items)
    //  console.log(response)

  }





  return (
    <div className="ui segment container">
      
     <SearchBar onTermSubmit={onTermSubmit}/>
     <VideoDetail/>
     <VideoList videos={videos}/>
   
  
    </div>
  );
}

export default App;
