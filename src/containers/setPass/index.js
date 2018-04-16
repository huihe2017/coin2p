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
                                    <TitleBack wid={96} word={'修改密码'}/>
                                    <div className={style.header}>
                                        提醒您，在修改密码成功后的 24 小时之间将会暂时锁定提币功能，以确保账户安全。
                                    </div>
                                    <div className={style.content}>
                                        <Form onSubmit={this.handleSubmit}>
                                            <div className={style.perselphone}>
                                                <div className={style.tuxing}>
                                                    <FormItem>{getFieldDecorator('newPassword', {
                                                        rules: [{
                                                            required: true,
                                                            message: "请输入正确格式的密码",
                                                            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/
                                                        }],
                                                    })(<div>
                                                        <Input onChange={
                                                            (e) => {
                                                                this.setState({password: e.target.value})
                                                            }} className={style.inputp} placeholder={"请输入您原来的密码"}
                                                               type={'password'}/></div>
                                                    )}
                                                    </FormItem>
                                                </div>
                                                <div className={style.tuxing}>
                                                    <FormItem>{getFieldDecorator('password', {
                                                        rules: [{
                                                            required: true,
                                                            message: "请输入正确格式的密码",
                                                            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/
                                                        }],
                                                    })(<div>
                                                        <Input onChange={
                                                            (e) => {
                                                                this.setState({password: e.target.value})
                                                            }} className={style.inputp} placeholder={"请输入您的新密码"}
                                                               type={'password'}/></div>
                                                    )}
                                                    </FormItem>
                                                </div>
                                                <div className={style.tuxing}>
                                                    <FormItem
                                                        hasFeedback
                                                    >
                                                        {getFieldDecorator('confirm', {
                                                            rules: [{
                                                                required: true, message: "请输入正确格式的密码",
                                                            }, {
                                                                validator: this.checkPassword.bind(this,"两次输入的密码不同"),
                                                            }],
                                                        })(
                                                            <Input
                                                                type="password"
                                                                className={style.inputp}
                                                                onChange={
                                                                    (e) => {
                                                                        this.setState({confirm: e.target.value})
                                                                    }
                                                                }
                                                                onBlur={this.handleConfirmBlur}
                                                                placeholder={"请再次输入您的新密码"}/>
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className={style.but}>
                                                    <div className={style.butL}>
                                                        <FormItem>
                                                            <Button htmlType="submit" style={{width: 120, height: 36, fontSize:14,backgroundColor:'rgba(217,186,131,1)',color:'#fff'}}>{"确认修改"}</Button>

                                                        </FormItem>
                                                    </div>
                                                    <div className={style.butL}>
                                                        <Link to={'/perCenter'}>
                                                            <Dbutton width={120} height={36} size={14} ghost={true} word={'取消'}/>
                                                        </Link>
                                                    </div>
                                                </div>


                                            </div>
                                        </Form>
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