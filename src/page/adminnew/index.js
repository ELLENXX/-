import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NewBox,BoxName,BoxContent} from './style';
import {NavLink} from 'react-router-dom';
import {Card,List, Button, Row,Col} from 'antd';
import reqwest from 'reqwest';


class AdminNews extends Component{
   
    
	render(){
      
      return(
        <Card title="消息审核">
        <NewBox>
          <BoxName>
           1111111111
          </BoxName>
          <BoxContent>
              <Row>
                <Col span={22}>
                aefsgtyju
                </Col>
                <Col span={2}>
                <Button>撤销</Button>
                </Col>
              </Row>
              </BoxContent>
        </NewBox>
        <NewBox>
          <BoxName>
           1111111111
          </BoxName>
          <BoxContent>
              24rgebgfhrt
              </BoxContent>
        </NewBox>
        <NewBox>
          <BoxName>
           1111111111
          </BoxName>
          <BoxContent>
              24rgebgfhrt
              </BoxContent>
        </NewBox>
    </Card>
      )
	}
}
const mapState=(state)=>({
   
    usermenu:state.getIn(['header','menu'])
});

const mapDispatch=(dispatch)=>({
    
     
    
})

export default connect(mapState,mapDispatch) (AdminNews);