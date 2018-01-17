import React from 'react';
import {
  Row,
  Col
} from 'antd';
import {
  Tabs,
  Carousel
} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_api';
import PCNewsImageBlock from './pc_news_api_image_block';
import PCProduct from './pc_product'
export default class PCNewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    };
  };
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("https://newsapi.org/v2/top-headlines?category=general&pageSize=7&country=us&apiKey=2a926c4f21614df19ba0e0c696b811af", myFetchOptions)
      .then(response => response.json())
      .then(
        json => {
          this.setState({
            news: json.articles
          });
        }
      );
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    const {news} = this.state;
    var count = 0;
    const imgList = Object.keys(news).length
    ? news.map((newsItem, index) =>(
      console.log(newsItem.url),
      newsItem.urlToImage?
      (<a className="front-image" href={newsItem.url}><img src={newsItem.urlToImage}/></a>):''
    )):<div className="empty">'Loading...'</div>;
    console.log(typeof(imgList));
    console.log(imgList);

    return (<div>
      <Row>
        <Col span={2}></Col>
        <Col span={20} class="container">
          <div class="leftContainer">
            <div class="carousel">{/* image carousel */}
              <Carousel {...settings}>
                {imgList}
              </Carousel>
            </div>
            <PCNewsImageBlock count={9} type="sports" width="400px" cardTitle="Sports" imageWidth="112px"/>
        </div>
          <Tabs class="tabs_news">
            <TabPane tab="News" key="1">
              <PCNewsBlock count={22} type="general" width="90%" bordered="false"/>
            </TabPane>
            <TabPane tab="Business" key="2">
              <PCNewsBlock count={22} type="business" width="90%" bordered="false"/>
            </TabPane>
            <TabPane tab="Sports" key="3">
              <PCNewsBlock count={22} type="sports" width="90%" bordered="false"/>
            </TabPane>
            <TabPane tab="Technology" key="4">
              <PCNewsBlock count={22} type="technology" width="90%" bordered="false"/>
            </TabPane>
          </Tabs>
          <Tabs class="tabs_product">
            <TabPane tab="React Outlink" key="1">
              <PCProduct/>
            </TabPane>
          </Tabs>
          <div>
            <PCNewsImageBlock count={17} type="health" width="100%" cardTitle="Heath and life" imageWidth="132px"/>
          <PCNewsImageBlock count={17} type="science" width="100%" cardTitle="Science" imageWidth="132px"/>
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>);
  }
}
