import { DataTypes, Sequelize } from "sequelize";
import pkg from 'bcrypt-node';


import useBcrypt from 'sequelize-bcrypt'
// const {useBcrypt}  = Sequelize-Bcrypt;
// import {bcrypt} from 'bcrypt-node';
import { sequilize } from "../config/sequelize.config.js"
// const bcrypt = require('bcrypt')
const User = sequilize.define('user',{
    id :{
        autoIncrement : true,
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true
    },

    firstName :{
        type : DataTypes.STRING,
        allowNull:  false,
        validate : {
            len:[2,25],
        }

    },

    lastName :{
        type : DataTypes.STRING,
        allowNull : false,
        validate:{
            len:[2,25],

        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull : false,
        unique : true,
        validate:{
            isEmail: true,
            len: [8,25]
        }
    },
    address : {
        type: DataTypes.STRING,
        allowNull: false,
        validate :{
            len:[6,50],
        }
    },
    city :{
        type : DataTypes.STRING,
        allowNull : false,
        validate: {
            len:[4,50],

        }
    },
    state : {
        type : DataTypes.STRING,
        allowNull : false,
        validate :{
            len :[4,50],
        }
    },
    password :{
        type : DataTypes.STRING,
        allowNull : false,
        validate :{
            len : [8,50],
        }
    },


    // timestamps: true

})
    const options ={
        field: 'password', // secret field to hash, default: 'password'
        rounds: 12, // used to generate bcrypt salt, default: 12
        compare: 'authenticate', // method used to compare secrets, default: 'authenticate'

    }
    // User.hasMany(Post, {
    //     foreignKey : "userId"
    // })
    // Post.belongsTo(User);


    useBcrypt(User, options)
    


User.sync({alter: true})
    .then(console.log("User table created!!"))
    .catch(error => console.log("User table creation error : ",  error))

export default User
