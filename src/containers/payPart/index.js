import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Icon,Pagination,Checkbox,Alert,Tabs } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserPart from '../../components/userPart'
import Dbutton from '../../components/button'
import TitleBack from '../../components/titleBack'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class SetPass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    callback(key) {
        console.log(key);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(this.state.email)
            if (!err) {
                //Toast.loading('', 0, null, false)
                // this.props.register({
                //     // tel: this.state.areaCode + " " + this.state.phone,
                //     pwd: this.state.password,
                //     code: this.state.authCode,
                //     email: this.state.email,
                //     language:this.props.auth.isEnglish
                // }, (errorText) => {
                //     Toast.hide()
                //     this.setState({picImg: this.getPicImg()})
                //     if (errorText) {
                //         Toast.info(errorText, 3, null, false)
                //     } else {
                //         this.props.hideAuth()
                //     }
                // })
                message.success("注册成功")
            }else {
                message.error("填写不完善")
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    }
    checkPassword = (a,rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback(a);
        } else {
            callback();
        }
    }

    render() {
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
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
                                    <UserPart/>
                                </div>
                                <div className={style.wlopMContentR}>
                                    <div className={style.wlopMContentRLi}>
                                        <TitleBack wid={96} word={'我的账户'}/>
                                    </div>

                                    <div className={style.header}>
                                        请设置您能支持的支付或收款方式，请务必保障是您本人所有的账号。 <br/>
                                        您所设置的信息，将可自动呈现在您所发布的广告信息中。<a className={style.headerA} href="">点此查看示例</a>
                                    </div>
                                    <div className={style.content}>

                                        <table className={style.contentTable}>
                                            <thead>
                                                <tr>
                                                    <td>
                                                        交易方式
                                                    </td>
                                                    <td>
                                                        状态
                                                    </td>
                                                    <td>
                                                        操作
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>

                                                        <span className={style.word}>银行账号</span>
                                                        <img className={style.img} src={require('../../components/sellPart/images/bank.png')} alt=""/>
                                                    </td>
                                                    <td>
                                                        未设置
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void (0)" className={style.headerAA}>管理</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className={style.word}>微信</span>
                                                        <img className={style.img} src={require('../../components/sellPart/images/wechat.png')} alt=""/>
                                                    </td>
                                                    <td>
                                                        未设置
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void (0)" className={style.headerAA}>管理</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>

                                                        <span className={style.word}>支付宝</span>
                                                        <img className={style.img} src={require('../../components/sellPart/images/pay.png')} alt=""/>
                                                    </td>
                                                    <td>
                                                        未设置
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void (0)" className={style.headerAA}>管理</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

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

SetPass = connect(mapStateToProps, mapDispatchToProps)(SetPass)
const WrapSetPass = Form.create()(SetPass)
export default WrapSetPass