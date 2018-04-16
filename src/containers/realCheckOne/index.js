import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link,browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserShow from '../../components/userShow';
import TitleBack from '../../components/titleBack';


const FormItem = Form.Item;


class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            phone:false,
            checked:false,
        }


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
                            <Form onSubmit={this.handleSubmit}>
                                <div className={style.tuxing}>
                                    <span className={style.TopTitle}>
                                        真实姓名
                                    </span>
                                    <div className={style.nick}>
                                        <FormItem>{getFieldDecorator('realName',  {rules: [{
                                                required: true,
                                                initialValue: '36363@ww.com',
                                                pattern:  /^([a-zA-Z\u4e00-\u9fa5\·]{1,10})$/,
                                                message:"请输入您的姓名！"
                                            }]})(<div>
                                            <Input onChange={
                                                (e) => {
                                                    this.setState({nickName: e.target.value})
                                                }} className={style.inputp} placeholder={"请输入您的真实姓名"}
                                                   type={'text'}/></div>
                                        )}
                                        </FormItem>
                                    </div>

                                </div>
                                <div className={style.tuxing}>
                                    <span className={style.TopTitle}>
                                        证件号码(身份证/护照）
                                    </span>
                                    <div className={style.nick}>
                                        <FormItem>{getFieldDecorator('cardNum',  {rules: [{
                                                required: true,
                                                initialValue: '36363@ww.com',
                                                pattern: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
                                                message:"请输入正确的证件号码"
                                            }]})(<div>
                                            <Input onChange={
                                                (e) => {
                                                    this.setState({nickName: e.target.value})
                                                }} className={style.inputp} placeholder={"请输入您将用作实名认证的证件号码"}
                                                   type={'text'}/></div>
                                        )}
                                        </FormItem>
                                    </div>

                                </div>
                                <div className={style.but}>
                                    <div className={style.butL}>
                                        <FormItem>
                                            <Link to={'/realCheckTwo'} >
                                                <Button htmlType="submit" style={{width: 120, height: 36, fontSize:14,backgroundColor:'rgba(217,186,131,1)',color:'#fff'}}>{"下一步"}</Button>
                                            </Link>
                                        </FormItem>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className={style.wlopContentB}>
                            <div className={style.wlopContentCT}>
                                <span className={style.wlopContentCTT}>
                                    请注意
                                </span>
                                <span className={style.wlopContentCC}>
                                币点点 本身是一个中立换币平台，提供换币服务，并未有与任何「套利平台」有合作关系。 <br/>
                                   若有任何套利平台声称与 OTCBTC 有合作关系，且声称有巨额回报， 请用户提高警觉，注意并小心各种潜在风险。
                                </span>
                                <span className={style.wlopContentCC}>
                                   若有疑问请随时咨询在线客服。
                                </span>
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