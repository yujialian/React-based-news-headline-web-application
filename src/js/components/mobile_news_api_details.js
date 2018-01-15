import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComments from './common_comments';
export default class MobileNewsDetails extends React.Component {
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
          console.log("this shit not work", this.state.newsItem[0]);
          document.title = this.state.newsItem[this.state.index].title + " - React News | React Driven News Platform";
        });
  };
  render() {
    const {
      newsItem
    } = this.state;
    console.log(newsItem);
    const {
      index
    } = this.state;
    return (<div>
      <MobileHeader></MobileHeader>
      <Row>
        <Col span={24} className="container">
          <div class="articleContainer">
          {
            newsItem[index] && newsItem[index].title !== null ?
            <div>
            <h1 style={{"textAlign":"center"}}>{newsItem[index].title}</h1>
            <div class="content" style={{"paddingTop":"10px"}}>
            <img src={newsItem[index].urlToImage?newsItem[index].urlToImage:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt={newsItem[index].title} style={{"display":"block","margin":"0 auto"}} width="350px"/>
            <p class="description">{newsItem[index].description}</p>
            <div class="button" style={{"paddingTop":"10px","paddingBottom":"10px"}}>
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
      </Row>
      <MobileFooter></MobileFooter>
      <BackTop/>
    </div>);
  };
}
