/*
 * @Description: 配置文件
 * @Author: 徐长剑
 * @Date: 2019-10-25 16:14:13
 * @LastEditTime: 2019-11-12 15:40:25
 * @LastEditors: 徐长剑
 */
import path from 'path';
import { IConfig } from 'umi-types';

const theme = require('./src/theme/light.theme.ts');

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  define: {
    'process.env.API_HOST': 'http://cloud.huan.tv/tv-zone-business-api-test',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/Admin',
      routes: [
        {
          path: '/',
          redirect: '/home',
        },
        {
          path: '/home',
          component: './home',
        },

        {
          component: './404',
        },
      ],
      // Routes: ['./src/middleware/auth.js'],
    },
    {
      component: './404',
    },
  ],
  theme,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  alias: {
    '@': path.join(__dirname, '/src'),
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: '如果',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};

export default config;
