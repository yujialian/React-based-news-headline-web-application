import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component {
  render() {
    return (<div>
      <MediaQuery query='(min-device-width: 1224px)'>
        <BrowserRouter>
          <Switch>
            <Route exact="exact" path="/" component={PCIndex}></Route>
          </Switch>
        </BrowserRouter>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MobileIndex}></Route>
          </Switch>
        </BrowserRouter>
      </MediaQuery>
    </div>);
  };
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
