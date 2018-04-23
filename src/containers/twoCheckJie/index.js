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
                        <img className={style.twoImg} src={require('./images/twoStep.png')} alt=""/>
                        <span className={style.twoTipT}>
                           Authy / Google Authentication
                        </span>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <div className={style.inp}>
                                <FormItem>
                                    {getFieldDecorator('code', {
                                        rules: [{ required: true, message: ' ',pattern: /^[0-9]*$/, }]
                                    })(
                                        <Input  className={style.inputp} placeholder="请输入动态密码" />
                                    )}
                                </FormItem>
                                <span className={style.tip}>
                                    请确保电脑，手机的时间一致 （精确到秒） ，否则动态密码可能会错误
                                </span>
                            </div>
                            <div className={style.but}>
                                <FormItem>
                                    <Button  htmlType="submit">确认解绑</Button>
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