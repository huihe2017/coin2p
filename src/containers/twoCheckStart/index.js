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

const FormItem = Form.Item;

class TwoSBack extends React.Component {
    constructor() {
        super()
        this.state = {
            phone:false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(values)
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
                message.success("登录成功")
            }
        });
    }

    render() {
        const { getFieldDecorator} = this.props.form;

        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <TitleBack wid={96} word={'两步验证'}/>
                        <div className={style.wlopContentC}>
                            <span className={style.wlopContentCTT} >
                                为了您资产的安全性。在提取资产时，您必须先行在本站上绑定二步验证，确保未来提币上的安全。
                            </span>
                            <a className={style.wlopContentCTA} href="">
                                什么是两步验证？
                            </a>
                        </div>

                        <div className={style.partOne}>
                            <span className={style.partOneT}>
                                第一步
                            </span>
                            <span className={style.partOneC}>
                                使用 <a className={style.partOneA} href="">身份宝</a> 完成两步验证的绑定
                            </span>
                        </div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <div className={style.partOne}>
                                <span className={style.partOneT}>
                                    第二步
                                </span>
                                <span className={style.partOneC}>
                                    用两步验证软件扫描以下二维码或将密文手动添加到验证器中
                                </span>
                                <img src={require('./images/Qcode.png')} className={style.partOneImg} alt=""/>
                                <div className={style.inp}>
                                    <span  className={style.inpTip}>
                                        密文
                                    </span>
                                    <FormItem>
                                        {getFieldDecorator('miWord', {
                                            rules: [{ required: true, message: ' ',pattern: /^[a-zA-Z0-9]*$/, }]
                                        })(
                                            <Input  className={style.inputp} placeholder="请输入动态密码" />
                                        )}
                                    </FormItem>
                                </div>
                                <span className={style.tip}>
                                    <span className={style.red}>
                                        重要提示：请您抄写密文进行备份，以便在需要恢复的时候使用。请务必妥善保管密文，防止泄漏。
                                    </span>
                                </span>
                            </div>
                            <div className={style.partOne}>
                                <span className={style.partOneT}>
                                    第三步
                                </span>
                                <span className={style.partOneC}>
                                    输入两步验证软件上的动态密码完成绑定
                                </span>
                                <div className={style.inp}>
                                    <FormItem>
                                        {getFieldDecorator('code', {
                                            rules: [{ required: true, message: ' ',pattern: /^[0-9]*$/, }]
                                        })(
                                            <Input  className={style.inputp} placeholder="请输入动态密码" />
                                        )}
                                    </FormItem>

                                </div>
                                <span className={style.tip}>
                                    请确保装有验证器设备的「日期与时间」设置打开「自动设置」，或者与 <a className={style.partOneA} href="">https://time.is </a> 时间一致
                                </span>
                            </div>

                            <div className={style.but}>
                                <FormItem>
                                    <Button htmlType="submit">启用两步验证</Button>
                                </FormItem>
                            </div>


                        </Form>
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

TwoSBack = connect(mapStateToProps, mapDispatchToProps)(TwoSBack)
const WrapTwoSBack = Form.create()(TwoSBack)
export default WrapTwoSBack