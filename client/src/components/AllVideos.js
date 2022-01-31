//import DBstore from './components/FavouriteLists/DBstore'
//import Video from './components/FavouriteLists/Video';
import {useSelector} from "react-redux";
import VideoItem from "./VideoItem";

function AllVideos(props) {
    const videos = useSelector((state) =>
        state.videos.videos
    )

    return (<>

            <ul>
                {videos.map((video) => (
                    <VideoItem
                        key={video.FavouriteListID}
                        favouriteListID={video.FavouriteListID}
                        videoDescription={video.VideoDescription}
                        videoTitle={video.VideoTitle}
                        videoUrl={video.VideoUrl}
                    />
                ))}
            </ul>

    </>)
}

export default AllVideos;