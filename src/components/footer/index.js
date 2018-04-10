import React from 'react';
import style from "./index.css"
import {hashHistory} from 'react-router';
import {connect} from 'react-redux'
import { IntlProvider,addLocaleData,FormattedMessage } from 'react-intl';


class Footer extends React.Component {
    constructor(props) {
        console.log(hashHistory)
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className={style.footer}>
                <div className={style.footerCenter}>
                    <div className={style.footerLeft}>
                        <div className={style.footerNav}>
                            <span className={style.navTitle}>
                                交易平台
                            </span>
                            <a href="javascript:void (0)">
                                收费标准
                            </a>
                            <a href="javascript:void (0)">
                                快速买入
                            </a>
                            <a href="javascript:void (0)">
                                快速卖出
                            </a>
                        </div>
                        <div className={style.footerNav}>
                            <span className={style.navTitle}>
                                我的點點
                            </span>
                            <a href="javascript:void (0)">
                                立即注册
                            </a>
                            <a href="javascript:void (0)">
                                转入货币
                            </a>
                            <a href="javascript:void (0)">
                                查看收益
                            </a>
                        </div>
                        <div className={style.footerNav}>
                            <span className={style.navTitle}>
                                条款声明
                            </span>
                            <a href="javascript:void (0)">
                                隐私声明
                            </a>
                            <a href="javascript:void (0)">
                                服务条款
                            </a>
                            <a href="javascript:void (0)">
                                法律声明
                            </a>
                        </div>
                        <div className={style.footImg}>
                            <img src={require("./images/footerlogo.png")} alt=""/>
                            <p>
                                币點點  ©2018 Points Digital Trading Limited 版权所有.
                            </p>
                            <p>
                                币點點 Copyright ©2018 Points Digital Trading Limited. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                    <div className={style.footerRight}>
                        <p className={style.imgTitle}>
                            扫码添加客服微信
                        </p>
                        <img className={style.imgShow} src={require("./images/eqode.png")} alt=""/>
                        <p className={style.perTitle}>
                            客服电话：<b>+852 81799553</b>
                        </p>
                        <p className={style.perTitle}>
                            伙伴推荐：<img src={require("./images/partner1.png")} alt=""/><img src={require("./images/partner2.png")} alt=""/><img src={require("./images/partner3.png")} alt=""/>
                        </p>
                    </div>
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
    return {}
}

Footer = connect(mapStateToProps, mapDispatchToProps)(Footer)
export default Footer;