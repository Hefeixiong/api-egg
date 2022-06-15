'use strict';

const Contorller = require('egg').Controller;
const moment = require('moment');

class ArticleContorller extends Contorller {
  async create() {
    const { ctx } = this;
    const createData = {
      ...ctx.request.body,
      createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    console.log(createData);
    const res = await ctx.service.article.create(createData);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '发布文章失败',
      };
    }
  }

  async lists() {
    const { ctx } = this;
    const resData = await ctx.service.article.lists();
    if (resData) {
      ctx.body = {
        status: 200,
        data: resData,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询文章列表失败',
      };
    }
  }

  async detail() {
    const { ctx } = this;
    const resData = await ctx.service.article.detail(ctx.query.id);
    if (resData) {
      ctx.body = {
        status: 200,
        data: resData,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询文章详情失败',
      };
    }
  }

  async delete() {
    const { ctx } = this;
    const res = await ctx.service.article.delete(ctx.query.id);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '删除文章列表失败',
      };
    }
  }
}

module.exports = ArticleContorller;
