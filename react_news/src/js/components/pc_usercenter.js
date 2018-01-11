import React from 'react';
import {Row, Col, Card} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Upload,
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
export default class PCUserCenter extends React.Component {

  constructor() {
    super();
    this.state = {
      usercollection: '',
      usercomments:'',
      previewImage:'',
      previewVisible: false
    }
  };
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=' + localStorage.userid, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({usercollection: json});
    });
    document.title = "Welcome! "+ localStorage.userNickName+" - React News | User center";

    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=' + localStorage.userid, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({usercomments: json});
    });
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

    const {usercollection,usercomments} = this.state; //same as:const usercollection=this.state.usercollection;
    const usercollectionList = usercollection.length
      ? usercollection.slice(-5).map((uc, index) => (<Card key={index} title={uc.uniquekey} extra={<a href = {
          `/details/${uc.uniquekey}`
        } > Details</a>}>
        <p>{uc.Title}</p>
      </Card>))
      : 'No articles been collected, go get some good articles!'

      const usercommentslist = usercomments.length
        ? usercomments.slice(-5).map((comment, index) => (
          <Card key={index} title={`You commented article ${comment.uniquekey} on ${comment.datetime}`} extra={<a href = {
            `/details/${comment.uniquekey}`
          } > Details</a>}>
          <p>{comment.Comments}</p>
        </Card>))
        : 'You leave no comments for now, go make a comments!'

    return (<div>
      <PCHeader/>
      <Row>
        <Col span={2}></Col>
        {/* Total 24 columns layout. */}
        <Col span={20}>
          <Tabs>
            <TabPane tab="My recent collections" key="1">
              <div class="comment">
                <Row>
                  <Col span={24}>
                    {usercollectionList}
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="My recent Comments" key="2">
              <div class="comment">
                <Row>
                  <Col span={24}>
                    {usercommentslist}
                  </Col>
                </Row>
              </div>
            </TabPane>
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
        <Col span={2}></Col>
      </Row>

      <PCFooter/>
    </div>);
  }
}
