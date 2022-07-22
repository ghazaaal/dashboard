import axiosInstance from "../axios";
import {toast} from "react-toastify";
import {userLoggedOut} from "../../reducers/userSlice";
import store from "../../reducers/store";

const {dispatch} = store;

const prepareLoginData = (email, password) => {
    return (
        {
            user:
                {
                    email: email,
                    password: password,
                }
        })

};

const prepareRegisterData = (username, email, password) => {
    return (
        {
            user:
                {
                    email: email,
                    password: password,
                    username: username
                }
        })

};


export const login = async (email, password) => {
    try {
        const loginData = prepareLoginData(email, password);
        const response = await axiosInstance.post('/users/login', loginData)
        if (response.status >= 200 && response.status < 300 && response.data.user.token) {
            return {
                token: response.data.user.token,
                username: response.data.user.username,
            };
        }
        return Promise.reject();
    } catch (e) {
        toast.error(('Login Failed! User name and/or Password is invalid'), {
            onOpen: () => {
                dispatch(userLoggedOut());
            },
        });
        return Promise.reject(e);
    }
};

export const register = async (username, email, password) => {
    try {
        const registerData = prepareRegisterData(username, email, password);
        const response = await axiosInstance.post('/users', registerData);
        if (response.status >= 200 && response.status < 300 && response.data.user.token) {
            toast.success(('Register Done!'));
            return response;
        }
        return Promise.reject();
    } catch (e) {
        toast.error(('Register Failed!'));
        return Promise.reject(e);
    }
};