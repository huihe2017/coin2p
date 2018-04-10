import React from 'react'
import style from './index.css'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';


class SellPart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div className={style.wlop}>
                <img className={style.ava} src={require('./images/avator.png')} alt=""/>
                <div className={style.namebox}>
                    <span className={style.name}>
                        飞机哈哈哈哈
                    </span>
                    <span className={style.line}>
                        <span>1</span>分钟前上线
                    </span>
                </div>
                <div className={style.payPart}>
                    <img className={style.payPartItem} src={require('./images/wechat.png')} alt=""/><img className={style.payPartItem} src={require('./images/bank.png')} alt=""/><img className={style.payPartItem} src={require('./images/pay.png')} alt=""/>
                    <img className={style.payPartItems} src={require('./images/shop.png')} alt=""/>
                </div>
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

SellPart = connect(mapStateToProps, mapDispatchToProps)(SellPart)
export default SellPart