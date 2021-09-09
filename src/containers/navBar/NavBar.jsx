import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="item1">
                <NavLink to="/">
                    Home
                </NavLink>
            </Menu.Item>
            <Menu.Item key="item2">
                <NavLink to="/create">
                    Crear
                </NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default NavBar
