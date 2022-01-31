const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://nuhbweooikmtux:29f6274cd79bb96f8beae83b610f744d3f9563254c825eb54cdae7221e04ae41@ec2-34-242-89-204.eu-west-1.compute.amazonaws.com:5432/d47l5vntl977ul',
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        }
    })

sequelize.sync().then(function () {}).then(
    console.log("Synced.")
);
module.exports = sequelize;