import React,{Component} from 'react';
import Head from './common/Adminhead';
import NavLeft from './common/NavLeft';

import './css.less';
import Footer from './common/Footer';
import {Row,Col} from 'antd';
export default class Admin extends Component{
    render(){
        return(
            <div>
                <Row className="admin_container">
                    <Col className="admin_nav-left" span={3}>
                      <NavLeft />
                    </Col>
                    <Col span={21} className="admin_main">
                    <Row>
                   <Head />
                    </Row>
                    <Row className="admin_content">
                    {this.props.children}
                    </Row>
                    <Row className="admin_footer">
                        <Footer />
                    </Row>
                    </Col>
                </Row>
            </div>
        );
        
    }
}