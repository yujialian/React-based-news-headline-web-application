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
      previewImage:'',
      previewVisible: false
    }
  };
  render() {
    const props = {
      action: 'http://newsapi.gugujiankong.com/handler.ashx',
      headers: {
        "Access-Control-Allow-Origin":'*'

      },
      listType: 'picture-card',
      defaultFileList:[
        {
          uid:-1,
          name: 'xxx.png',
          state: 'done',
          url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
          thmbUrl:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
        }
      ],
      onPreview: (file)=>{
        this.setState({previewImage:file.url, previewVisible:true});
      }
    }
    return (<div>
      <MobileHeader/>
      <Row>
        <Col span={24}>
          <Tabs>
            <TabPane tab="My collections" key="1"></TabPane>
            <TabPane tab="My Comments" key="2"></TabPane>
            <TabPane tab="Headshot Setting" key="3">
              <div class="clearfix">
                <Upload {...props}>
                  <Icon type="plus"/>
                  <div className="ant-upload-text">Upload</div>
                </Upload>
                <Modal visible={this.state.previewVisible} footer={null}
                  onCancel={this.handleCancel}>
                  <img alt="Preview" src={this.state.previewImage} />
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
