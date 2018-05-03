import React from 'react'
import style from './index.css'
import {DatePicker,Checkbox, Col,Input,Select,Form,Button,message,Tabs,Table,Pagination,Icon,Switch} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import DButton from '../../components/button'

const TabPane = Tabs.TabPane
const FormItem = Form.Item;

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;



        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.wlopContentC}>
                            <div className={style.header}>
                                <div className={style.headerC}>
                                    <span className={style.headerTT}>
                                        编辑 OTB 提币地址
                                    </span>
                                    <a className={style.back} href="javascript:void (0)">
                                        <img src={require('../../components/titleBack/images/back.png')} alt=""/>
                                        返回我的账号
                                    </a>
                                </div>
                            </div>
                            <Form onSubmit={this.handleSubmit}>
                                <div className={style.content}>
                                    <div className={style.contentInp}>
                                        <div className={style.inp}>
                                            <span className={style.inpTip}>
                                                地址标签
                                            </span>
                                            <FormItem>
                                                {getFieldDecorator('num', {
                                                    rules: [{ required: true, message: ' ' }],
                                                })(
                                                    <Input placeholder="例如：average" />
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inp}>
                                            <span className={style.inpTip}>
                                                提币地址
                                            </span>
                                            <FormItem>
                                                {getFieldDecorator('remark', {
                                                    rules: [{ required: true, message: ' ' }],
                                                })(
                                                    <Input placeholder="提币地址" />
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>


                                    <div className={style.contentInpBox} >
                                        <div className={style.but}>
                                            <Button >
                                                取消
                                            </Button>
                                        </div>
                                        <div className={style.but1}>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                提交
                                            </Button>
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

EmailCheck = connect(mapStateToProps, mapDispatchToProps)(EmailCheck)
const WrapEmailCheck = Form.create()(EmailCheck)
export default WrapEmailCheck