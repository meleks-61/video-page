import VideoItem from "./VideoItem";

const VideoList = ({videos})=>{
    return(
        <div className="ui relaxed divided list">
        {videos.map((video)=>{
           return <VideoItem video={video} key={video.id.videoId}/>
           
        })}
        </div>
       
    )

}
export default VideoList;