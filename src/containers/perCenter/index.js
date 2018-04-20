import React from 'react'
import style from './index.css'
import {Input, Select, Form, Button, message, Icon, Pagination, Checkbox, Alert, Tabs} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserPart from '../../components/userPart'
import {getUserDetails} from '../../actions/user'
import MyAccount from './components/myAccount'
import AwardCenter from './components/awardCenter'
import BiTuo from './components/biTuo'

const TabPane = Tabs.TabPane;

class PerCenter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    callback(key) {
        console.log(key);
    }

    componentDidMount() {
        this.props.getUserDetails()
    }

    render() {
        if (!this.props.user.account) {
            this.props.history.pushState(null, '/login')
        }
        if (!this.props.user.lastLoginTime) {
            return null
        }
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <Alert closable message={<span className={style.alert}>
                            欢迎来到【币点点】 您的邮箱已经验证成功
                        </span>} type="success"/>
                        <div className={style.wlopMContent}>
                            <div className={style.wlopMContentL}>
                                <UserPart userMsg={this.props.user} />
                            </div>
                            <div className={style.wlopMContentR}>
                                <Tabs defaultActiveKey="1" onChange={this.callback}>
                                    <TabPane tab="我的账户" key="1">
                                        <MyAccount/>
                                    </TabPane>
                                    <TabPane tab="奖励中心" key="2">
                                        <AwardCenter/>
                                    </TabPane>
                                    <TabPane tab="币托" key="3">
                                        <BiTuo/>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserDetails: bindActionCreators(getUserDetails, dispatch)
    }
}

PerCenter = connect(mapStateToProps, mapDispatchToProps)(PerCenter)
export default PerCenter