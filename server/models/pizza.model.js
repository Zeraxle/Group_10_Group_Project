import { DataTypes, Sequelize} from "sequelize";
import { sequilize } from "../config/sequelize.config";


const Pizza = sequilize.define('pizza', {

    id :{
        autoIncrement:true,
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true
    },

    method :{
        type : DataTypes.STRING,
        allowNull : false
    },

    size :{
        type : DataTypes.STRING,
        allowNull : false
    },

    crust :{
        type : DataTypes.STRING,
        allowNull : false
    },

    quantity :{
        type : DataTypes.NUMBER,
        allowNull: false
    },

    isntructions :{
        type : DataTypes.STRING,
        allowNull: false,
        validate :{
            len : [8,50],
        }
    },

    toppings :{
        type : DataTypes.ARRAY,
        allowNull : false
    },

    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
    },{
    timestamps: true // <--- This enables createdAt and updatedAt fields
})
    
Pizza.sync({alter: true})
    .then(console.log("Pizza table created!!"))
    .catch(error => console.log("Pizza table creation error : ",  error))

export default Pizza