import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Layout from '../../../layouts';
import {redirects, redirectslogin, routeMap} from '../routesMap';
import MainLayout from "../../../layouts/MainLayout";
import {useSelector} from "react-redux";
import AuthLayout from "../../../layouts/AuthLayout";

export default function Router() {
    const {token} = useSelector((state) => state.user);


    return (
        <Layout Component={token ? MainLayout : AuthLayout}>
            <Switch>
                {
                    routeMap.map((item) => (
                        <Route path={item.path} component={item.component} key={item.id}/>
                    ))
                }
            </Switch>
            {token && redirects?.map((item) => (
                <Redirect from={item.from} to={item.to} key={item.id}/>
            ))}
            {!token && redirectslogin?.map((item) => (
                <Redirect from={item.from} to={item.to} key={item.id}/>
            ))}

        </Layout>
    );
}
