import { useState } from 'react'

function Video(props) {
    const { member } = props;
    const [videoID, setVideoID] = useState(member.VideoID);
    const [favouriteListID, setFavouriteListID] = useState(member.FavouriteListID)
    const [videoDescription, setVideoDescription] = useState(member.VideoDescription);
    const [videoTitle, setVideoTitle] = useState(member.VideoTitle);
    const [videoUrl, setVideoUrl] = useState(member.VideoUrl);

    return (<>
        <h1>Video</h1>
        <p>ID: {videoID}</p>
        <p>favouriteListID: {favouriteListID}</p>
        <p>videoDescription: {videoDescription}</p>
        <p>videoTitle: {videoTitle}</p>
        <p>videoUrl: {videoUrl}</p>
    </>)
}

export default Video;