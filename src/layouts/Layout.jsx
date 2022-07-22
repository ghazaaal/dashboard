import React, {useEffect, useMemo} from 'react';
import pages from "../services/routes/pages";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {setHeaderAuthToken} from "../services/axios";


export default function Layout({Component, isPrivate, children}) {
    const history = useHistory();
    const {token} = useSelector((state) => state.user);

    useMemo(() => {
        setHeaderAuthToken();
    }, [token]);


    useEffect(() => {
        if (isPrivate && !token) {
            history.replace(pages.login);
        } else if (!isPrivate && token) {
            history.push(pages.articlesRoot);
        }
    }, [token]);


    return <Component>{children}</Component>;
}
