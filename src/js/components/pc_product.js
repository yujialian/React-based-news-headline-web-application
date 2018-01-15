import React from 'react';

export default class PCProduct extends React.Component {
    render() {
        return (
            <div className="area-sub" style={{
        overflow: 'visible'
      }}>
        {/* product.html start */}
        <div id="layout-product" className="m-box ui-style-gradient mb12">
          <div
            id="js_changeView"
            className="box-bd clearfix"
            data-module-name="n_product">
            <div
              className="productlinks clearfix"
              style={{
              overflow: 'visible'
            }}>
              <div className="productlinks-item item-mail">
                <a href="https://www.google.com/gmail/">Google Gmail</a>
                <a href="https://login.microsoftonline.com/">Microsoft Mail</a>
                <a href="https://www.icloud.com/">Apple mail</a>
                <a href="https://mail.yahoo.com/" className="last">Yahoo mail</a>
              </div>
              <div className="productlinks-item item-game item-recommend">
                <a href="http://us.cnn.com/">CNN</a>
                <a href="http://nytimes.com/">The New York Times</a>
                <a href="http://huffingtonpost.com/">The Huffington Post</a>
                <a href="http://foxnews.com/">Fox News</a>
                <a href="http://yahoo.com/news/">Yahoo News</a>
              </div>
              <div className="productlinks-item item-sns">
                <a
                  href="http://instagram.com/"
                  className="pr0">INSTAGRAM</a>
                <a
                  href="http://www.facebook.com/"
                  style={{
                  fontFamily: 'Arial'
                }}>FACEBOOK</a>
                <a href="https://www.blogger.com/" className="pr0">BLOG</a>
                <a href="https://www.snapchat.com/" className="pr0">Snapchat</a>
                <a href="https://hangouts.google.com/" className="pr0">Google Hangouts</a>
                <a href="https://www.spotify.com/" className="pr0">Spotify</a>
              </div>
              <div className="productlinks-item item-recommend">
                <a href="https://www.coursera.org/">Coursera</a>
                <a
                  href="https://www.udemy.com/">Udemy</a>
                <a
                  href="https://www.udacity.com/"
                  className="last">Udacity</a>
              </div>
              <div className="productlinks-item item-sns">
                <a
                  href="https://www.youtube.com/"
                  className="pr0">YouTube</a>
                <a href="https://www.netflix.com/" className="pr0">Netflix</a>
                <a href="https://tantanapp.com/en/" className="pr0">Tantan</a>
                <a href="https://tinder.com/" className="pr0">Tinder</a>
              </div>
              <div className="productlinks-item item-recommend">
                <a href="http://amazon.com">Amazon</a>
                <a
                  href="http://6pm.com">6pm</a>
                <a href="https://www.ebay.com/" className="pr0">Ebay</a>
                <a href="https://www.craigslist.org/" className="pr0">Craigslist</a>
                <a href="https://www.zillow.com/" className="last">Zillow</a>
                <a
                  href="https://www.yelp.com/"
                  className="pr2">Yelp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
