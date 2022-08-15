const VideoDetail =({selected})=>{
    if(!selected){
        return <div>Loading..</div>

    }




    const videoId=`https://www.youtube.com/embed/${selected.id.videoId}`
    return(
<div>
<div className="ui embed">

    <iframe title="video-player" src={videoId}/>

</div>



        <div className="ui segment">
            <div className="ui header">{selected.snippet.title}</div>
            <p>{selected.snippet.description}</p>

        </div>
        </div>
    )
}
export default VideoDetail;