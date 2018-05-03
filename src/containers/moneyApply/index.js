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
            verify:false
        }
    }

    callback(key) {
        console.log(key);
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
        const columns = [
            {
                title: <span className={style.tableT}>币种</span>,
                dataIndex: 'part',
                width:170,
                key: 'part',
                render: text => <span>{text[0].coin}  &nbsp;&nbsp;<span className={style.tableName}>{text[1].tip}</span></span>,
            }, {
                title: <span className={style.tableT}>地址标签</span>,
                dataIndex: 'tag',
                width:170,
                key: 'tag',
            }, {
                title: <span className={style.tableT}>提币地址</span>,
                dataIndex: 'address',
                width:660,
                key: 'address',
            }, {
                title: <span className={style.tableT}>账户余额</span>,
                dataIndex: 'balance',
                key: 'balance',
                render:text=><span>{text} OTB</span>
            },
            ]

        const data = [
            {
                key: '1',
                part: [{coin:'BTC'},{tip:'FirstBlood'}],
                tag: 'XXX',
                address: 'XXXXXX',
                balance: '12.660042912',
            },
        ];


        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.wlopContentC}>
                            <div className={style.header}>
                                <div className={style.headerC}>
                                    <span className={style.headerTT}>
                                        提交 OTB 提币申请
                                    </span>
                                    <a className={style.back} href="javascript:void (0)">
                                        <img src={require('../../components/titleBack/images/back.png')} alt=""/>
                                        返回我的账号
                                    </a>
                                </div>
                                <div className={style.headerC}>
                                    <div className={style.headerCL}>
                                        <span className={style.headerCB}>
                                        提笔请求一旦发送区块链网络中，便不可撤回
                                    </span>
                                        <span className={style.headerCR}>
                                        发起提币后，需要通过短信认证后，才可以发送到区块链网络中
                                    </span>
                                    </div>

                                    <a className={style.look} href="javascript:void (0)">
                                        查看矿工费详情
                                    </a>
                                </div>
                            </div>
                            <Form onSubmit={this.handleSubmit}>
                                <div className={style.content}>
                                    <div className={style.realTable}>
                                        <Table columns={columns} dataSource={data}/>
                                    </div>
                                    <div className={style.contentInpBox}>
                                        <div className={style.contentInpBoxH}>
                                            提币消耗 2.5 OTB 矿工费，将从提币数量里扣除 / 单次提币数量不可小于 2.5 OTB
                                        </div>
                                        <div className={style.contentInpBoxC}>
                                            <span className={style.contentInpBoxS}>
                                                当前可提币数量： 12.66004273 OTB
                                            </span>
                                            <div className={style.contentInp}>
                                                <div className={style.inp}>
                                                    <FormItem>
                                                        {getFieldDecorator('num', {
                                                            rules: [{ required: true, message: ' ' }],
                                                        })(
                                                            <Input placeholder="提币数量（提币数量扣除矿工费）" />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className={style.inp1}>
                                                    <FormItem>
                                                        {getFieldDecorator('remark', {
                                                            rules: [{ required: true, message: ' ' }],
                                                        })(
                                                            <Input placeholder="提币备注" />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.contentInpBox}>
                                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                                            <TabPane tab="两步验证" key="1">
                                                <div hidden={!this.state.verify}>
                                                    <div className={style.inp}>
                                                        <FormItem>
                                                            {getFieldDecorator('code', {
                                                                rules: [{ required: true, message: ' ' }],
                                                            })(
                                                                <Input placeholder="验证码" />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className={style.butt}>
                                                        <div className={style.buttTip}>
                                                        </div>
                                                        <div className={style.buttTip}>
                                                            <FormItem>
                                                                {getFieldDecorator('promise', {
                                                                    rules: [{ required: true, message: ' ' ,initialValue: false,}],
                                                                })(
                                                                    <Checkbox><span className={style.promiseTip}>
                                                                我承诺我已确认此笔提币申请信息正确，并再次确认提币地址正确，如若提币地址错误，风险自行承担
                                                            </span></Checkbox>
                                                                )}
                                                            </FormItem>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={style.checkTip} hidden={this.state.verify}>
                                                    您尚未进行两步验证 <a href="">前去验证</a>
                                                </div>
                                            </TabPane>
                                            <TabPane tab="手机短信验证" key="2">
                                                <div hidden={!this.state.verify}>
                                                    <div className={style.inp}>
                                                        <FormItem>
                                                            {getFieldDecorator('phoneCode', {
                                                                rules: [{ required: true, message: ' ' }],
                                                            })(
                                                                <Input placeholder="验证码" />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className={style.buttt}>
                                                        <DButton width={120} height={36} word={'发送验证码'} size={14} ghost={true}/>
                                                    </div>
                                                    <div className={style.butt}>
                                                        <div className={style.buttTip}>
                                                            <span className={style.buttTips}>
                                                                验证码将发送至已绑定手机号码：18618661866
                                                            </span>
                                                        </div>
                                                        <div className={style.buttTip}>
                                                            <FormItem>
                                                                {getFieldDecorator('promise', {
                                                                    rules: [{ required: true, message: ' ' ,initialValue: false,}],
                                                                })(
                                                                    <Checkbox><span className={style.promiseTip}>
                                                                    我承诺我已确认此笔提币申请信息正确，并再次确认提币地址正确，如若提币地址错误，风险自行承担
                                                                </span></Checkbox>
                                                                )}
                                                            </FormItem>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={style.checkTip} hidden={this.state.verify}>
                                                    您尚未进行两步验证 <a href="">前去验证</a>
                                                </div>
                                            </TabPane>
                                        </Tabs>
                                    </div>
                                    <div className={style.contentInpBox} hidden={!this.state.verify}>
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