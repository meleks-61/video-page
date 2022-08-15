import VideoItem from "./VideoItem";

const VideoList = ({videos,onSelected})=>{
    return(
        <div className="ui relaxed divided list">
        {videos.map((video)=>{
           return <VideoItem onSelected={onSelected} video={video} key={video.id.videoId}/>
           
        })}
        </div>
       
    )

}
export default VideoList;