const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize")

const Videos = sequelize.define("Videos", {
    VideoID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },

    FavouriteListID: {
        type: DataTypes.INTEGER,
        references: { model: 'FavouriteLists', key: 'FavouriteListID'},
        allowNull: true
    },

    VideoDescription: {
        type: DataTypes.STRING,
        validate: {
            len:[5,255]
        },
        allowNull: false
    },

    VideoTitle: {
        type: DataTypes.STRING,
        validate: {
            len:[5,255]
        },
        allowNull: false
    },

    VideoUrl: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        allowNull: false
    }, 
})

module.exports = Videos;