import {useState} from 'react'

function AddVideoForm(props) {
    const {onAdd} = props
    //const [videoID, setVideoID] = useState('');
    const [favouriteListID, setFavouriteListID] = useState('');
    const [videoDescription, setVideoDescription] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const add = (evt) => {
        onAdd({
            //videoID,
            favouriteListID,
            videoDescription,
            videoTitle,
            videoUrl
        })
        //setVideoID('')
        setFavouriteListID('')
        setVideoDescription('')
        setVideoTitle('')
        setVideoUrl('')
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='favourite list id' value={favouriteListID}
                       onChange={(evt) => setFavouriteListID(evt.target.value)}/>
            </div>
            <div>
                <input type='text' placeholder='video description' value={videoDescription}
                       onChange={(evt) => setVideoDescription(evt.target.value)}/>
            </div>
            <div>
                <input type='text' placeholder='video title' value={videoTitle}
                       onChange={(evt) => setVideoTitle(evt.target.value)}/>
            </div>
            <div>
                <input type='text' placeholder='video url' value={videoUrl}
                       onChange={(evt) => setVideoUrl(evt.target.value)}/>
            </div>
            <div>
                <input type='button' value='add video' onClick={add}/>
            </div>
        </div>
    )
}

export default AddVideoForm