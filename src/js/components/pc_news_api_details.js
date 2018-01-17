import React from 'react';
import {
  Row,
  Col,
  BackTop,
  Icon
} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_api_image_block';
import CommonComments from './common_comments';
export default class PCNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: '',
      index: 0
    };
  };
  componentDidMount() { //Get the new content after the page been loaded, more user friendly.
    var myFetchOptions = {
      method: 'GET'
    };
    //console.log(this.props.match.params.type);
    fetch("https://newsapi.org/v2/top-headlines?category=" + this.props.match.params.type + "&pageSize=" + this.props.match.params.count + "&country=us&apiKey=2a926c4f21614df19ba0e0c696b811af", myFetchOptions)
      .then(response => response.json())
      .then(
        json => {
          this.setState({
            newsItem: json.articles
          });
          this.setState({
            index: this.props.match.params.index
          });
          document.title = this.state.newsItem[this.state.index].title + " - React News | React Driven News Platform";
        });
  };
  render() {
    const {
      newsItem
    } = this.state;
    //console.log(newsItem);
    const {
      index
    } = this.state;
    return (<div>
      <PCHeader></PCHeader>
      <Row>
        <Col span={2}></Col>
        <Col span={14} className="container">
          <div class="articleContainer">
          {
            newsItem[index] && newsItem[index].title !== null ?
            <div>
            <h1 style={{"textAlign":"center"}}>{newsItem[index].title}</h1>
            <div class="content" style={{"paddingTop":"10px"}}>
            <img src={newsItem[index].urlToImage?newsItem[index].urlToImage:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt={newsItem[index].title} width="600px"/>
            <p class="description">{newsItem[index].description}</p>
          <div class="button" style={{"paddingTop":"10px","paddingBottom":"20px"}}>
              <h2>Click button to visit: <a href={newsItem[index].url} class="btn">Read detail</a></h2>
            </div>
            </div>
            </div>:
            <p>Content is loading..</p>
          }
          </div>
          <hr/>
        <CommonComments uniquekey={this.props.match.params.index} />
        </Col>
        <Col span={6}>
          <PCNewsImageBlock count={15} type="entertainment" cardTitle="Relate News" imageWidth="112px" />
        </Col>
        <Col span={2}></Col>
      </Row>
      <PCFooter></PCFooter>
      <BackTop/>
    </div>);
  };
}
//width="400px"
