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
import {Link} from 'react-router-dom'
class MobileHeader extends React.Component {
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
    if (e.key == "register") {
      this.setState({current: 'register'});
      this.setModalVisible(true);
    } else {
      this.setState({current: e.key})
    }
  };
  componentWillMount() {
    if(localStorage.userid!='') {
      this.setState({hasLogined:true});
      this.setState({userNickName:localStorage.userNickName,userId:localStorage.userid})
    }
  }
  callback(key) {
    if (key == 1) {
      this.setState({action: 'login'});
    } else if (key == 2) {
      this.setState({action: 'register'});
    }
  };
  handleSubmit(e) {
    //Page going to submit data to the API
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
     + "&username="+formData.userName+"&password="+formData.password
     +"&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password
     + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
     .then(response => response.json()).then(json => {
      this.setState({userNickName: json.NickUserName, userId: json.UserId});
      localStorage.userid = json.UserId;
      localStorage.userNickName = json.NickUserName;
    });
    if(this.state.action=="login") {
      this.setState({hasLogined:true});
    }
    message.success("You request is been processed!");
    this.setModalVisible(false);
  }

  login() {
    this.setModalVisible(true);
  };
  logout() {
    localStorage.userid = '';
    localStorage.userNickName = '';
    this.setState({hasLogined:false});
  };
  render() {
    let {getFieldProps} = this.props.form;
    const userShow = this.state.hasLogined
      ? <Link to={`/usercenter`}>
          <Icon type="home" />
        </Link>
      : <Icon type="setting" onClick={this.login.bind(this)}/>

    return (<div id="mobileheader">
      <header>
        <img src="/src/images/logo.png" alt="logo"/>
        <span>ReactNews</span>
        {userShow}
      </header>

      {/* Register pop-box. */}
      <Modal title="User Center" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="Close">
        <Tabs type="card" onChange={this.callback.bind(this)}>

          {/*Login tab.*/}
          <TabPane tab="Login" key="1">
            <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="Account">
                <Input placeholder="Please input your account." {...getFieldProps('userName')}/>
              </FormItem>
              <FormItem label="Password">
                <Input type="password" placeholder="Please input setup password." {...getFieldProps('password')}/>
              </FormItem>
              <Button type="primary" htmlType="submit">Login</Button>
            </Form>
          </TabPane>
          {/*End of login tab.*/}

          {/*Register tab.*/}
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
          {/*End of register tab.*/}

        </Tabs>
      </Modal>
      {/* End of register pop-box. */}
    </div>);
  };
}
export default MobileHeader = Form.create({})(MobileHeader);
