import React from 'react';
import {Card} from 'antd';
import {Link, Router, Route, browserHistory} from 'react-router-dom';

export default class PCNewsImageBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    };
  }
  componentWillMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("https://newsapi.org/v2/top-headlines?category="+this.props.type+"&pageSize="+ this.props.count+"&country=us&apiKey=2a926c4f21614df19ba0e0c696b811af",myFetchOptions)
    .then(response => response.json())
    .then(
      json => {
        this.setState({news:json.articles});
        this.setState({totalResults:json.totalResults});
    }
);
};
  render() {
    const styleImage = {
      display: "block",
      width: this.props.imageWidth,
      height: "90px"
    }
    const styleH3 = {
      width: this.props.imageWidth,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
    const {news} = this.state;
    const newsList = Object.keys(news).length
      ? news.map((newsItem, index) => (newsItem && newsItem.author && newsItem.title ?
        <div key={index} class="imageblock">
        <Link to={`details/${this.props.type}/${this.props.count}/${index}`} target="_blank">
          <div class="custom-image">
            <img alt="" style={styleImage} src={newsItem.urlToImage}/>
          </div>
          <div class="custom-card">
            <h3 style={styleH3}>{newsItem.title}</h3>
            <p style={styleH3}>{newsItem.author}</p>
          </div>
        </Link>
      </div>:''))
      : 'No news been loaded currently.'
      return (<div class="topNewsList">
        <Card title={this.props.cardTitle} bordered={true} style={{
            width: this.props.width
          }}>
          {newsList}
        </Card>
      </div>);
    };
}
