'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router方法简单测试
  // get
  router.get('/', controller.home.index);
  router.get('/test', controller.test.index);
  router.get('/test/detail', controller.test.detail);
  router.get('/test/detail0/:id', controller.test.detail0);
  // post
  router.post('/test/create', controller.test.create);
  // put
  router.put('/test/update/:id', controller.test.update);
  // delete
  router.delete('/test/delete/:id', controller.test.delete);

  // 开发文章发布接口
  router.post('/article/create', controller.article.create);// 文章发布
  router.get('/article/lists', controller.article.lists);// 文章列表查询
  router.get('/article/detail', controller.article.detail);// 文章详情查询
  router.get('/article/delete', controller.article.delete);// 文章删除
};
