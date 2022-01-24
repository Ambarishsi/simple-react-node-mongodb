import axios_utils from 'axios';

const BASE_URL = ' http://localhost:5000/users/v1';
const GET_USER = 'getall';


//gets all users
export function getAllUsers() {
    return axios_utils.get(BASE_URL + '/'+ GET_USER);
}

