/* Share used by PC and Mobile end. */
import React from 'react';
import {Row, Col, Card} from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
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
class CommonComments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    };
  };
  componentDidMount() { //Get the new content after the page been loaded, more user friendly.
  };

  handleSubmit(e) {
    notification['success']({message:'ReactNews Notice', description:'Comment successful!'})
  };
  addUserCollection() {
    notification['success']({message:'ReactNews Notice', description:'Collection successful!'})
  };
  render() {
    let {getFieldProps} = this.props.form;
    const {comments} = this.state;
    const commentsList = 'No one leave comments,you get the sofa!'
    return (<div class="comment">
      <Row>
        <Col span={24}>
          <div class="comments-list" style={{"paddingTop":"10px"}}>
            {commentsList}
          </div>
          <Form>
            <FormItem style={{"padding-top":"10px"}} label="Your Comments">
              <Input type="textarea" placeholder="Leave a comment!" {...getFieldProps('remark',{initialValue:''})}/>
            </FormItem>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>Submit</Button>
            &nbsp;&nbsp;
            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>Collection</Button>
          </Form>
        </Col>
      </Row>
    </div>);
  }
}
export default CommonComments = Form.create({})(CommonComments);
