import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Icon,Pagination,Checkbox,Alert,Tabs } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserShow from '../../components/userShow'
import CheckItem from './components/checkItems'
import DButton from '../../components/button'

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
                                    <div className={style.wlopMContentLT}>
                                        <div className={style.userHead}>
                                            <img className={style.userImg} src={require('./images/userImg.png')} alt=""/>
                                            <div className={style.userData}>
                                                <span className={style.userName}>
                                                    飞机哈哈哈哈
                                                </span>
                                                <span className={style.userEmail}>
                                                    1568765167@qq.com
                                                </span>
                                                <span>上次登录：2018/04/08 10：09
                                                </span>
                                                <span>
                                                   评价数：+0/-0
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.userBut}>
                                            <div className={style.but}>
                                                <DButton width={90} height={36} size={15} ghost={true} word={'修改资料'}/>
                                            </div>
                                            <div className={style.but}>
                                                <DButton width={90} height={36} size={15} ghost={true} word={'修改密码'}/>
                                            </div>
                                            <div className={style.but}>
                                                <DButton width={90} height={36} size={15} ghost={true} word={'登出'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.wlopMContentLT}>
                                        <div className={style.checkIdHead}>
                                            <CheckItem title={true} id={true} herf={'/login'} />
                                        </div>
                                        <div className={style.checkIdContent}>
                                            <div className={style.checkIdContentLi}>
                                                <CheckItem title={false} content={'邮箱认证'} checked={true} />
                                            </div>
                                            <div className={style.checkIdContentLi}>
                                                <CheckItem title={false} content={'实名认证'} checked={false}  herf={'/login'} />
                                            </div>
                                            <div className={style.checkIdContentLi}>
                                                <CheckItem title={false} content={'进阶认证'} checked={false} three={true} />
                                            </div>




                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.checkIdHead}>
                                            <CheckItem title={true}  herf={'/login'} />
                                        </div>
                                        <div className={style.checkIdContent}>
                                            <div className={style.checkIdContentLi}>
                                                <CheckItem title={false} content={'两步验证'} checked={false} herf={'/login'} />
                                            </div>
                                            <div className={style.checkIdContentLi}>
                                                <CheckItem title={false} content={'手机认证'} checked={false} herf={'/login'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.wlopMContentR}>
                                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                                        <TabPane tab="我的账户" key="1">Content of Tab Pane 1</TabPane>
                                        <TabPane tab="奖励中心" key="2">Content of Tab Pane 2</TabPane>
                                        <TabPane tab="币托" key="3">Content of Tab Pane 3</TabPane>
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