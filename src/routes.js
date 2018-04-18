import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Home from './containers/home/'
import RegisterBox from './containers/registerBox/'
import LoginBox from './containers/loginBox/'
import ForgetBox from './containers/forgetBox/'
import OutDeal from './containers/outDeal/'
import NewDealBox from './containers/newDeal'
import InDealBox from './containers/inDeal'
import PerCenter from './containers/perCenter'
import SetPass from './containers/setPass'
import SetData from './containers/setData'
import EmailCheck from './containers/emailCheck'
import RealError from './containers/realError'
import RealCheckStart from './containers/realCkeckStart'
import RealCheckTwo from './containers/realCheckTwo'
import RealCheckOne from './containers/realCheckOne'
import RealCheckSelect from './containers/realCheckSelect'
import RealCheckID from './containers/realCheckID'
import RealCheckPassport from './containers/realCheckPassport'
import RealCheckPhoto from './containers/realCheckPhoto'
import AdvanceCheckStart from './containers/advanceCheckStart'
import AdvanceCheckResult from './containers/advanceCheckResult'
import TwoSCheckResult from './containers/twoSCheckResult'
import TwoCheckJie from './containers/twoCheckJie'
import TwoCheckStart from './containers/twoCheckStart'
import PayPart from './containers/payPart'
import PayPay from './containers/payPay'
import PayWeChat from './containers/payWeChat'
import PayBank from './containers/payBank'


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
                        <Route path="/outDeal/:filter" component={OutDeal}/>
                        <Route path="/newDeal/:id" component={NewDealBox}/>
                        <Route path="/inDeal" component={InDealBox}/>
                        <Route path="/perCenter" component={PerCenter}/>
                        <Route path="/setPass" component={SetPass}/>
                        <Route path="/setData" component={SetData}/>
                        <Route path="/emailCheck" component={EmailCheck}/>
                        <Route path="/realError" component={RealError}/>
                        <Route path="/realCheckStart" component={RealCheckStart}/>
                        <Route path="/realCheckOne" component={RealCheckOne}/>
                        <Route path="/realCheckTwo" component={RealCheckTwo}/>
                        <Route path="/realCheckSelect" component={RealCheckSelect}/>
                        <Route path="/realCheckID" component={RealCheckID}/>
                        <Route path="/realCheckPassport" component={RealCheckPassport}/>
                        <Route path="/realCheckPhoto" component={RealCheckPhoto}/>
                        <Route path="/advanceCheckStart" component={AdvanceCheckStart}/>
                        <Route path="/advanceCheckResult" component={AdvanceCheckResult}/>
                        <Route path="/twoSCheckResult" component={TwoSCheckResult}/>
                        <Route path="/twoCheckJie" component={TwoCheckJie}/>
                        <Route path="/twoCheckStart" component={TwoCheckStart}/>
                        <Route path="/payPart" component={PayPart}/>
                        <Route path="/payPay" component={PayPay}/>
                        <Route path="/payWeChat" component={PayWeChat}/>
                        <Route path="/payBank" component={PayBank}/>
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





