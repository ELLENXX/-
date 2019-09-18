import React,{Component} from 'react';
import {CommentWapper} from './style';

import Utils from '../../utils/utils';
import {
    Comment, Avatar, Form, Button, List, Input,
  } from 'antd';
  import moment from 'moment';
  
  const TextArea = Input.TextArea;
  
  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length+2} ${'评论'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
  const ExampleComment1 = ({ children }) => (
    <Comment
      actions={[<span>回复</span>]}
     
      avatar={(
        <Avatar
          src='https://ps.ssl.qhimg.com/t01242af397e26d12c7.jpg'
         
        />
      )}
      content={<p>请问有哪些实验室怎么样啊？</p>}
    >
      {children}
    </Comment>
  );
  const ExampleComment2 = ({ children }) => (
    <Comment
      actions={[<span>回复</span>]}
     
      avatar={(
        <Avatar
          src='http://homepage.swust.edu.cn/teacher/manage/uploadimg/1548657536.jpg'
         
        />
      )}
      content={<p>可以在这里提问哦</p>}
    >
      {children}
    </Comment>
  );
  const ExampleComment3 = ({ children }) => (
    <Comment
      actions={[<span>回复</span>]}
     
      avatar={(
        <Avatar
          src='https://ps.ssl.qhimg.com/t01242af397e26d12c7.jpg'
         
        />
      )}
      content={<p>大家好</p>}
    >
      {children}
    </Comment>
  );

  const ExampleCommentc = ({ children }) => (
    <Comment
      actions={[<span>回复</span>]}
     
      avatar={(
        <Avatar
          src='http://homepage.swust.edu.cn/teacher/manage/uploadimg/1548657536.jpg'
         
        />
      )}
      content={<p>上面有简介</p>}
    >
      {children}
    </Comment>
  );
  const Editor = ({
    onChange, onSubmit, submitting, value,
  }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} placeholder="快来发表自己对的意见或建议吧~~" />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          提交
        </Button>
      </Form.Item>
    </div>
  );
class Comments extends Component{
    state = {
        comments: [
       
      
      ],
        submitting: false,
        value: '',
      }
    componentWillMount(){
      
    }
      handleSubmit = () => {
        if (!this.state.value) {
          return;
        }
    
        this.setState({
          submitting: true,
        });
    
        setTimeout(() => {
          this.setState({
            submitting: false,
            value: '',
            comments: [
              {
                author: Utils.getCookie('useruser'),
                avatar: Utils.getCookie('userpic'),
                content: <p>{this.state.value}</p>,
                datetime: moment().fromNow(),
              },
              ...this.state.comments,
            ],
          });
        }, 1000);

        //
      }
    
      handleChange = (e) => {
        this.setState({
          value: e.target.value,
        });
      }
    render(){
        const { comments, submitting, value } = this.state;
        return (
            <CommentWapper>
              {comments.length > 0 && <CommentList comments={comments} />}
              <ExampleComment3 />
              <ExampleComment2 />
                <ExampleComment1>
                  <div style={{background:'#C6D8E3',height:'80px',paddingLeft:'10px'}}>
      <ExampleCommentc  />
              </div>
    </ExampleComment1>
              <Comment
                avatar={(
                  <Avatar
                    src={Utils.getCookie('userpic')}
                    alt="H"
                  />
                )}
                content={(
                  <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                )}
              />
            
            </CommentWapper>
            
          );
    }
} 
export default Comments;