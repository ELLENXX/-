import React,{Component} from 'react';
import Header from './common/header';
import Home from './page/home';
import Footer from './common/Footer';
import NoMatch from './page/noMatch';
import {HashRouter,Route,Switch} from 'react-router-dom';
import { UserHead ,UserContent,UserFooter} from './style.js';
export default class Users extends Component{
    render(){
        return(
            <div style={{height:'100%'}}>
                <UserHead>
                    <Header />
                </UserHead>
                <UserContent>
                   {this.props.children}
                </UserContent>
                <UserFooter>
                    <Footer />
                </UserFooter>
                
            </div>
        );
    }
}