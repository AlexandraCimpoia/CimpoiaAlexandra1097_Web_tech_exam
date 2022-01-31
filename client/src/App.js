import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StaticRouter } from 'react-router'
import { useEffect, useState } from 'react';
import DBstore from './components/FavouriteLists/DBstore'
import Video from './components/FavouriteLists/Video';
import AddVideoForm from './AddVideoForm'
import AllVideos from "./components/AllVideos";



function App() {

  const [ids, setIds] = useState([])

    const [videos, setVideos] = useState([])

  useEffect(() => {
    DBstore.getVideos();
    DBstore.emitter.addListener('GET_VIDEOS_SUCCESS', () => {
      setIds(DBstore.data)
    })
  }, [])

    const addVideo = (video) => {
        DBstore.addVideo(video)
    }

  return (
    <>
      <h1>Cimpoia Alexandra 1097 exam</h1>
      <a href = "/3">Click here to see a video</a>
      
        {/*<Routes>*/}
        {/*  {ids.map((video) => {*/}
        {/*    let id = video.VideoID*/}
        {/*    return <Route path={"/" + id} element={<Video key={video.VideoID} member={video} />} />*/}
        {/*  })}*/}
        {/*</Routes>*/}

        <Routes>
            <Route path="/" exact={true} element={AllVideos}/>
            {/*    //<AllVideos />*/}
            {/*//</Route>*/}
        </Routes>

      <h3>Add a video</h3>
      <AddVideoForm onAdd={addVideo} />
    </>
  );

}

export default App;
