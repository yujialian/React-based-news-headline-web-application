import React from 'react';
import {Row, Col} from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "news",
      modalVisible: false, //wether modal will showup or not
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userId: 0
    }
  }
  setModalVisible(value) {
    this.setState({modalVisible: value});
  };

  handleClick(e) {
    if (e.key = "register") {
      this.setState({current: 'register'});
      this.setModalVisible(true);
    } else {
      this.setState({current: e.key})
    }
  };
  handleSubmit(e) {
    //Page going to submit data to the API
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formData=this.props.form.getFieldsValue();
    console.log(formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      this.setState({userNickName:json.NickUserName, userId:json.UserId});
    });
    message.success("You request is been processed!");
    this.setModalVisible(false);
  }
  render() {
    let {getFieldProps} = this.props.form;

    {/* Define User info and login logout */}
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" class="register">
          <Button type="primary" htmltype="button">{this.state.userNickName}</Button>
          &nbsp;&nbsp;
          <Link target="_blank">
            <Button type="dashed" htmlType="button">Profile</Button>
          </Link>
          &nbsp;&nbsp;
          <Button type="ghost" htmlType="button">Logout</Button>
        </Menu.Item>
      : <Menu.Item key="register" class="register">
        <Icon type="appstore"/>Register/Login
      </Menu.Item>;
    {/*End of user info defination.*/}

    return (<header>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
          <a href="/" class="logo">
            <img src="./src/images/logo.png" alt="logo"></img>
            <span>ReactNews</span>
          </a>
        </Col>
        <Col span={16}>
          <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
            <Menu.Item key="news">
              <Icon type="appstore"/>News
            </Menu.Item>
            <Menu.Item key="finance">
              <Icon type="appstore"/>Finance
            </Menu.Item>
            <Menu.Item key="sports">
              <Icon type="appstore"/>Sports
            </Menu.Item>
            <Menu.Item key="lifestyle">
              <Icon type="appstore"/>Lifestyle
            </Menu.Item>
            <Menu.Item key="business">
              <Icon type="appstore"/>Business
            </Menu.Item>
            <Menu.Item key="science">
              <Icon type="appstore"/>Science
            </Menu.Item>
            {userShow}
          </Menu>
{/* Register pop-box.*/}
          <Modal title="User Center" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText = "Close">
            <Tabs type="card">
              <TabPane tab="Register" key="2">
                <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                  <FormItem label="Account">
                    <Input placeholder="Please input your account." {...getFieldProps('r_userName')}/>
                  </FormItem>
                  <FormItem label="Password">
                    <Input type="password" placeholder="Please input setup password." {...getFieldProps('r_password')}/>
                  </FormItem>
                  <FormItem label="Re-enter password">
                    <Input type="password" placeholder="Please input re-enter password." {...getFieldProps('r_confirmPassword')}/>
                  </FormItem>
                  <Button type="primary" htmlType="submit">Register</Button>
                </Form>
              </TabPane>
            </Tabs>
          </Modal>
{/*End of register pop-box.*/}
        </Col>
        <Col span={2}></Col>
      </Row>
    </header>
  );
  };
}
export default PCHeader = Form.create({})(PCHeader);
