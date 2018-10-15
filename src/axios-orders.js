import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-builder-85f5d.firebaseio.com/"
});

export default instance;