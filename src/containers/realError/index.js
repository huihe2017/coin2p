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
                        <TitleBack wid={96} word={'实名验证'}/>
                        <img className={style.emailImg} src={require('./images/reset.png')} alt=""/>

                        <span className={style.emailTipT}>
                            <b>验证失败，请尝试重新提交</b>
                        </span>
                        <div className={style.emailResultBox}>
                            <span className={style.emailResultLi}>
                                详细信息：
                            </span>
                            <span className={style.emailResultLi}>
                                证件验证结果：
                                <span className={style.emailResultLis}>
                                    并未上传有效证件
                                </span>
                            </span>
                            <span className={style.emailResultLi}>
                                人像对比结果：
                            </span>
                            <span className={style.emailResultLi}>
                                人像比对失败理由：

                            </span>
                        </div>

                        <div className={style.but}>
                            <DButton width={400} height={36} size={14} word={'重新申请验证'}/>
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

EmailCheck = connect(mapStateToProps, mapDispatchToProps)(EmailCheck)

export default EmailCheck