import axiosInstance from "../axios";
import {toast} from "react-toastify";

export const getArticlesByOffset = async (offset, limit=10) => {
    try {
        const response =  await axiosInstance.get(
            `/articles/?limit=${limit}&offset=${offset}`
        );
        if (response.status >= 200 && response.status < 300 && response.data) {
            return response.data;
        }
        return Promise.reject();
    } catch (e) {
        toast.error('Error');
        return Promise.reject(e);
    }
};

export const createArticle = async (createdData) => {
    try {
        const response = await axiosInstance.post('/articles', {
            article:createdData
        })
        if (response.status >= 200 && response.status < 300 && response.data) {
            return response.data;
        }
        return Promise.reject();
    } catch (e) {
        return Promise.reject(e);
    }
};

export const updateArticle = async (updatedData,slug) => {
    try {
        const response = await axiosInstance.put(`/articles/${slug}`, {
            article:updatedData
        })
        if (response.status >= 200 && response.status < 300 && response.data) {
            return response.data;
        }
        return Promise.reject();
    } catch (e) {
        return Promise.reject(e);
    }
};

export const deleteArticle = async (slug) => {
    try {
        const response = await axiosInstance.delete(`/articles/${slug}`)
        console.log(response)
        if (response.status >= 200 && response.status < 300 && response.data) {
            return response.data;
        }
        return Promise.reject();
    } catch (e) {
        toast.error('Error');
        return Promise.reject(e);
    }
};