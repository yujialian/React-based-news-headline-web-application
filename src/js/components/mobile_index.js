import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs,Carousel} from 'antd';
import MobileList from './mobile_news_api';
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
          <MobileList count={10} type="general"/>
        </TabPane>
        <TabPane tab="Business" key="2">
          <MobileList count={10} type="business"/>
        </TabPane>
        <TabPane tab="Sports" key="3">
          <MobileList count={10} type="sports"/>
        </TabPane>
        <TabPane tab="Technology" key="4">
          <MobileList count={10} type="technology"/>
        </TabPane>
        <TabPane tab="Entertainment" key="5">
          <MobileList count={10} type="entertainment"/>
        </TabPane>
      </Tabs>
      <MobileFooter></MobileFooter>
    </div>);
  };
}
