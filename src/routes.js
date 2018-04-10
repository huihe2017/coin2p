import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Home from './containers/home/'
import RegisterBox from './containers/registerBox/'
import LoginBox from './containers/loginBox/'
import ForgetBox from './containers/forgetBox/'
import OutDeal from './containers/outDeal/'
import NewDealBox from './containers/newDeal'
import InDealBox from './containers/inDeal'


import { LocaleProvider } from 'antd'
import {IntlProvider} from 'react-intl';
import zh_CN from './common/zh_CN';
import en_US from './common/en_US';
import {connect} from "react-redux";
import enUS from 'antd/lib/locale-provider/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');


class FF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <IntlProvider locale={this.props.auth.isEnglish?'en':'zh'} messages={this.props.auth.isEnglish?en_US:zh_CN}>
                <LocaleProvider locale={this.props.auth.isEnglish?enUS:''}>
                    <Router history={hashHistory}>
                        <Route path="/" component={Home}/>
                        <Route path="/register" component={RegisterBox}/>
                        <Route path="/login" component={LoginBox}/>
                        <Route path="/forget" component={ForgetBox}/>
                        <Route path="/outDeal" component={OutDeal}/>
                        <Route path="/newDeal" component={NewDealBox}/>
                        <Route path="/inDeal" component={InDealBox}/>
                    </Router>
                </LocaleProvider>
            </IntlProvider>
        )
    }
}








function mapStateToProps(state, props) {
    return {
        user: state.user,
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

FF = connect(mapStateToProps, mapDispatchToProps)(FF)
export default FF;





