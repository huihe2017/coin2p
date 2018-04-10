import React from 'react';
import style from "./index.css"
import {hashHistory} from 'react-router';
import {connect} from 'react-redux'
import { IntlProvider,addLocaleData,FormattedMessage } from 'react-intl';


class UserShow extends React.Component {
    constructor(props) {
        console.log(hashHistory)
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <ul >
                <li className={style.boxContentLeftLi}>
                    <img className={style.youImg} src={require('./images/xuniBi.png')} alt=""/>
                    <span className={style.title}>
                                    自由交易虚拟货币
                                </span>
                    <span className={style.content}>
                                    强大的广告系统，让交易数字币 安全又快速
                                </span>
                </li>
                <li className={style.boxContentLeftLi}>
                    <img className={style.youImg} src={require('./images/outMarket.png')} alt=""/>
                    <span className={style.title}>
                                    场外交易可以很简单
                                </span>
                    <span className={style.content}>
                                    不论是购买、出售数字币，都可立即上手
                                </span>
                </li>
                <li className={style.boxContentLeftLi}>
                    <img className={style.youImg} src={require('./images/parts.png')} alt=""/>
                    <span className={style.title}>
                                    最全面的交易种类
                                </span>
                    <span className={style.content}>
                                    支持 BTC / ETH 等主流货币，及多种交易方式
                                </span>
                </li>
            </ul>

        )
    }
}

function mapStateToProps(state, props) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

UserShow = connect(mapStateToProps, mapDispatchToProps)(UserShow)
export default UserShow;