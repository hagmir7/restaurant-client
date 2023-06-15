import axios from 'axios';

const token = localStorage.getItem('token') ? localStorage.getItem('token').replace(/"/g, '') : null;

export default axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});