import {createSlice} from '@reduxjs/toolkit';

// todo: eslint
/* eslint-disable no-param-reassign */

const initialState = {
    token: localStorage.getItem('token'),
    user: {
        username: localStorage.getItem('username')
    },
    editedArticle: JSON.parse(localStorage.getItem('editedArticle')) ? {
        title: JSON.parse(localStorage.getItem('editedArticle')).title,
        author: JSON.parse(localStorage.getItem('editedArticle')).author,
        excerpt: JSON.parse(localStorage.getItem('editedArticle')).excerpt,
        description: JSON.parse(localStorage.getItem('editedArticle')).description,
        tags: JSON.parse(localStorage.getItem('editedArticle')).tags,
        slug: JSON.parse(localStorage.getItem('editedArticle')).slug,
    } : {
        title: '',
        author: '',
        excerpt: '',
        description: '',
        tags: '',
        slug: ''
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            console.log(action.payload.username)
            if (action.payload.token) localStorage.setItem('token', action.payload.token);
            if (action.payload.username) localStorage.setItem('username', action.payload.username);
            state.token = action.payload.token;
            state.user.username = action.payload.username;
        },
        userLoggedOut: (state) => {
            state.token = null;
            state.user = {};
            state.selectedTab = null;
        },
        userClearEditedArticle: (state) => {
            state.editedArticle = {};
            localStorage.removeItem('editedArticle');
        },
        userEditedArticle: (state, {payload}) => {
            const mappedObject = {
                title: payload.title,
                author: payload.author,
                excerpt: payload.excerpt,
                description: payload.description,
                tags: payload?.tags,
                slug: payload?.slug,
            };
            localStorage.setItem('editedArticle', JSON.stringify(mappedObject))
            Object.assign(state.editedArticle, mappedObject);
        },
    },
});

export const {userLoggedIn, userLoggedOut, userEditedArticle, userClearEditedArticle} =
    userSlice.actions;

export default userSlice.reducer;

// todo: eslint
/* eslint-enable no-param-reassign */
