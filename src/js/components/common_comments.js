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
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({comments: json});
    })
  };

  handleSubmit(e) {
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formdata = this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions)
    .then(response => response.json()).then(json => {
      this.componentDidMount();
    })
  };
  addUserCollection() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey, myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      //Give a global notation if collection is successfully processed.
      notification['success']({message:'ReactNews Notice', description:'Collection successful!'})
    })
  };
  render() {
    let {getFieldProps} = this.props.form;
    const {comments} = this.state;
    const commentsList = comments.length
      ? comments.map((comment, index) => (<Card key={index} title={comment.UserName} extra={<a href="#">Comment Time: {
          comment.datetime
        }
        </a>}>
        <p>{comment.Comments}</p>
      </Card>))
      : 'No one leave comments,you get the sofa!'
    return (<div class="comment">
      <Row>
        <Col span={24}>
          {commentsList.slice(Math.max(commentsList.length - 5, 1))}
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormItem label="Your Comments">
              <Input type="textarea" placeholder="Leave a comment!" {...getFieldProps('remark',{initialValue:''})}/>
            </FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
            &nbsp;&nbsp;
            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>Collection</Button>
          </Form>
        </Col>
      </Row>
    </div>);
  }
}
export default CommonComments = Form.create({})(CommonComments);
