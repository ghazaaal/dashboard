import React, {useEffect, useState} from 'react';
import {Container, Tab} from './style';
import pages from '../../../../../services/routes/pages';
import {useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userClearEditedArticle} from "../../../../../reducers/userSlice";

export default function DesktopTabs() {
    const history = useHistory();
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const [selectedTab, setSelectedTab] = useState(null);

    const tabs = [
        {
            id: 1,
            path: pages.articlesRoot,
            tabName: 'All Articles',
        },
        {
            id: 2,
            path: "/create",
            tabName: 'New Article',
        },
    ];

    useEffect(() => {
        if (!pathname.includes('edit')) dispatch(userClearEditedArticle());
        let index = tabs.findIndex((item) => item.path === pathname);
        index = index === -1 ? 1 : index + 1;
        if (pathname.includes('edit')) setSelectedTab(2);
        else setSelectedTab(index);
    }, [pathname]);

    return (
        <Container selectedTab={selectedTab}>
            {tabs.map((item) => (
                <Tab className="tab" onClick={() => history.push(item.path)} key={item.id}>
                    {item.tabName}
                </Tab>
            ))}
        </Container>
    );
}
