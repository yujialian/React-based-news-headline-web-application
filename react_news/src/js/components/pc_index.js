import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer';
import {BackTop} from 'antd';
export default class PCIndex extends React.Component {
  render() {
    return(
      <div>
        <PCHeader></PCHeader>
        <PCNewsContainer></PCNewsContainer>
        <PCFooter></PCFooter>
        <BackTop/>
      </div>
    );
  };
}
