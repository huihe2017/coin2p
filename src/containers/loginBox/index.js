import React from 'react'
import style from './index.css'
import {Input, Select, Form, Button, message} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory, Link} from 'react-router'
import {connect} from 'react-redux'
import {login} from '../../actions/user'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserShow from '../../components/userShow'

const FormItem = Form.Item;
const Option = Select.Option;

class LoginBox extends React.Component {
    constructor() {
        super()
        this.state = {
            phone: false
        }
    }

    handleCurrencyChange = (currency) => {
        if (!('value' in this.props)) {
            this.setState({currency});
        }
        this.triggerChange({currency});
    }
    triggerChange = (changedValue) => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }

    componentDidMount() {
        var that = this
        // this.props.getCaption({},(img) => {
        //     //console.log('huhu'+img)
        //     that.setState({
        //         picImg:that.getPicImg(img)
        //     })
        // });
    }

    phem() {
        if (this.state.phone) {
            this.setState({
                phone: false
            })
        } else {
            this.setState({
                phone: true
            })
        }

    }

    regetPicImg() {
        alert(1)
    }

    emailHandleSubmit = (e) => {
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
                this.props.login()
            }
        });
    }
    phoneHandleSubmit = (e) => {
        console.log(444444, this.props.form)
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
                this.props.login()
            }
        });
    }

    render() {

        if (this.props.user.account) {
            message.success("登录成功", 3, () => {
                this.props.history.pushState(null, '/')
            })
        }
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.box}>
                    <div className={style.boxContent}>
                        <ul className={style.boxContentLeft}>
                            <UserShow/>
                        </ul>
                        <div className={style.boxContentRight}>

                            <div className={style.content1}>
                                    <span className={style.llctitle}>
                                        欢迎来到币點點、请登录
                                        <a className={style.llctitleA} onClick={this.phem.bind(this)}
                                           href="javascript:void (0)">{this.state.phone ? '使用邮箱登录' : '使用手机登录'} &nbsp;></a>
                                    </span>


                                {
                                    !this.state.phone ? <div>
                                        <Form onSubmit={this.emailHandleSubmit}>
                                            <div className={style.perselphone}>
                                                <div className={style.selphone}>
                                                    {/*邮箱登陆*/}
                                                    <FormItem>
                                                        {getFieldDecorator('email', {
                                                            rules: [{
                                                                required: true,
                                                                initialValue: '36363@ww.com',
                                                                pattern: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                                                                message: "请输入正确格式的邮箱地址"
                                                            }],
                                                        })(
                                                            <Input className={style.inputp}
                                                                   disabled={this.state.checkNick}
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

                                                <FormItem>
                                                    <Button htmlType="submit" style={{
                                                        width: '100%',
                                                        height: 48,
                                                        marginTop: 50,
                                                        fontSize: 16,
                                                        backgroundColor: 'rgba(217,186,131,1)',
                                                        color: '#fff'
                                                    }}>{"马上登录"}</Button>
                                                </FormItem>
                                            </div>
                                        </Form>
                                    </div> : ''
                                }


                                {
                                    this.state.phone ? <div>
                                        <Form onSubmit={this.phoneHandleSubmit}>
                                            <div className={style.perselphone}>

                                                <div className={style.selphone}>
                                                    <div className={style.qh}>
                                                        <FormItem>
                                                            {getFieldDecorator('price', {
                                                                initialValue: 'da'
                                                            })(<Select onChange={this.handleCurrencyChange}>
                                                                <Option value="da">+86</Option>
                                                                <Option value="xiang">+866</Option>
                                                                <Option value="tai">+8666</Option>
                                                            </Select>)}
                                                        </FormItem>

                                                    </div>
                                                    <div className={style.phone}>
                                                        <FormItem>
                                                            {getFieldDecorator('phone', {
                                                                rules: [{
                                                                    required: true,
                                                                    initialValue: ' ',
                                                                    pattern: /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
                                                                    message: "请输入正确格式的手机号码"
                                                                }],
                                                            })(
                                                                <Input className={style.inputp}
                                                                       disabled={this.state.checkNick}
                                                                       placeholder={"请输入手机号码"} onChange={(e) => {
                                                                    this.setState({phone: e.target.value})
                                                                }}/>
                                                            )}
                                                        </FormItem>
                                                    </div>

                                                </div>
                                                <div className={style.tuxing}>
                                                    <div className={style.tx} onClick={this.regetPicImg.bind(this)}>
                                                        {this.state.picImg}

                                                    </div>
                                                    <FormItem>{getFieldDecorator('authCode', {
                                                        rules: [{required: true, message: "请输入图形验证码"}],
                                                    })(<div>
                                                        <Input onChange={(e) => {
                                                            this.setState({picCode: e.target.value})
                                                        }} className={style.inputp} placeholder={"请输入图形验证码"}/></div>
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

                                                <FormItem>
                                                    <Button htmlType="submit" style={{
                                                        width: '100%',
                                                        height: 48,
                                                        marginTop: 50,
                                                        fontSize: 16,
                                                        backgroundColor: 'rgba(217,186,131,1)',
                                                        color: '#fff'
                                                    }}>{"马上登录"}</Button>
                                                </FormItem>


                                            </div>
                                        </Form>
                                    </div> : ''
                                }

                                <div className={style.toggletab}>
                                    <Link to="/forget">
                                        <a className={style.reg1} href="javascript:void (0)">{"忘记密码？"}</a>
                                    </Link>
                                    <Link to="/register">
                                        <a className={style.reg} href="javascript:void (0)">{"注册账号"}</a>
                                    </Link>
                                    <span className={style.noacc}>
                                        {"没有账户"}？
                                </span>
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
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch)
    }
}

LoginBox = connect(mapStateToProps, mapDispatchToProps)(LoginBox)
const WrapLoginBox = Form.create()(LoginBox)
export default WrapLoginBox