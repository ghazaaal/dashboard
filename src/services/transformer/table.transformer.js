export const articlesApiToDataTransformer = (input, pageNo) => {
    const data = [];
    const row = (pageNo - 1) * 10;
    input &&
    input?.articles.map((item, index) => {
        data.push({
            row: row + index + 1,
            title: item.title,
            author: item.author.username,
            tags: item.tagList,
            excerpt: item.body.split(' ').slice(0,20).join(' '),
            description: item.description,
            createdAt: item.createdAt,
            slug: item.slug,
        });
        return "finish";
    });
    return { items: data, totalItems: input?.articlesCount };
};