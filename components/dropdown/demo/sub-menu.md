# 多级菜单

- order: 5

传入的菜单里有多个层级。

---

````jsx
import { Menu, Dropdown, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>第一个菜单项</Menu.Item>
    <Menu.Item>第二个菜单项</Menu.Item>
    <SubMenu title="子菜单">
      <Menu.Item>第三个菜单项</Menu.Item>
      <Menu.Item>第四个菜单项</Menu.Item>
    </SubMenu>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      多级菜单 <Icon type="down" />
    </a>
  </Dropdown>
, mountNode);
````
