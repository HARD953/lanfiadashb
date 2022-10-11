import axios from "axios"

const userItem = 'tokendashlanfi';
const tokenUser = localStorage.getItem(userItem)
const userEmail = 'userEmail';
const infoemail = localStorage.getItem(userEmail)

const axiosIntance = axios.create({
    baseURL: 'https://apivulnerable.herokuapp.com/',
    headers: tokenUser ? {'Authorization': 'Bearer '+tokenUser}:{}
   
})

export default axiosIntance

