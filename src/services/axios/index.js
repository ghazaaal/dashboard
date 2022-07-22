import axios from 'axios';
import store from '../../reducers/store';

const {getState} = store;

const axiosInstance = axios.create({
    baseURL: 'https://api.realworld.io/api',
});

export const setHeaderAuthToken = () => {
    const {token} = getState().user;
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`;
    }
};

export default axiosInstance;