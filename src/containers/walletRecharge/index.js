import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import Dbutton from '../../components/button';


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
            }else {
                message.error("填写不完善")
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
                        <div className={style.wlopMContentRTitle}>
                            <Link to={'/perCenter'}>
                                <a className={style.back} href="javascript:void (0)">
                                    <img src={require('../../components/titleBack/images/back.png')} alt=""/>
                                    返回我的钱包
                                </a>
                            </Link>
                        </div>
                        <img className={style.emailImg} src={require('./images/btc.png')} alt=""/>
                        <span className={style.emailContent}>
                            <b>BTC充值</b>
                        </span>
                        <span className={style.emailContent}>
                            请确认您现在需要申请一个 BTC 充值地址
                        </span>
                        <div className={style.line}></div>
                        <div className={style.formUl}>
                            <div className={style.but}>
                                <Dbutton width={120} height={36} size={14} word={'申请充值地址'}/>
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

EmailCheck = connect(mapStateToProps, mapDispatchToProps)(EmailCheck)
const WrapEmailCheck = Form.create()(EmailCheck)
export default WrapEmailCheck