
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const[videos,setVideos]=useState([])
  const[selected,setSelected]=useState()

  const apıKey="AIzaSyCU44KjS5GmVC1S7DC9xNXht3xph2tg8O0"

  useEffect(()=>{
    onTermSubmit("sunset")

  },[])


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
    setSelected(response.data.items[0])
    //  console.log(response)

  }
  const onSelected =(video)=>{
    setSelected(video)

  }





  return (
    <div className="ui segment container App">
      
     <SearchBar onTermSubmit={onTermSubmit}/>
     <div className='ui grid'>
      <div className='ui row'>
        <div className='eleven wide column'>
     <VideoDetail selected={selected}/>
     </div>
     <div className='five wide column'>
     <VideoList onSelected={onSelected} videos={videos}/>
     </div>
     </div>
     </div>
   
  
    </div>
  );
}

export default App;
