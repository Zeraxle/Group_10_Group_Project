import axios from "axios"


// SETTING BOOK_INSTANCE = TO THE URL "http://localhost:8000/api"
const USER_INSTANCE = axios.create({
    baseURL : "http://localhost:8000/user"
})

// CREATE
export const createUser = async userData =>{


    // eslint-disable-next-line no-useless-catch
    try {
        const res = await USER_INSTANCE.post('/', userData)
        return res.data
    }catch(error){throw error}
}

// READ 
export const findAllUsers = async () =>{

    // eslint-disable-next-line no-useless-catch
    try {
        const  res = await USER_INSTANCE.get('/')
        return res.data
    }catch(error) {throw error}
}

export const logUserIn = async (userData) =>{

    // eslint-disable-next-line no-useless-catch
    try {
        const  res = await USER_INSTANCE.post('/login', userData)
        return res.data
    }catch(error) {throw error}
}

export const findUserById = async (id) =>{

    // eslint-disable-next-line no-useless-catch
    try {
        const  res = await USER_INSTANCE.get(`/${userData._id}`)
        return res.data
    }catch(error) {throw error}
}


export const getALLUsersPosts = async (userData) =>{

    // eslint-disable-next-line no-useless-catch
    try {
        const  res = await USER_INSTANCE.get(`/userPosts/${userData.id}`)
        return res.data
    }catch(error) {throw error}
}


export const logOutUser = async (id) =>{

    // eslint-disable-next-line no-useless-catch
    try {
        const  res = await USER_INSTANCE.post(`/logout/${id}`)
        return res.data
    }catch(error) {throw error}
}

export const updateById = async (userData) =>{
    
    // eslint-disable-next-line no-useless-catch
    try {
        const  res = await USER_INSTANCE.post(`/update/${userData.id}`, userData)
        return res.data
    }catch(error) {throw error}
}





