/*
 * @Description: 常用正则
 * @Author: 徐长剑
 * @Date: 2019-11-01 11:37:31
 * @LastEditTime: 2019-11-04 10:13:33
 * @LastEditors: 徐长剑
 */
interface IRegex {
  chineseCharacters: RegExp;  //汉字
  email: RegExp;  //Email地址
  idCard_15: RegExp;  //身份证 15位
  idCard_18: RegExp;  //身份证  18位
  phone: RegExp;  //手机号
}
const Regex: IRegex = {
  chineseCharacters: /^[\u4e00-\u9fa5]{0,}$/,
  email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  idCard_15: /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/,
  idCard_18: /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$/,
  phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/,
};
export default Regex;
