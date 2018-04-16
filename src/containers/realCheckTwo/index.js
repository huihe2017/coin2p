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


const FormItem = Form.Item;

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            phone:false
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
                            <span className={style.wlopContentCTT}>
                                    开始验证文档
                                </span>
                            <a className={style.wlopContentCTA} href="">
                                帮助？
                            </a>
                        </div>
                        <div className={style.wlopContentB}>
                            <div className={style.wlopContentCT}>
                                <span className={style.helpWord}>
                                    如需开始此验证，请准备好您的ID
                                </span>
                                <span className={style.helpWordB}>
                                    请单击下方按钮继续。如需更多帮助，请随时单击右上角的【帮助】按钮！
                                </span>
                                <div className={style.but}>
                                    <Link to={'/realCheckSelect'} >
                                        <DButton width={120} height={36} size={14} word={'开始验证'}/>
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