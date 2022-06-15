'use strict';

const Service = require('egg').Service;

class Test extends Service {
  async index() {
    // 连接数据库
    const { app } = this;
    // const data = await app.mysql.select('article');
    // 获取的是一个数组
    const data = await app.mysql.query('select * from article');
    const string = JSON.stringify(data);
    const dataObject = JSON.parse(string);
    return dataObject[0];
  }
}

module.exports = Test;
