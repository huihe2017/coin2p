import React from 'react';
import style from "./index.css"
import {hashHistory, Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {showLogin} from '../../actions/auth'
import {Badge, message, Radio, Button, Modal, Menu, Dropdown, Icon, Affix} from 'antd';
import io from 'socket.io-client'
import {logout} from '../../actions/user'
import BusinessChat from '../../components/businessChat'
import moment from 'moment';
import 'moment/locale/zh-cn';
import {IntlProvider, addLocaleData, FormattedMessage} from 'react-intl';
import webLink from '../../common/webLink'

moment.locale('en');


const SubMenu = Menu.SubMenu;
let data = {currency: 'btc'}
data = JSON.stringify(data);


class Header extends React.Component {
    constructor(props) {
        console.log(hashHistory)
        super(props);
        this.state = {
            open: false,
            position: 'flex',
            otherStyle: true,
            isManage: true,
            visible: false,
            messageList: [],
            isLogin: false
        }
        this.choceType = this.choceType.bind(this)
    }

    choceType() {
        if (window.location.hash.substr(1).indexOf('/?') !== -1) {
            this.setState({position: 'absolute'})
            this.setState({otherStyle: false})
            let dance = document.body.clientWidth * 0.46
            let danceCopy = dance
            window.onscroll = null
            window.onscroll = (e) => {
                //console.log(document.body.scrollTop)
                var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;

                if (oTop < danceCopy) {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                    return false
                }

                if (oTop - dance < 0) {
                    this.setState({position: 'fixed'})
                    this.setState({otherStyle: true})
                    console.log(11);
                } else {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                    console.log(22);
                }
                dance = oTop
            }
        }
    }


    render() {
        const menu = (
            <Menu>
                <SubMenu title="购买">
                    <Menu.Item><Link to={`/outDeal/${data}`}>btc</Link></Menu.Item>
                </SubMenu>
                <SubMenu title="出售">
                    <Menu.Item>btc</Menu.Item>
                </SubMenu>
            </Menu>
        );
        const menu1 = (
            <Menu>
                <Menu.Item>刊登普通广告</Menu.Item>
                <Menu.Item>刊登批量交易广告</Menu.Item>

            </Menu>
        )
        const menu2 = (
            <Menu>
                <Menu.Item>刊登普通广告</Menu.Item>
                <Menu.Item>刊登批量交易广告</Menu.Item>

            </Menu>
        )
        const menu4 = (
            <Menu>
                <Menu.Item>
                    <Link to={'/perCenter'}>
                <span className={style.it}>
                    我的账户
                </span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
             <span className={style.it}>
                我的钱包
            </span>
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item>
            <span onClick={() => {
                this.props.logout()
            }} className={style.it}>
                登出
            </span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div
                className={this.state.otherStyle ? (style.wrap + ' ' + style[this.state.position] + ' ' + style.otherStyle) : (style.wrap + ' ' + style[this.state.position])}>

                <div className={style.headerTop}>
                    {
                        this.state.open ? <BusinessChat
                            appKey={'lmxuhwagliihd'}
                            type={2}
                            target={'vvvvvvvv'}
                            targetId={'KEFU152334892840419'}
                            token={'YG+I2a60HemE2x3sKimNDQWEhbPtTQxEZqtVdtr5INYMQO9bwo50qdkT0C2zm08AwSwSo9l9x1HS8g2mI14xrNqTFof8RNfb'}
                        ></BusinessChat> : ''
                    }


                    <div className={style.headerTopBot}>
                        <div className={style.logo}>
                            <Link to="/"><img src={require("./images/logoO.png")}/></Link>
                        </div>
                        <div className={style.headerContent}>
                            <Link to="/inDeal">
                                <a className={style.headerNav} href="javascript:void (0)">
                                    <img src={require("./images/outMarket.png")} alt=""/>
                                    <span className={style.navContent}>场外交易</span>

                                </a>
                            </Link>
                            <a className={style.headerNav} href="javascript:void (0)">
                                <img src={require("./images/biBi.png")} alt=""/>
                                <span className={style.navContent}>
                                    币币交易
                                </span>
                            </a>
                            <div className={style.headerRNav}>
                                <div className={style.dropDown} style={{marginRight: 0}}>
                                    <Dropdown overlay={menu1}>
                                        <a className="ant-dropdown-link" href="#">
                                            刊登广告 <Icon type="down"/>
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>

                            <a className={style.headerRNav} href="javascript:void (0)">
                                邀请好友
                            </a>
                            <a className={style.headerRNav} href="javascript:void (0)">
                                帮助中心
                            </a>
                            <a className={style.headerRNav} href="javascript:void (0)" hidden={true}>
                                上币申请
                            </a>
                            <a className={style.headerRNavA} href="javascript:void (0)">
                                首页
                            </a>
                        </div>
                        <div className={style.logReg} hidden={this.props.user.account}>
                            <Link to="/login">
                                <a className={style.logRegA} href="javascript:void (0)">
                                    登录
                                </a>
                            </Link>
                            <Link to="/register">
                                <a className={style.logRegA} href="javascript:void (0)">
                                    注册
                                </a>
                            </Link>
                        </div>

                        <div className={style.logReg1} hidden={!this.props.user.account}>
                            <div className={style.dropDown} style={{marginRight: 0}}>
                                <Dropdown overlay={menu4}>
                                    <a className="ant-dropdown-link" style={{height: '40px', lineHeight: '40px'}}
                                       href="#">
                                        <img className={style.userImg} src={require('./images/user.png')} alt=""/> <Icon
                                        type="down"/>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </div>

                </div>
                <Affix style={{width: '100%'}}>
                    <div className={style.headerBBOX}>
                        <div className={style.headerBBOXC}>
                            <div className={style.headerBottom}>
                                <div className={style.dropDown}>
                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link" href="#">
                                            购买BTC <Icon type="down"/>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className={style.dropDown}>
                                    <Dropdown overlay={menu1}>
                                        <a className="ant-dropdown-link" href="#">
                                            刊登广告 <Icon type="down"/>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className={style.dropDown} hidden={!this.props.user.account}>
                                    <Dropdown overlay={menu2}>
                                        <a className="ant-dropdown-link" href="#">
                                            交易管理 <Icon type="down"/>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className={style.language}>
                                <span>
                                    CN
                                </span>
                                    <div className={style.line}>

                                    </div>
                                    <span>
                                    EN
                                </span>
                                </div>
                            </div>
                            <a className={style.note} href="javascript:void (0)">
                                <img src={require('./images/note.png')} alt=""/>
                            </a>
                            <a className={style.bell} href="javascript:void (0)">
                                <img src={require('./images/bell.png')} alt=""/>
                            </a>

                        </div>


                    </div>

                </Affix>

                <div id={'vvvvvvvv'} style={{
                    width: 326,
                    height: this.state.open ? 450 : 0,
                    background: 'red',
                    position: 'fixed',
                    bottom: 140,
                    right: 10
                }}></div>
                <div onClick={() => {
                    this.setState({open: !this.state.open})
                }} id={'switch'} style={{
                    width: 50,
                    height: 50,
                    background: 'red',
                    position: 'fixed',
                    bottom: 20,
                    right: 20
                }}>开关
                </div>
            </div>
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
    return {
        logout: bindActionCreators(logout, dispatch)
    }
}


Header = connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header;