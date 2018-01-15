import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2a926c4f21614df19ba0e0c696b811af');
export default class PCNewsBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      news: '',
      totalResults:0
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
    const style_title = {
      width: "415px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };
    const {news} = this.state;
    const newsList = Object.keys(news).length
      ? news.map((newsItem, index) => (<li key={index}>
        <Link to={`details/${this.props.type}/${this.props.count}/${index}`} target="_blank">
          <div style={style_title}>
            {newsItem.title}
          </div>
        </Link>
      </li>))
      : 'No news been loaded currently.'
    return (<div class="topNewsList">
      <Card>
        <ul>
          {newsList}
        </ul>
      </Card>
    </div>);
  };
}
