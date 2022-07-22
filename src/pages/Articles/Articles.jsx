import React, {useCallback, useEffect, useRef, useState} from "react";
import Pagination from "react-js-pagination";
import ArticlesList from "./components/ArticlesList";
import {getArticlesByOffset} from "../../services/api/articles";
import {articlesApiToDataTransformer} from "../../services/transformer/table.transformer";
import {Container, PaginationWrapper, TableWrapper} from "./style";
import {useHistory} from "react-router-dom";
import ComponentTable from "../../components/ComponentTable/ComponentTable";
import ArticlesTableHeader from "./components/ArticlesTable/ArticlesTableHeader/ArticlesTableHeader";
import ArticlesTableRows from "./components/ArticlesTableRows/ArticlesTableRows";
import {PageTitle} from "./components/ArticlesList/style";

export default function Articles() {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [lastPage, setLastPage] = useState(null);
    const tableFreeSpaceRef = useRef('');


    const setArticles = useCallback(async () => {
        const articles = await getArticlesByOffset(10 * (pageNo - 1), 10);
        const nextArticles = await getArticlesByOffset(10 * (pageNo), 10);
        setData(articlesApiToDataTransformer(articles, pageNo));
        if (nextArticles.articlesCount > 0) {
            setLastPage((pageNo + 1) * 10)
        } else {
            setLastPage(pageNo * 10)
        }
    }, [pageNo]);


    const handlePageChange = async (e) => {
        await setPageNo(e);
        history.push(`/articles/${e}`)
    };


    useEffect(() => {
        setArticles();
    }, [setArticles, pageNo]);

    return (
        <Container>
            <PageTitle>
                All Posts
            </PageTitle>

            <TableWrapper>
                <ComponentTable
                    Header={ArticlesTableHeader}
                    Rows={ArticlesTableRows}
                    articles={data.items}
                    setArticles={setArticles}
                />
                <div ref={tableFreeSpaceRef}/>
            </TableWrapper>

            <PaginationWrapper isVisible={Math.ceil(lastPage / 10) >= 2}>
                <Pagination
                    activePage={pageNo}
                    itemsCountPerPage={10}
                    totalItemsCount={lastPage}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                />
            </PaginationWrapper>
        </Container>


    );
};


