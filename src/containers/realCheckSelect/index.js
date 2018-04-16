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
import TipWord from '../../components/tipWord'

const Option = Select.Option;
const FormItem = Form.Item;

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            phone:false
        }
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }else {
                message.error('请完善您的资料')
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
                        <TitleBack wid={96} word={'实名验证'}/>


                        <div className={style.wlopContentC}>
                            <Link to={'/realCheckTwo'}>
                                <a className={style.wlopContentCTT} href="javascript:void (0)">
                                    &lt; 返回
                                </a>
                            </Link>
                            <a className={style.wlopContentCTA} href="">
                                帮助？
                            </a>
                        </div>
                        <div className={style.wlopContentB}>
                            <div className={style.wlopContentCT}>
                                <div className={style.wlopContentCTH}>
                                    <span className={style.wlopContentCTHL}>
                                        选择ID类型
                                    </span>
                                    <div className={style.wlopContentCTHR}>
                                        <span style={{float:'left',lineHeight:'36px'}}>
                                            选择发证国家/地区
                                        </span>

                                        <div style={{marginLeft:20,float:'left'}}>

                                            <Select defaultValue="china" style={{ width: 240 }} onChange={this.handleChange}>
                                                <Option value="china">中国</Option>
                                                <Option value="us">美国</Option>
                                                <Option value="uk">英国</Option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.selectPart}>
                                    <Link to={'/realCheckID'}>
                                        <div className={style.selectPartItem}>
                                            <img className={style.selectPartImg} src={require('./images/idcard.png')} alt=""/>
                                            <span className={style.selectPartItemW}>
                                                身份证
                                            </span>
                                        </div>
                                    </Link>
                                    <Link to={'/realCheckPassport'}>
                                    <div className={style.selectPartItem}>
                                        <img className={style.selectPartImg} src={require('./images/partcard.png')} alt=""/>
                                        <span className={style.selectPartItemW}>
                                            护照
                                        </span>
                                    </div>
                                    </Link>
                                </div>
                                <TipWord/>
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