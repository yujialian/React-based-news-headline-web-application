import React from 'react';
import {Row, Col, Card} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal,
  notification
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Link, Router, Route, browserHistory} from 'react-router-dom';
export default class MobileUserCenter extends React.Component {
  render() {
    return (<div>
      <MobileHeader/>
      <Row>
        <Col span={24}>
          <Tabs>
            <TabPane tab="My collections" key="1"></TabPane>
            <TabPane tab="My Comments" key="2"></TabPane>
            <TabPane tab="Headshot Setting" key="3"></TabPane>
          </Tabs>
        </Col>
      </Row>

      <MobileFooter/>
    </div>);
  }
}
