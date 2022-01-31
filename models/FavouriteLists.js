const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize")

const FavouriteLists = sequelize.define("FavouriteLists", {
    FavouriteListID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },

    FavouriteListDescription: {
        type: DataTypes.STRING,
        validate: {
            len:[3,255]
        },
        allowNull: false
    },

    FavouriteListDate: {
        type: DataTypes.DATE,
    }
})

module.exports = FavouriteLists;