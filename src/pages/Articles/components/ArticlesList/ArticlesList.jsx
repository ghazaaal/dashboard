import React from "react";
import {Col, Row, Table} from "antd";
import {Container, PageTitle, CreatedWrapper, TableContainer} from "./style";
import 'antd/dist/antd.css';
import './style.css'
import config from "../../../../services/config/config";
import ActionsMenu from "../ActionsMenu";

export default function ArticlesList(props) {
    console.log(window.innerWidth < 500)

    const columns = [
        {
            title: '#',
            dataIndex: 'row',
            key: 'row',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
        },
        {
            title: 'Excerpt',
            dataIndex: 'excerpt',
            key: 'excerpt',
        },
        {
            title: 'created',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (index, record) => (
                <CreatedWrapper>
                    <span>{config.dateToLocal(record.createdAt)}</span>

                    <ActionsMenu record={record} callBackForModal={props.setArticles}/>
                </CreatedWrapper>
            ),
        },
    ];

    return (
        <Container>
            <PageTitle>
                All Posts
            </PageTitle>
            <TableContainer>
                <Table
                    loading={props.isLoading}
                    columns={columns}
                    dataSource={props.articles}
                    pagination={{
                        onChange: (nextPage) => props.onPageChange(nextPage),
                        total: props.totalItems,
                        current: props.pageNo,
                        pageSize: 5,
                        showSizeChanger: false,
                    }}
                />
            </TableContainer>

        </Container>
    );
};


