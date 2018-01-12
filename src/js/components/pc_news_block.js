import React from 'react';
import {Card} from 'antd';
import {Link, Router, Route, browserHistory} from 'react-router-dom';

export default class PCNewsBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    };
  };

  componentWillMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json})); //news contains the news data returned
  };
  render() {
    const style_title = {
      width: "345px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };
    const {news} = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (<li key={index}>
        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
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
