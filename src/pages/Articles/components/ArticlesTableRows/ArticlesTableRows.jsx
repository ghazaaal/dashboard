import React from 'react';
import {TdArticle} from './style';
import {RowTr} from '../../../../components/ComponentTable/style';
import config from "../../../../services/config/config";
import ActionsMenu from "../ActionsMenu";
import {CreatedWrapper} from "../ArticlesList/style";

export default function ArticlesTableRows({articles, setArticles}) {

    return (
        <>
            {articles?.map((item) => {
                return (
                    <RowTr key={item.id}>
                        <TdArticle>{item.row}</TdArticle>
                        <TdArticle>{item.title}</TdArticle>
                        <TdArticle>{item.author}</TdArticle>
                        <TdArticle>{item.tags}</TdArticle>
                        <TdArticle>{item.excerpt}</TdArticle>
                        <TdArticle>
                            <CreatedWrapper>
                                <span>{config.dateToLocal(item.createdAt)}</span>

                                <ActionsMenu record={item} callBackForModal={setArticles}/>
                            </CreatedWrapper>
                        </TdArticle>
                    </RowTr>
                );
            })}
        </>
    );
}
