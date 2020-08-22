import { get } from "axios";
const axios = require('axios')
// TODO: ENV VAR
const BASE_URL = "http://localhost:8323";



export const getImageKeys = async () => {
    const url = BASE_URL + '/image-keys';
    const res = await axios.get(url);
    const keys = res.data.keys;
    return keys;
}
