import axios from "axios";


const PIZZA_INSTANCE = axios.create({
    baseURL : "http://localhost:8000/pizza"
})

// CREATE 

export const createPizza = async PizzaData  =>{
    // eslint-disable-next-line no-useless-catch
    try{
        const res = PIZZA_INSTANCE.post("/", PizzaData)
        return res.data
    }catch(error){throw error}
}