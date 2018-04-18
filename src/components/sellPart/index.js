import React from 'react'
import style from './index.css'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import {setTime} from '../../common/tool'


class SellPart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        console.log(555555, this.props.tradeMode);
        if(this.props.tradeMode.length===0){
            return null
        }

        return (
            <div className={style.wlop}>
                <img className={style.ava} src={this.props.userMsg.portrait} alt=""/>
                <div className={style.namebox}>
                    <span className={style.name}>
                        {this.props.userMsg.nickname}
                    </span>
                    <span className={style.line}>
                        <span></span>{setTime(this.props.userMsg.adUptime)}
                    </span>
                </div>
                <div className={style.payPart}>
                    {
                        this.props.tradeMode[1].weixin ?
                            <img className={style.payPartItem} src={require('./images/wechat.png')} alt=""/> : ''

                    }
                    {
                        this.props.tradeMode[2].bankCard ?
                            <img className={style.payPartItem} src={require('./images/bank.png')} alt=""/> : ''

                    }
                    {
                        this.props.tradeMode[0].alipay ?
                            <img className={style.payPartItem} src={require('./images/pay.png')} alt=""/> : ''

                    }
                    {
                        this.props.userMsg.isCertifiedBusiness ?
                            <img className={style.payPartItems} src={require('./images/shop.png')} alt=""/> : ''
                    }


                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

SellPart = connect(mapStateToProps, mapDispatchToProps)(SellPart)
export default SellPart