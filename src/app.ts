/*
 * @Description: 入口文件
 * @Author: 徐长剑
 * @Date: 2019-10-25 16:14:13
 * @LastEditTime: 2019-11-12 15:02:43
 * @LastEditors: 徐长剑
 */
import Store from 'store';
// import Cookies from 'js-cookie';

export const dva = {
  config: {
    onStateChange: (state: any) => {
      const { global } = state;
      Store.set('TV_ZONE_GLOBAL', global);
    },
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
