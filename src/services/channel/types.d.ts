/*
 * @Description: 频道分析模块接口定义
 * @Author: 齐兵
 * @Date: 2019-11-05 15:33:56
 * @LastEditTime: 2019-11-07 10:09:01
 * @LastEditors: 徐长剑
 */

 //初始化接口
export interface IDefultParams {
  date: string // 当天日期
 }

 // 频道概况
 export interface IChannelInfo {
  sample_name: string; // 样本名（目前默认"defult"大屏新生代人群为puber_person银发逸族人群为agedness_person)
  time_part: string,  // hh:mm:ss-hh:mm:ss(时段)
  cityGroup: string, // 城市code
  date: string, // 日期 YYYY-MM-DD
  channel: string // 频道code
 }

 //当日走势
 export interface IPresentTrend {
  sample_name: string; // 样本名（目前默认"defult"大屏新生代人群为puber_person银发逸族人群为agedness_person)
  channel: string // 频道code
  date: string, // 日期 YYYY-MM-DD
  time_part: string,  // hh:mm:ss-hh:mm:ss(时段)
  cityGroup: string // 城市code
 }
