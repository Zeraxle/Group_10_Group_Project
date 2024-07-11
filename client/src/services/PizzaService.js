import axios from "axios";



const PIZZA_INSTANCE = axios.create({
    baseURL : "http://localhost:8000/pizza"
})

// CREATE 

export const createPizza = async PizzaData  =>{
    // eslint-disable-next-line no-useless-catch
    try{
        const res = await PIZZA_INSTANCE.post("/", PizzaData)
        return res.data
    }catch(error){throw error}
}




export const findPizzaById = async (id) =>{

    // eslint-disable-next-line no-useless-catch
    try {
        const  res = await PIZZA_INSTANCE.get(`/${id}`)
        return res.data
    }catch(error) {throw error}
}


export const updatePizzaById = async (id) =>{
    // eslint-disable-next-line no-useless-catch
    try {
        const  res = await PIZZA_INSTANCE.post(`/${id}`)
        return res.data
    }catch(error) {throw error}
}


export const deletePizzaById = async (id) =>{
    // eslint-disable-next-line no-useless-catch
    try {
        const  res = await PIZZA_INSTANCE.delete(`/${id}`)
        return res.data
    }catch(error) {throw error}
}