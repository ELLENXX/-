import React ,{Component} from 'react';
import {HashRouter,Route,Switch,BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Login from './Login';
import Admin from './admin';
import AdminHome from './page/adminhome';
import NoMatch from './page/noMatch';
import App from './App';
import Article from './page/article/index';
import Users from './user';
import Home from './page/home';
import Laborationies from './page/laboratories';
import Receuit from './page/recruit';
import Contact from './page/contact';
import Questions from './page/questions';
import OwnPage from './page/ownpage';
import AdminMenber from './page/adminmenber';
import ChangeSet from './common/ui/changeset';
import LabSet from './page/labset';
import AdminNews from './page/adminnew';
import AdminSys from './page/adminsys';
import UserCheck from './page/usecheck';
import JinDu from './common/ui/jindu';
import MenberNews from './common/ui/menbernews';
import Success from './page/fangx';




export default class Irouter extends Component{
    render(){

       return( <Provider store={store}>
        <HashRouter>
            <App>
            <Switch>
            <Route path='/login/login' exact component={Login}></Route>
            <Route path='/user' render={()=><Users>
                <Switch>
                        <Route path='/user/userhome' component={Home}></Route>
                        <Route path='/user/laboratories' component={Laborationies}></Route>
                        <Route path='/user/recruit' component={Receuit}></Route>
                        <Route path='/user/contact' component={Contact}></Route>
                        <Route path='/user/direction' component={Questions}></Route>
                        <Route path='/user/recruitcheak' component={UserCheck}></Route>
                        <Route path='/user/recruitsuccess' component={Success}></Route>
                        <Route path='/user/ownpage/' render={()=><OwnPage>
                            <Switch>
                        <Route path='/user/ownpage/progress' component={JinDu}></Route>
                        <Route path='/user/ownpage/new' component={MenberNews}></Route>
                        <Route path='/user/ownpage/set' component={ChangeSet}></Route>
                         </Switch>
                        </OwnPage>}></Route>
                        <Route component={NoMatch}></Route>
                </Switch>
            </Users>}></Route>
            <Route path='/admin' render={()=><Admin>
                    <Switch>
                     
                    <Route path='/admin/home' exact component={AdminHome}></Route>
                    <Route path='/admin/news' exact component={ AdminNews}></Route>
                    <Route path='/admin/menber' exact component={AdminMenber}></Route>
                    <Route path='/admin/labset' component={LabSet}></Route>
                    <Route path='/admin/sysmty' component={AdminSys}></Route>
                    <Route path='/admin/ownpage/' component={ChangeSet} ></Route>
                   
                    <Route component={NoMatch}></Route>
                </Switch>
                </Admin>

            }>
                
            </Route>
            <Route path='/article/:id' exact component={Article}></Route>
            <Route component={NoMatch}></Route>
            </Switch>
            </App>
        </HashRouter>
        </Provider>)
    }
}
