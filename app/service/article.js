'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class ArticleService extends Service {
  async create(params) {
    try {
      const res = await this.app.mysql.insert('article', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async lists() {
    const { app } = this;
    try {
      const res = await app.mysql.select('article');
      const getLists = [ ...res ];
      // eslint-disable-next-line array-callback-return
      getLists.map(item => {
        if (item.createTime) {
          item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss');
          return item;
        }
      });
      return getLists;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async detail(id) {
    if (!id) {
      console.log('查询详情失败：ID=' + id);
      return null;
    }
    const { app } = this;
    try {
      const getDetail = await app.mysql.get('article', { id });
      return getDetail;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    if (!id) {
      console.log('文章删除失败：id=' + id);
      return undefined;
    }

    const { app } = this;
    try {
      const deleteActicle = await app.mysql.delete('article', { id });
      console.log(deleteActicle);
      return deleteActicle;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ArticleService;
