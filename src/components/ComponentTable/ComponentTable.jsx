import React from 'react';
import {Table} from './style';

export default function ComponentTable({Header, Rows, articles, setArticles}) {
    return (
        <Table>
            <tbody>
            <Header/>
            <Rows articles={articles} setArticles={setArticles}/>
            </tbody>
        </Table>
    );
}
