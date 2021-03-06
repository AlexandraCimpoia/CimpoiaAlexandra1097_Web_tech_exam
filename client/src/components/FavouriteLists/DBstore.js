import {EventEmitter} from 'fbemitter'
import Axios from 'axios'

const SERVER = 'http://localhost:3000'

class DBStore {
    constructor() {
        this.data = [];
        this.axios = Axios.create();
        this.emitter = new EventEmitter();
    }

    async getVideos() {
        /* try{
             const response = await fetch("/api/videos");
 
             if(response.status === 500) {
                 throw response;
             }
 
             this.data = await response.json();
             this.emitter.emit("GET_VIDEOS_SUCCESS");
         } catch (error) {
             console.warn(error)
             this.emitter.emit("GET_VIDEOS_FAILED");
         }*/


        this.axios.get("/api/videos").then((response) => {
            this.data = response.data;
            console.log(this.data)
            this.emitter.emit("GET_VIDEOS_SUCCESS");
        }).catch((error) => {
            console.warn(error)
            this.emitter.emit("GET_VIDEOS_FAILED");
        })
    }

    async addVideo(video) {
        try {
            const response = await fetch(`${SERVER}/api/videos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(video)
            })
            if (!response.ok) {
                throw response
            }
            this.getVideos()
        } catch (err) {
            console.warn(err)
            this.emitter.emit('ADD_VIDEO_ERROR')
        }
    }
}

const store = new DBStore();

export default store;