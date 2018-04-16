import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserShow from '../../components/userShow';
import TitleBack from '../../components/titleBack';
import DButton from '../../components/button'

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            phone:false
        }
    }

    render() {
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <TitleBack wid={96} word={'邮箱验证'}/>
                        <img className={style.emailImg} src={require('./images/emailCheck.png')} alt=""/>
                        <span className={style.emailContent}>
                           <b>已发送，请确认邮件</b>
                        </span>
                        <span  className={style.emailContent}>
                           您的注册邮箱：693090165@qq.com
                        </span>
                        <div className={style.line}></div>
                        <span className={style.emailTipT}>
                            提醒您，在修改密码成功后的 24 小时之间将会暂时锁定提币功能，以确保账户安全。
                        </span>
                        <span className={style.emailTipT}>
                            如果长时间没收到邮件，
                            <span className={style.emailTipTR}>
                               请先检查是否被归类到垃圾邮件。
                            </span>
                        </span>
                        <div className={style.but}>
                            <DButton width={120} height={36} size={14} word={'重新发送邮件'}/>
                        </div>

                        <span className={style.emailTipB}>
                            <b>请注意</b>
                        </span>
                        <span className={style.emailTipB}>
                            币点点 本身是一个中立换币平台，提供换币服务，并未有与任何「套利平台」有合作关系。若有任何套利平台声称与 OTCBTC 有合作关系，且声称有巨额回报， 请用户提高警觉，注意并小心各种潜在风险。
                        </span>
                        <span className={style.emailTipB}>
                            若有疑问请随时咨询在线客服。
                        </span>
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

EmailCheck = connect(mapStateToProps, mapDispatchToProps)(EmailCheck)

export default EmailCheck