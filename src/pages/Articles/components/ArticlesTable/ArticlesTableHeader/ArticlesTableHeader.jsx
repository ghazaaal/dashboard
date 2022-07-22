import React from 'react';
import {HeadTr} from '../../../../../components/ComponentTable/style';
import {ThArticles} from './style';

export default function ArticlesTableHeader() {

    const columns = [
        {
            id: 1,
            title: '#',
        },
        {
            id: 2,
            title: 'Title',
        },
        {
            id: 3,
            title: 'Author',
        },
        {
            id: 4,
            title: 'Tags',
        },
        {
            id: 5,
            title: 'Excerpt',
        },
        {
            id: 6,
            title: 'created',
        },
    ];

    return (
        <HeadTr>
            {columns.map((col) => (
                <ThArticles key={col.id}>{col.title}</ThArticles>
            ))}
        </HeadTr>
    );
}
