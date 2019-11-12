/*
 * @Description: 常量配置文件
 * @Author: 徐长剑
 * @Date: 2019-10-28 18:37:13
 * @LastEditTime: 2019-11-08 17:35:35
 * @LastEditors: 齐兵
 */

//
export const MENU_LIST: any[] = [
  {
    name: 'posts',
    icon: 'home',
    key: 'home',
    link: '/home/channelRank',
  },
  {
    name: '频道分析',
    icon: 'play-square',
    key: 'channelAnalysis',
    childern: [
      {
        name: '当日分析',
        key: 'channelAnalysis-dayAnalysis',
        link: '/channelAnalysis/dayAnalysis/performanceAnalysis',
      },
      {
        name: '收视盘点',
        key: 'channelAnalysis-viewingInventory',
        link: '/channelAnalysis/viewingInventory',
      },
    ],
  },
  {
    name: '节目分析',
    icon: 'eye',
    key: 'programAnalysis',
    childern: [
      {
        name: '当日分析',
        key: 'programAnalysis-dayAnalysis',
        link: '/programAnalysis/dayAnalysis/performanceAnalysis',
      },
      {
        name: '收视盘点',
        key: 'programAnalysis-  viewingInventory',
        link: '/programAnalysis/viewingInventory',
      },
    ],
  },
];

export const NAV_LIST = {
  首页: [
    {
      name: '频道排行',
      link: 'channelRank',
      tips: '展示各直播频道，单天或多天的直播在线率或市场份额排名',
    },
    {
      name: '节目排行',
      link: 'programRank',
      tips: '展示各直播节目，单天的直播在线率或市场份额排名',
    },
  ],
  '频道分析-当日分析': [
    {
      name: '表现分析',
      link: 'performanceAnalysis',
      tips: '展示指定频道，单天的频道基本数据概况、分钟数据趋势以及播出的节目表现一览',
    },
    {
      name: '竞争分析',
      link: 'competitiveAnalysis',
      tips: '展示各直播频道，单天的多指标（直播在线率、市场份额、到达率、忠诚度）排名及变化趋势',
    },
    {
      name: '流动分析',
      link: 'flowAnalysis',
      tips: '展示指定频道，单天的观众流动概况、观众时段流动详情以及分钟观众流动数据趋势',
    },
  ],
  '频道分析-收视盘点': [
    {
      name: '表现分析',
      link: 'viewingInventory',
      tips: '展示指定频道，多天的整体数据表现及分天收数据趋势',
    },
  ],
  '节目分析-当日分析': [
    {
      name: '表现分析',
      link: 'performanceAnalysis',
      tips: '展示指定频道播出的特定节目，单天的基本数据概况、分钟数据趋势以及播出的节目表现一览',
    },
    {
      name: '竞争分析',
      link: 'competitiveAnalysis',
      tips: '展示各频道播出的节目，单天的多指标（直播在线率、市场份额、到达率、忠诚度）排名',
    },
    {
      name: '流动分析',
      link: 'flowAnalysis',
      tips:
        '展示指定频道播出的特定节目，单天的观众流动概况、观众时段流动详情以及分钟观众流动数据趋势',
    },
  ],
  '节目分析-收视盘点': [
    {
      name: '表现分析',
      link: 'viewingInventory',
      tips: '展示指定频道播出的特定节目，多天的整体数据表现及分天收数据趋势',
    },
  ],
};

export const HEADLINE_LIST = {
  '频道概况': '展示频道基础数据，含直播在线率、市场份额、到达率、忠诚度、贡献率及排名情况',
  '当日走势': '展示频道分分钟的直播在线率或市场份额趋势数据',
  '节目一览': '展示频道在特定时段内所播出节目的收视一览，含直播在线率、市场份额、同时段排名、到达率、忠诚度、贡献率'
}

export const WEEKS_OPTION = [{
  value: 'null',
  label: '全选'
}, {
  value: 'mon',
  label: '星期一'
}, {
  value: 'tue',
  label: '星期二'
}, {
  value: 'wed',
  label: '星期三'
}, {
  value: 'thu',
  label: '星期四'
}, {
  value: 'fri',
  label: '星期五'
}, {
  value: 'sat',
  label: '星期六'
}, {
  value: 'sun',
  label: '星期日'
}]

export const CITY_OPTION = [{
  value: 'all',
  label: '全国'
}, {
  value: '55c',
  label: '55城市'
}]

export const CHANNEL_OPTION = [{
  value: 'all',
  label: '全部频道'
}, {
  value: 'cctv',
  label: '央视频道'
}, {
  value: 'tv',
  label: '卫视频道'
}]

export const PROGRAM_OPTION = [{
  value: 'all',
  label: '全部'
}, {
  value: 'dianshiju',
  label: '电视剧'
}, {
  value: 'zongyi',
  label: '综艺'
}, {
  value: 'dianying',
  label: '电影'
}, {
  value: 'shaoer',
  label: '少儿'
}, {
  value: 'kejiao',
  label: '科教'
}, {
  value: 'tiyu',
  label: '体育'
}, {
  value: 'shenghuo',
  label: '生活'
}]

export const PART_TIME_OPTION =[{
  value: '06:00:00-26:00:00',
  label: '全天时段(06:00-26:00)'
}, {
  value: '18:00:00-24:00:00',
  label: '晚间时段(18:00-24:00)'
}, {
  value: '19:30:00-24:00:00',
  label: '核心时段(19:30-24:00)'
}, {
  value: '06:00:00-18:00:00',
  label: '白天时段(06:00-18:00)'
}, {
  value: '09:00:00-12:00:00',
  label: '上午时段(09:00-12:00)'
}, {
  value: '12:00:00-14:00:00',
  label: '午间时段(12:00-14:00)'
}, {
  value: '14:00:00-17:00:00',
  label: '下午时段(14:00-17:00)'
}, {
  value: '17:00:00-19:00:00',
  label: '傍晚时段(17:00-19:00)'
}, {
  value: '19:00:00-19:30:00',
  label: '联播时段(19:00-19:30)'
}, {
  value: '19:30:00-20:00:00',
  label: '730时段(19:30-20:00)'
}, {
  value: '19:30:00-22:00:00',
  label: '黄金时段(19:30-22:00)'
}, {
  value: '22:00:00-24:00:00',
  label: '次黄时段(22:00-24:00)'
}, {
  value: 'diy',
  label: '自定义'
}]

export const SAMPLE_NAME = [{
  value: 'defult',
  label: '行业全量'
}, {
  value: 'puber_person',
  label: '新生代'
}, {
  value: 'agedness_person',
  label: '银发逸族'
}, {
  value: 'diy',
  label: '自定义'
}]
