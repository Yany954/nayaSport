import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { useState } from 'react';
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

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Inventario', '1', <PieChartOutlined />),
  getItem('Añadir', '2', <DesktopOutlined />),
  getItem('Editar', '3', <ContainerOutlined />),
  getItem('Borrar', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Perfil', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='admin-nav'>
      <Button type="primary" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        className='admin-menu'
      >
        {items.map(item => (
          <Menu.Item key={item.key}>
            {item.key === '2' ? (
              <Link to="/adminAdd">{item.label}</Link>
            ) : (
              <>{item.label}</>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
