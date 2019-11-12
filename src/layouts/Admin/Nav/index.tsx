import React from 'react';
import { Icon } from 'antd';
import Link from 'umi/link';
import { MENU_LIST } from '@/constant/index';
import { IRouteProps } from '@/types/index';

import Styles from './index.less';


// 初始化state
const InitState = {
  logo: "https://share.crofys.cn/wp-content/uploads/2019/07/未标题-1.png",
  navList: MENU_LIST
}
// 声明state类型
type TState = Readonly<typeof InitState>

// 声明prop类型
interface IProp extends IRouteProps {
}


class AsideLayout extends React.Component<IProp, TState>{
  state: TState = InitState

  private _Navs = [
    {
      path: '/site',
      icon: 'home',
      title: 'View site',
    },
    {
      title: 'MANAGE',
      group: [
        {
          path: '/post',
          icon: 'file-text',
          title: 'Post',
        },
        {
          path: '/pages',
          icon: 'profile',
          title: 'Pages',
        },
        {
          path: '/tags',
          icon: 'tags',
          title: 'Tags',
        },
        {
          path: '/category',
          icon: 'folder',
          title: 'Category',
        },
        {
          path: '/staff',
          icon: 'user',
          title: 'Staff',
        }
      ]
    },
    {
      title: 'settings',
      group: [
        {
          path: '/general',
          icon: 'setting',
          title: 'General',
        },
        {
          path: '/design',
          icon: 'ant-design',
          title: 'Design',
        },
        {
          path: '/code-injection',
          icon: 'code',
          title: 'Code injection',
        }
      ]
    }
  ]

  public render() {
    // const { location } = this.props
    const { _Navs } = this
    const { logo } = this.state
    return (
      <nav className={Styles.nav}>
        <header>
          <img className={Styles.logo} src={logo} />
          <div className={Styles.title}>如果</div>
        </header>
        {
          _Navs.map((item, index) => (
            <dl key={index} >
              {
                item.title && (<dt>
                  {item.title}
                </dt>)
              }
              {item.group ?
                (item.group.map(k => (
                  <dd key={k.title}>
                    <Link to={k.path}>
                      <Icon type={k.icon} />
                      <span>{k.title}</span>
                    </Link>
                  </dd>
                ))) :
                (
                  <dd>
                    <Link to={item.path}>
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </Link>
                  </dd>
                )
              }
            </dl>
          ))
        }

      </nav>
    );
  }
}


export default AsideLayout

