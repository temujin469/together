import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHook';
import { handleShowLogin } from '../../redux/slices/appSlice';
import { professions } from '../../utils/data'
import classNames from 'classnames'


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}





const SidebarMenu: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['']);
  const dispatch = useAppDispatch();

  const items:MenuItem[] = [
    getItem("Ажил олох","sub1",null,professions.map(pro=>(
      getItem(pro.name,pro.slug)
    ))),
    getItem("Мэргэжилтэн олох","sub2",null,professions.map(pro=>(
      getItem(pro.name,pro.slug)
    ))),
    getItem("Заавар","link1"),
    getItem("Үнэ ханш","link1"),
    getItem(<button className={classNames('btn select-none')} onClick={()=>dispatch(handleShowLogin(true))}>бүртгүүлэх</button>,"link1")
  ]
  
  // submenu keys of first level
  const rootSubmenuKeys = ["sub1","sub2"];

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey as string) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className='select-none'
      items={items}
      theme={"dark"}
    />
  );
};

export default SidebarMenu;