import React from 'react';
import {Row, Col} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router-dom'
import Tloader from 'react-touch-loader';
export default class MobileList extends React.Component {
  constructor() {
    super();
    this.state = {
      news: '',
      totalResults:0,
      count: 5,
      hasMore: 0,
      initializing: 1,
      refreshedAt: Date.now()
    };
  }
  componentWillMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("https://newsapi.org/v2/top-headlines?category="+this.props.type+"&pageSize="+ this.state.count+"&country=us&apiKey=2a926c4f21614df19ba0e0c696b811af",myFetchOptions)
    .then(response => response.json())
    .then(
      json => {
        this.setState({news:json.articles});
        this.setState({totalResults:json.totalResults});
    }
);
};

  loadMore(resolve) {
    setTimeout(() => {
      var count = this.state.count;
      this.setState({
        count: count + 5
      });

      var myFetchOptions = {
        method: 'GET'
      };
      fetch("https://newsapi.org/v2/top-headlines?category="+this.props.type+"&pageSize="+ this.state.count+"&country=us&apiKey=2a926c4f21614df19ba0e0c696b811af",myFetchOptions)
      .then(response => response.json())
      .then(
        json => {
          this.setState({news:json.articles});
          this.setState({totalResults:json.totalResults});
      }
  );
      this.setState({
        hasMore: count > 0 && count < this.state.totalResults
      });

      resolve();

    }, 2e3);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({hasMore: 1, initializing: 2});
    }, 2e3);
  };


  	render() {
  		var {hasMore,initializing,refreshedAt} = this.state;
  		const {news} = this.state;
  		const newsList = Object.keys(news).length
  			? news.map((newsItem, index) => (
          <section key={index} className="m_article list-item special_section clearfix">
            <Link to={`details/${this.props.type}/${this.props.count}/${index}`}>
              <div className="m_article_img">
                <img src={newsItem.urlToImage?newsItem.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt={newsItem.title} width="93" height="70"/>
              </div>
              <div className="m_article_info">
                <div className="m_article_title">
                  <span>{newsItem.title}</span>
                </div>
                <div className="m_article_desc clearfix">
                  <div className="m_article_desc_l">
                    <span className="m_article_channel">{!newsItem.author||newsItem.author.length > 15 ? this.props.type: newsItem.author}</span>

                    <span className="m_article_time">{newsItem.publishedAt.slice(0,10)}</span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
  			))
  			: 'Load more news...';
  		return (
  			<div>
  				 <Row>
             <Col span={24}>
  					 		<Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
  								{newsList}
  							</Tloader>
             </Col>
           </Row>
  			</div>
  		);
  	};
  }
