import React from 'react';
import { Menu, Icon, ConfigProvider } from 'antd';
import Link from 'umi/link';
import { MENU_LIST } from '@/constant/index';
import { IRouteProps } from '@/types/index';

import Style from './index.less';
import zhCN from 'antd/es/locale/zh_CN';

const { SubMenu } = Menu;

import NavLayout from './Nav/index'

// 初始化state
const InitState = {
  navList: MENU_LIST
}
// 声明state类型
type TState = Readonly<typeof InitState>

// 声明prop类型
interface IProp extends IRouteProps {
}


class AsideLayout extends React.Component<IProp, TState>{

  state: TState = InitState


  public render() {
    // const { location } = this.props
    // const { navList } = this.state
    return (
      <div className={Style.layout}>
        <NavLayout />
        <main>
          <ConfigProvider locale={zhCN}>
            {this.props.children}
          </ConfigProvider>
        </main>
      </div>
    );
  }
}


export default AsideLayout

