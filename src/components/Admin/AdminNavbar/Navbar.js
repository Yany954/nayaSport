import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { pathRoutes } from '../../../routes/PathRoutes';
import '../Admin.css';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type, path) {
  return {
    key,
    icon,
    path,
    children,
    label,
    type,
  };
}

const items = [
  getItem('INVENTARIO', '1', <PieChartOutlined />, '', '', pathRoutes.adminDelete),
  getItem('AÑADIR', '2', <DesktopOutlined />, '', '', pathRoutes.adminAdd),
  getItem('BORRAR', '4', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ], '', pathRoutes.adminDelete),
  getItem('PERFIL', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const Navbar = () => {
  const navigate = useNavigate();
  console.log(navigate)
  
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

 
  function Go(path) {
    console.log(path)
    navigate(path);
  }


  return (
    <div className="admin-nav">
      <Button type="primary" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        className="admin-menu"
       
      >

        {items.map(item => (
          
          <Menu.Item onClick={(e) => Go(item.path)} key={item.key}>
           
            <a href={item.path}   >{item.label}</a>

          </Menu.Item>
        ))}



      </Menu>
    </div>
  );
};

export default Navbar;