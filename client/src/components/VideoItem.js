const VideoItem = (props) => {
    return(
        <li>
            <p>{props.favouriteListID}</p>
            <p>{props.videoDescription}</p>
            <p>{props.videoTitle}</p>
            <p>{props.videoUrl}</p>
        </li>
    )
}

export default VideoItem