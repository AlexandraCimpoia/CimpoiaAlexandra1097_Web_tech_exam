import {useState} from 'react'

function AddVideoForm(props) {
    const {onAdd} = props

    const [favouriteListID, setFavouriteListID] = useState('');
    const [favouriteListDescription, setFavouriteListDescription] = useState('');
    const [favouriteListDate, setFavouriteListDate] = useState('');

    const add = (evt) => {
        onAdd({
            favouriteListID,
            favouriteListDescription,
            favouriteListDate
        })
        setFavouriteListID('')
        setFavouriteListDescription('')
        setFavouriteListDate('')
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='favourite list id' value={favouriteListID}
                       onChange={(evt) => setFavouriteListID(evt.target.value)}/>
            </div>
            <div>
                <input type='text' placeholder='list description' value={favouriteListDescription}
                       onChange={(evt) => setFavouriteListDescription(evt.target.value)}/>
            </div>
            <div>
                <input type='text' placeholder='list date' value={favouriteListDate}
                       onChange={(evt) => setFavouriteListDate(evt.target.value)}/>
            </div>
            <div>
                <input type='button' value='add video' onClick={add}/>
            </div>
        </div>
    )
}

export default AddVideoForm