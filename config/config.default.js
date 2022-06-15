/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1655278801405_5574';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    view: {
      maping: {
        '.html': 'ejs',
      },
    },
    mysql: {
      client: {
        host: '47.103.53.54',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'node-server',
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
