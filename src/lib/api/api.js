import ajax from "./ajax";

// 获取文章列表
export const reqArticleList = () => ajax('/default/article/list', {}, 'GET');
// 根据id获取文章内容
export const reqArticleById = (id) => ajax('/default/article/detail', {id}, 'GET');

