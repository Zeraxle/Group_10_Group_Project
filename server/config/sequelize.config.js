
import {Sequelize} from "sequelize"
// Sequelize with capital S bc its a class


export const sequilize = new Sequelize(
    'PizzaPeteDB',// database,
    'root', // db User
    'Samosho10',// db password 
    {
        host : '127.0.0.1',
        dialect : 'mysql',
        port : 3306
    }

)


// IMPORTING dotenv 
import dotenv from "dotenv"
// DOTENV LOADS OUR ENVIRONMENT VARIABLES FROM OUR .env file

dotenv.config()

export const dbConnect = () =>{
    sequilize.authenticate()
    .then(console.log("DB Connected"))
    .catch(error => console.log(`DB connection failed`, error))

}