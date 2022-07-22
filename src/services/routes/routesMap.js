import pages from './pages';
import Login from '../../pages/Login';
import Articles from "../../pages/Articles";
import Register from "../../pages/Register";
import ActionArticle from "../../pages/ActionArticle";

export const routeMap = [
    {
        id: 1,
        exact: true,
        isPrivate: false,
        path: pages.login,
        component: Login
    },
    {
        id: 2,
        exact: true,
        isPrivate: false,
        path: pages.register,
        component: Register
    },
    {
        id: 3,
        exact: true,
        isPrivate: true,
        path: pages.articles,
        component: Articles,
    },
    {
        id: 4,
        exact: true,
        isPrivate: true,
        path: pages.newArticle,
        component: ActionArticle,
    },
    {
        id: 5,
        exact: true,
        isPrivate: true,
        path: pages.edit,
        component: ActionArticle,
    },
]

export const redirects = [
    {
        id: 1,
        from: pages.root,
        to: pages.articlesRoot,
        exact: true,
    },
];

export const redirectslogin = [
    {
        id: 1,
        from: pages.root,
        to: pages.login,
        exact: true,
    },
];
