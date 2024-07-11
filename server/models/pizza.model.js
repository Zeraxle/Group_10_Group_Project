import { DataTypes, Sequelize} from "sequelize";
import { sequilize } from "../config/sequelize.config.js";
import User from "./user.model.js";



const Pizza = sequilize.define('pizza', {
    
    userId :{
        type : DataTypes.BIGINT,
        allowNull : false,
        references :{
            model : User,
            key : "id"
        }
    },
    method:{
        type : DataTypes.STRING,
        allowNull: false, 
        validate:{
            len:[2,10]
        } 
    },
    
    size : {
        type : DataTypes.STRING,
        allowNull : false,
        validate :{
            len: [1,5]
        }
    },
    // toppings : {
    //     type: Sequelize.STRING,
    //     allowNull : true,
    //     validate : {
    //         len : [0,255]
    //     }
    // }, 
    crust:{
        type : DataTypes.STRING,
        allowNull: false,
        validate :{
            len : [2,15]
        }
    },

    qty :{
        type : DataTypes.STRING,
        allowNull : false,
        validate :{
            max : 50
        }
    },
    favorite:{
        type : DataTypes.BOOLEAN,
        allowNull : true,
        validate :{
            len:[2,6]
        }
    },
    comments :{
        type: DataTypes.STRING,
        allowNull : true,
        validate :{
            len : [0,255]
        }
    }, 

    createdAt : {
        type: DataTypes.TIME
    },
    
    updatedAt:{
        type : DataTypes.TIME
    },

    },{
        timestamps : true
    })
    
        User.hasMany(Pizza)
    
        Pizza.belongsTo(User,{
            foreignKey: "userId",
            onDelete: 'SET NULL ',
            onUpdate: 'CASCADE;',
        })
        Pizza.sync({alter: true})
            .then(console.log("Pizza Table Created "))
            .catch (error => ("Pizza table creation error : ",  error))
        

export default Pizza




