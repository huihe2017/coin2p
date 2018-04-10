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

class ForgetBox extends React.Component {
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
            }else {
                message.error("填写不完善")
            }
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
                            忘记密码
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

                                        <FormItem>
                                            <Button htmlType="submit" style={{width: '100%', height: 48, marginTop: 50,fontSize:16,backgroundColor:'rgba(217,186,131,1)',color:'#fff'}}>{"发送重置密码邮件"}</Button>
                                        </FormItem>

                                        <div className={style.toggletab}>
                                           <span className={style.noacc1}>
                                        {"已有账户 "}、
                                            </span>
                                            <a className={style.reg1} href="javascript:void (0)">{"直接登陆"}</a>

                                            <a className={style.reg} href="javascript:void (0)">{"注册账号"}</a>
                                            <span className={style.noacc}>
                                        {"没有账户"}？
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

ForgetBox = connect(mapStateToProps, mapDispatchToProps)(ForgetBox)
const WrapForgetBox = Form.create()(ForgetBox)
export default WrapForgetBox