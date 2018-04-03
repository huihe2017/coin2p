import React from 'react';
import style from "./index.css"
import {hashHistory, Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {showLogin} from '../../actions/auth'
import { Badge,message,Radio,Button,Modal,Menu, Dropdown, Icon  ,Affix} from 'antd';
import io from 'socket.io-client'
import moment from 'moment';
import 'moment/locale/zh-cn';
import { IntlProvider,addLocaleData,FormattedMessage } from 'react-intl';
import webLink from '../../common/webLink'
moment.locale('en');



const ButtonGroup = Button.Group;
const SubMenu = Menu.SubMenu;
const menu = (
    <Menu>
        <SubMenu title="购买">
            <Menu.Item>购买1</Menu.Item>
            <Menu.Item>购买2</Menu.Item>
            <Menu.Item>购买3</Menu.Item>
            <Menu.Item>购买4</Menu.Item>
            <Menu.Item>购买5</Menu.Item>
        </SubMenu>
        <SubMenu title="出售" >
            <Menu.Item>出售1</Menu.Item>
            <Menu.Item>出售2</Menu.Item>
            <Menu.Item>出售3</Menu.Item>
            <Menu.Item>出售4</Menu.Item>
            <Menu.Item>出售5</Menu.Item>
        </SubMenu>
    </Menu>
);
const menu1 = (
    <Menu>
        <Menu.Item>刊登普通广告</Menu.Item>
        <Menu.Item>刊登批量交易广告</Menu.Item>

    </Menu>
);

class Header extends React.Component {
    constructor(props) {
        console.log(hashHistory)
        super(props);
        this.state = {
            open: false,
            position: 'flex',
            otherStyle: true,
            isManage:true,
            visible:false,
            messageList : []
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


        return (
            <div className= {this.state.otherStyle ? ( style.wrap + ' ' + style[this.state.position] + ' ' + style.otherStyle) : ( style.wrap + ' ' + style[this.state.position])}>

                <div className={style.headerTop}>
                    <div className={style.headerTopBot}>
                        <div className={style.logo}>
                            <Link to="/"><img src={require("./images/logoO.png")}/></Link>
                        </div>
                        <div className={style.headerContent}>
                            <a className={style.headerNav} href="javascript:void (0)">
                                <img src={require("./images/outMarket.png")} alt=""/>
                                <span className={style.navContent} >场外交易</span>

                            </a>
                            <a className={style.headerNav} href="javascript:void (0)">
                                <img src={require("./images/biBi.png")} alt=""/>
                                <span className={style.navContent}>
                                    币币交易
                                </span>
                            </a>
                            <a className={style.headerRNav} href="javascript:void (0)">
                            帮助中心
                        </a>
                            <a className={style.headerRNav} href="javascript:void (0)">
                                上币申请
                            </a><a className={style.headerRNavA} href="javascript:void (0)">
                            首页
                        </a>
                        </div>
                        <div className={style.logReg}>
                            <a href="javascript:void (0)">
                            登录
                            </a>
                            <a href="javascript:void (0)">
                            注册
                            </a>
                        </div>
                    </div>

                </div>
                <Affix style={{width:'100%'}}>
                    <div className={style.headerBBOX}>
                        <div className={style.headerBottom}>
                            <div className={style.dropDown}>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href="#">
                                        购买BTC <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </div>
                            <div className={style.dropDown}>
                                <Dropdown overlay={menu1}>
                                    <a className="ant-dropdown-link" href="#">
                                        刊登广告 <Icon type="down" />
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
                    </div>

                </Affix>


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

    }
}


Header = connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header;