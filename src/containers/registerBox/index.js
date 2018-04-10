import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserShow from '../../components/userShow'

const FormItem = Form.Item;
const Option = Select.Option;

class RegisterBox extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }


    componentDidMount(){
        var that=this
        // this.props.getCaption({},(img) => {
        //     //console.log('huhu'+img)
        //     that.setState({
        //         picImg:that.getPicImg(img)
        //     })
        // });
    }



    hideModal = () => {
        this.props.hideAuth()

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
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    }

    checkPhone = (getFieldError, getFieldValue) => {
        let flag = false
        this.props.form.validateFields(['phone', 'authCode'], (err) => {
            if (!err) {
                flag = true
            }
        });

        return flag
    }

    getPicImg(e) {
        return <div dangerouslySetInnerHTML={{__html:e}}/>
    }

    regetPicImg(){
        var that=this
        this.props.getCaption({},(img) => {
            //console.log('huhu'+img)
            that.setState({
                picImg:that.getPicImg(img)
            })
        });
    }

    render() {



        const { getFieldDecorator} = this.props.form;
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.box}>
                    <div className={style.boxContent}>
                        <ul className={style.boxContentLeft}>
                            <UserShow/>
                        </ul>
                        <div className={style.boxContentRight}>
                            <Form onSubmit={this.handleSubmit}>
                                <div className={style.content1}>
                        <span className={style.llctitle}>
                            注册币點點账号
                        </span>
                                    <div className={style.perselphone}>
                                        <div className={style.selphone}>
                                            {/*邮箱登陆*/}
                                            <FormItem>
                                                {getFieldDecorator('email', {
                                                    rules: [{
                                                        required: true,
                                                        initialValue: '36363@ww.com',
                                                        pattern: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                                                        message:"请输入正确格式的邮箱地址"
                                                    }],
                                                })(
                                                    <Input className={style.inputp} disabled={this.state.checkNick}
                                                           placeholder={"请输入邮箱"} onChange={(e) => {
                                                        this.setState({email: e.target.value})
                                                    }}/>
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
                                                    }} className={style.inputp} placeholder={"请输入密码"}
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
                                                        placeholder={"请再次输入密码"}/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.tuxing}>
                                            <img className={style.authCode}
                                                 src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508392689327&di=de9f7dd0fb15a19b677b80a6e88956f2&imgtype=0&src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F875028%2F201605%2F875028-20160513234811280-1452474757.png"
                                                 alt=""/>
                                            {/*<div className={style.tx} onClick={this.regetPicImg.bind(this)}>*/}
                                            {/*{this.state.picImg}*/}
                                            {/*</div>*/}


                                            <FormItem >{getFieldDecorator('authCode', {
                                                rules: [{required: true, message: "请输入正确的图形验证码"}],
                                            })(<div>
                                                <Input onChange={
                                                    (e) => {
                                                        this.setState({authCode: e.target.value})
                                                    }
                                                }
                                                       className={style.inputp}
                                                       placeholder={"请输入图形验证码"}/></div>
                                            )}
                                            </FormItem>
                                        </div>
                                        <FormItem>
                                            <Button htmlType="submit" style={{width: '100%', height: 48, marginTop: 10,fontSize:16,backgroundColor:'rgba(217,186,131,1)',color:'#fff'}}>{"完成注册并登录"}</Button>
                                        </FormItem>

                                        <div className={style.toggletab}>
                                           <span className={style.noacc1}>
                                        {"注册即表示同意 "}
                                            </span>
                                            <a className={style.reg1} href="javascript:void (0)">{"《coin2p 使用条款》"}</a>

                                            <a className={style.reg} href="javascript:void (0)">{"直接登陆"}</a>
                                            <span className={style.noacc}>
                                        {"已有账户"}、
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </Form>
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

RegisterBox = connect(mapStateToProps, mapDispatchToProps)(RegisterBox)
const WrapRegisterBox = Form.create()(RegisterBox)
export default WrapRegisterBox