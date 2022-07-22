import React from 'react';
import ActionCustomArticle from "../../components/ActionCustomArticle";
import {useSelector} from "react-redux";

export default function ActionArticle() {
    const {editedArticle} = useSelector((state) => state.user);

    return (
        <ActionCustomArticle actionName={Object.keys(editedArticle).length ? 'edit' : 'create'}
                             pageTitle={Object.keys(editedArticle).length ? 'Edit Article' : 'New Article'}
        />
    );
}