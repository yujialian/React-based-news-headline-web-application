import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs,Carousel} from 'antd';
import MobileList from './mobile_list';
import MobileListPullRefresh from './mobile_list_pull_refresh';
const TabPane = Tabs.TabPane;
export default class mobileIndex extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };

    return (<div>
      <MobileHeader></MobileHeader>
      <Tabs>
        <TabPane tab="News" key="1">
          <div class="carousel">{/* image carousel */}
            <Carousel {...settings}>
              <div><img src="./src/images/carousel_1.jpg"/></div>
              <div><img src="./src/images/carousel_2.jpg"/></div>
              <div><img src="./src/images/carousel_3.jpg"/></div>
              <div><img src="./src/images/carousel_4.jpg"/></div>
            </Carousel>
          </div>
          <MobileList count={20} type="top"/>
        </TabPane>
        <TabPane tab="Finance" key="2">
          <MobileList count={20} type="shehui"/>
        </TabPane>
        <TabPane tab="Sports" key="3">
          <MobileList count={20} type="guonei"/>
        </TabPane>
        <TabPane tab="Lifestyle" key="4">
          <MobileListPullRefresh count={20} type="guoji"/>
        </TabPane>
        <TabPane tab="Business" key="5">
          <MobileList count={20} type="yule"/>
        </TabPane>
      </Tabs>
      <MobileFooter></MobileFooter>
    </div>);
  };
}
