/*
 * @Description: 频道分析模块接口定义
 * @Author: 齐兵
 * @Date: 2019-11-05 15:33:56
 * @LastEditTime: 2019-11-07 18:37:53
 * @LastEditors: 刘玉生
 */
import { IResponse } from '@/types'
import { IDefultParams, IChannelInfo, IPresentTrend} from './types';

import Utils from '../utils';
import Fetch from '../request';
const API_HOST = process.env.API_HOST;

//初始化接口
export const getDefultParams = (params: IDefultParams): Promise<IResponse> => {
  return Fetch.get(`${API_HOST}/channel/get-defult-parameter/json?`, {
    params,
  });
};

//频道概况
export const getChannelInfo = (params: IChannelInfo): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/performance-overview/${cityGroup}/${date}/${channel}/json?`, {
    params: Utils.params(_params),
  })
}

//当日走势
export const getPresentTrend = (params: IPresentTrend ): Promise<IResponse> => {
  let { cityGroup, ..._params} = params
  return Fetch.get(`${API_HOST}/channel/performance-trend/${cityGroup}/json?`, {
    params: Utils.params(_params),
  })
}

// 节目一览
export const getProgramList = (params: IPresentTrend ): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/program-summary/${cityGroup}/${date}/${channel}/json?`, {
    params: Utils.params(_params),
  })
}
// Author: 刘玉生
// 频道分析-流动分析-流动概况
export const getInOutOverview = (params: IPresentTrend ): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/in-out-overview/${date}/${cityGroup}/${channel}/json?`, {
    params: Utils.params(_params),
  })
}

// 频道分析-流动分析-流动详情
export const getInOutDetails = (params: IPresentTrend ): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/in-out-details/${date}/${cityGroup}/${channel}/json?`, {
    params: Utils.params(_params),
  })
}

// 频道分析-流动分析-流动趋势
export const getInOutTrend = (params: IPresentTrend ): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/in-out-trend/${cityGroup}/${date}/json?`, {
    params: Utils.params(_params),
  })
}


// 频道分析-当日分析-流动分析-流动趋势-单分钟详情
export const getInOutMinute = (params: IPresentTrend ): Promise<IResponse> => {
  let { cityGroup, date, channel, ..._params } = params
  return Fetch.get(`${API_HOST}/channel/in-out-minute/${cityGroup}/json?`, {
    params: Utils.params(_params),
  })
}
