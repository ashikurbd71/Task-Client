import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const Axoissecure = () => {
    return axiosSecure;
}

export default Axoissecure