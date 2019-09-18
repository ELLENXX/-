import React,{Component} from 'react';
import './index.less';
import Carsourel from '../../common/ui/carousel';
import {actionCreators} from '../store';
import {connect} from 'react-redux';
import {Icon, Button, Radio, Checkbox } from 'antd';
import {Redirect} from 'react-router-dom';//重定向
const RadioGroup = Radio.Group;

class Questions extends Component{
     
    componentWillMount(){
        this.props.getquestion();
    }

    state = {
        value: '',
      }

      handleSubmit=()=>{
        var radio=document.getElementsByName("radio");
        var selectvalue=[];   //  selectvalue为radio中选中的值
       for(let i=0;i<radio.length;i++){

              if(radio[i].checked==true) {

               selectvalue.push(radio[i].value);
               break;

             }

      }
      this.props.giveans(this.state.value);
      }
    
      onChange1= (e) => {
        console.log('radio checked', e.target.value);

        this.setState({
          value: this.state.value+e.target.value,
        });
        
      }
  
   onChange=(checkedValues)=> {
        console.log('checked = ', checkedValues);
        this.setState({
          value: this.state.value+checkedValues,
        });
      }
      

    render(){
       if(!this.props.ansed){
        return(
          <div className="que_wapper">
          <Carsourel />
          <div className="que_que">
          {
            
              this.props.questions.map((item)=>{
                if(item.id<3){
                  return <div className="que_item rad-border-shadow">
                      
                  <div className="que_title"><Icon style={{color:"yellow",marginRight:"5px"}} type="star" /><b>{item.question}</b></div>
                       <RadioGroup name="radiogroup" onChange={this.onChange1} >
                       {item.optionA?<div className="que_option"> <Radio  value='A'>A :{item.optionA}</Radio></div>:''}
                    
                      { item.optionB?<div className="que_option"> <Radio value="B">B :{item.optionB}</Radio></div>:''}
                      { item.optionC?<div className="que_option"> <Radio value="C">C :{item.optionC}</Radio></div>:''}
                      { item.optionD?<div className="que_option"> <Radio value="D">D :{item.optionD}</Radio></div>:''}
                       {item.optionE?<div className="que_option"> <Radio value="E">E :{item.optionE}</Radio></div>:''}
                      { item.optionF?<div className="que_option"> <Radio value="F">F :{item.optionF}</Radio></div>:''}
                      </RadioGroup>
                    </div>
                
                }else{
                return <div className="que_item rad-border-shadow">
                 <div className="que_title"><Icon style={{color:"yellow",marginRight:"5px"}} type="star" /><b>{item.question}</b></div>
                  <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>
              
                  {item.optionA?<div className="que_option"><Checkbox value="A">A :{item.optionA}</Checkbox></div>:''}
                    
                    { item.optionB?<div className="que_option"> <Checkbox value="B">B :{item.optionB}</Checkbox></div>:''}
                    { item.optionC?<div className="que_option"> <Checkbox value="C">C :{item.optionC}</Checkbox></div>:''}
                    { item.optionD?<div className="que_option"> <Checkbox value="D">D :{item.optionD}</Checkbox></div>:''}
                     {item.optionE?<div className="que_option">  <Checkbox value="E">E :{item.optionE}</Checkbox></div>:''}
                    { item.optionF?<div className="que_option"> <Checkbox value="F">F :{item.optionF}</Checkbox></div>:''}
                    </Checkbox.Group>
                    </div>
                }
               
                   
              })
          }
         
             <Button type="primary" style={{marginTop:40}  } onClick={this.handleSubmit}>提交答案</Button>
          </div>
         
           
          </div>
        )}else{
          return <Redirect to='/user/recruitsuccess' />
        }
    }
}

const mapDispatch=(dispatch)=>({
    getquestion(){
        dispatch(actionCreators.getquestion());
    },
    giveans(ans){
      dispatch(actionCreators.giveans(ans))
    }
})


const mapState=(state)=>({
    questions:state.getIn(['page','questions']),
    ansed:state.getIn(['page','ansed'])
})

export default connect(mapState,mapDispatch)(Questions);