const FavouriteListDB = require("../models/FavouriteLists")
const VideoDB = require("../models/Videos")
var express = require("express");
const { Op } = require("sequelize");
const { route } = require("../app");
var path = require('path');
var router = express.Router();

router.get("/favouriteLists", async (req, res, next) => {
    try {
        const favouriteLists = await FavouriteListDB.findAll({
            order: [
                ['FavouriteListID', 'DESC']
            ]
        });

        res.status(200).json(favouriteLists);
    } catch (err) {
        console.log(err)
        next(err);
    }
});

router.get("/videos", async (req, res, next) => {
    try {
        const videos = await VideoDB.findAll();
        res.status(200).json(videos);
    } catch (err) {
        next(err);
    }
});


router.get("/videos/:id", async (req, res, next) => {
    try {
        const videos = await VideoDB.findByPk(req.params.id);
        res.status(200).json(videos);
    } catch (err) {
        next(err);
    }
});

router.post("/favouriteLists", async (req, res, next) => {
    try {
        await FavouriteListDB.create(req.body);
        res.status(201).json({ message: "Favourite List created!" });
    } catch (err) {
        next(err);
    }
});

router.post("/videos", async (req, res, next) => {
    try {
        await VideoDB.create(req.body);
        res.status(201).json({ message: "Video Created!" });
    } catch (err) {
        next(err);
    }
});

router.get("/favouriteLists/:id/videos", async (req, res, next) => {
    try {
        const videos = await VideoDB.findAll({ where: { FavouriteListID: `${req.params.id}` } })
        if (videos) {
            return res.status(200).json(videos);
        } else {
            return res.status(404).json({ message: "Not found" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error })
    }
})

router.put("/favouriteLists/:id", async (req, res, next) => {
    try {
        const { FavouriteListDescription, FavouriteListDate} = req.body;
        await FavouriteListDB.update({
            FavouriteListDescription: FavouriteListDescription,
            FavouriteListDate: FavouriteListDate

        }, {
            where: {
                FavouriteListID: `${req.params.id}`
            }
        })
        return res.status(200).json({ message: "Updated favourite list!" });
    } catch (err) {
        console.log(err)
        next(err);
    }
})

router.delete("/favouriteLists/:id", async (req, res, next) => {
    try {
        await FavouriteListDB.destroy({ where: { FavouriteListID: `${req.params.id}` } })
        return res.status(200).json({ message: "Deleted favourite list!" });
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.put("/favouriteLists/:id/videos/:videoID", async (req, res, next) => {
    try {
        const { FavouriteListID, VideoDescription, VideoTitle, VideoUrl } = req.body;
        const favouriteList = await FavouriteListDB.findByPk(req.params.id);
        if (favouriteList) {
            const video = await VideoDB.findByPk(req.params.videoID, { where: { FavouriteListID: `${favouriteList.FavouriteListID}` } })
            if (video) {
                await VideoDB.update({
                    FavouriteListID: FavouriteListID,
                    VideoDescription: VideoDescription,
                    VideoTitle: VideoTitle,
                    VideoUrl: VideoUrl,
                }, {
                    where: {
                        VideoID: video.VideoID
                    }
                })
            }
            return res.status(200).json({ message: "Updated video!" })
        }
    } catch (err) {
        console.log(err);
        next(err)
    }
})

router.delete("/favouriteLists/:id/videos/:videoID", async (req, res, next) => {
    try {
        const favouriteList = await FavouriteListDB.findByPk(req.params.id);
        if (favouriteList) {
            const video = await VideoDB.findByPk(req.params.videoID, { where: { FavouriteListID: `${favouriteList.FavouriteListID}` } })
            if (video) {
                await VideoDB.destroy({ where: { VideoID: video.VideoID } })
            }
            return res.status(200).json({ message: "Deleted video!" })
        }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.post("/favouriteLists/:id/videos", async (req, res, next) => {
    try {
        const favouriteList = await FavouriteListDB.findByPk(req.params.id);
        if (favouriteList) {
            const video = await VideoDB.create(req.body)
            if (video) {
                return res.status(201).json({ message: "Inserted video!" })
            }
        }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.get("/favouriteLists/:favouriteListDescription/:favouriteListDate", async (req, res, next) => {
    try {
        const favouriteLists = await FavouriteListDB.findAll({
            where: {
                FavouriteListDescription: req.params.favouriteListDescription,
                FavouriteListDate: req.params.favouriteListDate
            }
        })
        if (favouriteLists) {
            return res.status(200).json(favouriteLists);
        }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = router;