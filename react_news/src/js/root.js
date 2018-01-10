import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';

import MobileIndex from './components/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component {
  render() {
    return (<div>
      <MediaQuery query='(min-device-width: 1224px)'>
        <BrowserRouter>
          <Switch>{/*A router can only have one child element, so we use route to incorporate it*/}
          <Route exact path="/" component={PCIndex}></Route>
          <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>{/*pass the uniquekey to PCNewsDetails as parameter in the path*/}
          </Switch>
        </BrowserRouter>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
          </Switch>
        </BrowserRouter>
      </MediaQuery>
    </div>);
  };
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
