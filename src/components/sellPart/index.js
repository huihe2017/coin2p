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
        console.log(555555,this.props.userMsg);
        return (
            <div className={style.wlop}>
                <img className={style.ava} src={this.props.userMsg.portrait} alt=""/>
                <div className={style.namebox}>
                    <span className={style.name}>
                        {this.props.userMsg.nickname}
                    </span>
                    <span className={style.line}>
                        <span>1</span>{this.props.userMsg.adUptime}
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