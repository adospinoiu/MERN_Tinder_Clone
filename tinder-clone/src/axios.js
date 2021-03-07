import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mern-tinder-clone-backend-ad.herokuapp.com/',
})

export default instance;