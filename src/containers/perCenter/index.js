import React from 'react'
import style from './index.css'
import {Input, Select, Form, Button, message, Icon, Pagination, Checkbox, Alert, Tabs,Modal} from 'antd';
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

        this.state = {
            checked1:true,
            checked2:true,
            checked3:true,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
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
                                <div className={style.wlopMContentH}>
                                    <div className={style.wlopMContentHL}>
                                        <div className={style.wlopMContentHLT}>
                                            <img className={style.wlopMContentHLTI} src={require('./images/red.png')} onClick={this.showModal} alt=""/>
                                            <Modal
                                                visible={this.state.visible}
                                                onCancel={this.handleCancel}
                                            >
                                                <div className={style.awordBox}>
                                                    <img src={require('./images/aword.png')} alt=""/>
                                                    <div className={style.num}>
                                                        0.00002617
                                                    </div>
                                                    <div className={style.coin}>
                                                        BTC
                                                    </div>
                                                </div>
                                                <div className={style.but}>
                                                    <Button>
                                                        <b>立即领取</b>
                                                    </Button>
                                                </div>

                                            </Modal>
                                            <span className={style.wlopMContentHLTT}>
                                                您还有一个0.00012 BTC 红包未领取 <br/>
                                                ( 仅限 CNY 交易 )
                                            </span>
                                        </div>
                                        <span className={style.wlopMContentHLB}>
                                            单笔场外交易超过 2000CNY 后领取
                                        </span>
                                    </div>
                                    <div className={style.wlopMContentHR}>
                                        <div className={style.wlopMContentHRC}>
                                            领取步骤： &nbsp;
                                            <span style={!this.state.checked1?{color:'#2D313B'}:{color:'#989898'}}>
                                                1.邮箱认证
                                                <span hidden={!this.state.checked1} style={{color:'rgba(74,219,136,1)',fontWeight:'bold',fontSize:'14px'}}>
                                                    <Icon type="check" />
                                                </span>
                                            </span> &nbsp;&nbsp;&nbsp;
                                            <span style={!this.state.checked2?{color:'#2D313B'}:{color:'#989898'}}>
                                                2.实名认证&nbsp;
                                                <span hidden={!this.state.checked2} style={{color:'rgba(74,219,136,1)',fontWeight:'bold',fontSize:'14px'}}>
                                                    <Icon type="check"/>
                                                </span>

                                            </span> &nbsp;&nbsp;&nbsp;
                                            <span style={!this.state.checked3?{color:'#2D313B'}:{color:'#989898'}}>
                                                3.完成一笔 2000CNY 的场外交易&nbsp;
                                                <span hidden={!this.state.checked3} style={{color:'rgba(74,219,136,1)',fontWeight:'bold',fontSize:'14px'}}>
                                                    <Icon type="check" />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.wlopMContentRC}>
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