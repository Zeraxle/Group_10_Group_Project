import Express from "express"
import dotenv from "dotenv"
import cors from "cors"
import postRouter from "./routes/posts.routes.js"
import userRouter from "./routes/user.routes.js"
import { dbConnect } from "./config/sequelize.config.js"


const app = Express()
// SETTING A VARIABLE EQUAL TO TEH EXPRESS METHOD 
// OUR EXPRESS METHOD ALLOWS US TO HANDLE REQUEST FROM THE CLIENT, 
// INTERACT WITH THE DB AND SEND BACK RESPONSES 

// SETS UP EXPRESS WITH JSON DATA AND CORS 
app.use(Express.json(), cors())

app.use("/api", postRouter)

app.use("/user", userRouter)
// WE TELL OUR APP THAT IS CONNECTED TO EXPRESS THAT FOR EACH ROUTE ADD /api to its end 
// AND ALSO USE ALL TEH ROUTES FROM bookRouter

dotenv.config()
const PORT = process.env.PORT
// the config method is called on a dotenv module to parse the .env file
// it extracts the key value pairs and set them as properties on the process.env object 


dbConnect()
// RUNS OUR DATABASE CONNECTION 

app.listen(PORT, ()=>
    console.log(`Listening on port: ${PORT}`)
    )
