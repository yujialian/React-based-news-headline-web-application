import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
export default class mobileIndex extends React.Component {
  render() {
    return (<div>
      <MobileHeader></MobileHeader>
      <Tabs>
        <TabPane tab="News" key="1"></TabPane>
        <TabPane tab="Finance" key="2"></TabPane>
        <TabPane tab="Sports" key="3"></TabPane>
        <TabPane tab="Lifestyle" key="4"></TabPane>
        <TabPane tab="Business" key="5"></TabPane>
      </Tabs>
      <MobileFooter></MobileFooter>
    </div>);
  };
}
