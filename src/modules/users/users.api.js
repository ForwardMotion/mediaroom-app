import axios from 'axios'

const API_PATH = process.env.VUE_APP_USERS_API_PATH;

class api {
    async get(uri) {
        return await axios.get(API_PATH + uri, {withCredentials: true});
    }
    async post(uri, data) {
        return await axios.post(API_PATH + uri, data, {withCredentials: true});
    }
    async put(uri, data) {
        return await axios.put(API_PATH + uri, data, {withCredentials: true});
    }
    async delete(uri, data) {
        return await axios.delete(API_PATH + uri, {withCredentials: true});
    }
}

export default new api()
