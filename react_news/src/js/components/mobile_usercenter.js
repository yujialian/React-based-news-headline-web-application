import React from 'react';
import {Row, Col, Card} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Upload,
  Input,
  Button,
  CheckBox,
  Modal,
  notification
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Link, Router, Route, browserHistory} from 'react-router-dom';
export default class MobileUserCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      usercollection: '',
      previewImage: '',
      previewVisible: false
    };
  };
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=' + localStorage.userid, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({usercollection: json});
    });
    document.title = "Welcome! "+ localStorage.userNickName+" - React News | User center";
  };
  render() {
    const props = {
      action: 'http://newsapi.gugujiankong.com/handler.ashx',
      headers: {
        "Access-Control-Allow-Origin": '*'

      },
      listType: 'picture-card',
      defaultFileList: [
        {
          uid: -1,
          name: 'xxx.png',
          state: 'done',
          url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
          thmbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
        }
      ],
      onPreview: (file) => {
        this.setState({previewImage: file.url, previewVisible: true});
      }
    };

    const {usercollection} = this.state; //same as:const usercollection=this.state.usercollection;
    const usercollectionList = usercollection.length
      ? usercollection.map((uc, index) => (<Card key={index} title={uc.uniquekey} extra={<a href = {
          `/details/${uc.uniquekey}`
        } > Details</a>}>
        <p>{uc.Title}</p>
      </Card>))
      : 'No articles been collected, go get some good articles!'
    return (<div>
      <MobileHeader/>
      <Row>
        <Col span={24}>
          <Tabs>
            <TabPane tab="My collections" key="1">
              <div class="comment">
                <Row>
                  <Col span={24}>
                    {usercollectionList}
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="My Comments" key="2"></TabPane>
            <TabPane tab="Headshot Setting" key="3">
              <div class="clearfix">
                <Upload {...props}>
                  <Icon type="plus"/>
                  <div className="ant-upload-text">Upload</div>
                </Upload>
                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="Preview" src={this.state.previewImage}/>
                </Modal>
              </div>
            </TabPane>
          </Tabs>
        </Col>
      </Row>

      <MobileFooter/>
    </div>);
  }
}
