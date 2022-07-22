import axiosInstance from "../axios";

export const getAllTags = async () => {
    try {
        const response = await axiosInstance.get('/tags')
        if (response.status >= 200 && response.status < 300 && response.data.tags) {
            return response.data.tags;
        }
        return Promise.reject();
    } catch (e) {
        return Promise.reject(e);
    }
};