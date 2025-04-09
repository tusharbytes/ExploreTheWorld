import axios from "axios"

export const location = async () => {
    
        const response = await axios.get(`https://www.freetestapi.com/api/v1/weathers`)
       return response.data
   
}