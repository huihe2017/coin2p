import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Upload,Modal,Checkbox} from 'antd';
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

        }


    }




    render() {

        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <TitleBack wid={96} word={'进阶验证'}/>
                        <div className={style.wlopContentT}>
                            您的资料已经提交，后台正在审核，审核时间为1-3个工作日
                        </div>
                        <div className={style.wlopContentC}>
                            <div className={style.wlopContentCItems}>
                                <span className={style.wlopContentCItemT}>
                                    真实姓名
                                </span>
                                <span className={style.wlopContentCItemB}>
                                    飞机
                                </span>
                            </div>
                            <div className={style.wlopContentCItems}>
                                <span className={style.wlopContentCItemT}>
                                    身份证号码
                                </span>
                                <span className={style.wlopContentCItemB}>
                                    123456789123456789
                                </span>
                            </div>
                            <div className={style.wlopContentCItems}>
                                <span className={style.wlopContentCItemT}>
                                    开户银行
                                </span>
                                <span className={style.wlopContentCItemB}>
                                    中国银行
                                </span>
                            </div>
                            <div className={style.wlopContentCItems}>
                                <span className={style.wlopContentCItemT}>
                                    开户卡号
                                </span>
                                <span className={style.wlopContentCItemB}>
                                    123456789123456789
                                </span>
                            </div>
                        </div>
                        <div className={style.wlopContentB}>
                            <div className={style.wlopContentBItems}>
                                <span className={style.wlopContentCItemT}>
                                    真实姓名
                                </span>
                                <img className={style.wlopContentBImg} src={require('./images/reset.png')} alt=""/>

                            </div>
                            <div className={style.wlopContentBItems}>
                                <span className={style.wlopContentCItemT}>
                                    真实姓名
                                </span>
                                <img className={style.wlopContentBImg} src={require('./images/reset.png')} alt=""/>

                            </div>
                            <div className={style.wlopContentBItems}>
                                <span className={style.wlopContentCItemT}>
                                    真实姓名
                                </span>
                                <img className={style.wlopContentBImg} src={require('./images/reset.png')} alt=""/>

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

export default EmailCheck