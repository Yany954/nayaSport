import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  getItem('Inventario', '1', <PieChartOutlined />, '', '', pathRoutes.adminAdd),
  getItem('Añadir', '2', <DesktopOutlined />, '', '', pathRoutes.adminAdd),
  getItem('Editar', '3', <ContainerOutlined />, '', '', pathRoutes.adminUpdate),
  getItem('Borrar', '4', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ], '', pathRoutes.adminDelete),
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
  
  const handleUpdate = () => {
    // Aquí puedes agregar tu código de backend si es necesario
  };

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
        items={items}
        className="admin-menu"
      >
        {items.map(item => (
          <Menu.Item key={item.key}>

            <Link to="/adminAdd">{item.label}</Link>


          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;