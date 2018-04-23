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
import Countdown from '../../components/countdown'

const FormItem = Form.Item;
const Option = Select.Option;

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            phone:false
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

    checkPhone = (getFieldError, getFieldValue) => {
        let flag = false
        this.props.form.validateFields(['phone', 'authCode'], (err) => {
            if (!err) {
                flag = true
            }
        });

        return flag
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
                message.success("邮件已发送")
            }
        });
    }

    render() {
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <TitleBack wid={96} word={'手机验证'}/>
                        <img className={style.emailImg} src={require('./images/phone.png')} alt=""/>
                        <span className={style.emailContent}>
                           <b>绑定手机</b>
                        </span>
                        <span  className={style.emailContentb}>
                           填入手机号后，选择发送验证码，将短信收到的验证码，填入后再选择绑定
                        </span>
                        <div className={style.line}></div>
                        <div className={style.formUl}>
                            <Form onSubmit={this.handleSubmit}>
                                <div className={style.selphone}>
                                    <div className={style.qh}>
                                        <FormItem >
                                            {getFieldDecorator('price', {
                                                initialValue:  'da' })( <Select  onChange={this.handleCurrencyChange}>
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
                                                    pattern:/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
                                                    message:"请输入正确格式的手机号码"
                                                }],
                                            })(
                                                <Input className={style.inputp} disabled={this.state.checkNick}
                                                       placeholder={"请输入手机号码"} onChange={(e) => {
                                                    this.setState({phone: e.target.value})
                                                }}/>
                                            )}
                                        </FormItem>
                                    </div>

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
                                <div className={style.tuxing}>
                                    <FormItem>{getFieldDecorator('code', {rules: [{required: true, message: '请输入短信验证码!'
                                        }],})(<div>
                                        <Countdown h={36}
                                            beforeClick={() => {return this.checkPhone(getFieldError, getFieldValue)}} phone={this.state.phone} picCode={this.state.authCode} business='REGISTER' failCallback={() => {
                                            this.setState({picImg: this.regetPicImg()})
                                        }} type="small" onChange={(e) => {this.setState({code: e.target.value})}}/>
                                    </div>)}
                                    </FormItem>
                                </div>
                                <div className={style.but}>
                                    <FormItem>
                                        <Button htmlType="submit" style={{height: this.props.h?this.props.h:36, width:240}}>确认绑定</Button>
                                    </FormItem>
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

EmailCheck = connect(mapStateToProps, mapDispatchToProps)(EmailCheck)
const WrapEmailCheck = Form.create()(EmailCheck)
export default WrapEmailCheck