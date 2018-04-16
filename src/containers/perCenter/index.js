import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Icon,Pagination,Checkbox,Alert,Tabs } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserPart from '../../components/userPart'
import MyAccount from './components/myAccount'
import AwardCenter from './components/awardCenter'
import BiTuo from './components/biTuo'

const TabPane = Tabs.TabPane;

class PerCenter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    callback(key) {
        console.log(key);
    }


    render() {
        return (
            <div className={style.wrap}>
                <Header/>
                    <div className={style.wlop}>
                        <div className={style.wlopContent}>
                            <Alert closable message={<span className={style.alert}>
                            欢迎来到【币点点】 您的邮箱已经验证成功
                        </span>} type="success" />
                            <div className={style.wlopMContent}>
                                <div className={style.wlopMContentL}>
                                    <UserPart/>
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

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

PerCenter = connect(mapStateToProps, mapDispatchToProps)(PerCenter)
export default PerCenter