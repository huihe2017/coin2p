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

const data = [
    {
        key: '1',
        name:[{name:'大大大飞机'},{weChat:true,bank:true,pay:true}],
        dealTime:2,
        goodPer:'100.00',
        evaluate:[{good:1,bad:1}],
        floatPrice:59590.27,
        dealQuota: [{quota1:0.3,quota2:0.5}],
        deadline:'15分钟',
        state:1
    },
];

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            verify:false,
            check1:true,
            check2:true,
            check3:false,
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

    adState(){
        if(data[0].state==1){
            return(<div className={style.butBox}>
                <div className={style.but1}>
                    <Button>修改广告</Button>
                </div>
                <div className={style.but1}>
                    <Button>去广告页列表</Button>
                </div>
                <div className={style.but} >
                    <DButton width={160} height={36} word={'下架广告'} size={14} />
                </div>
            </div>)
        }else if(data[0].state==2){
            return(<div className={style.butBox}>
                <div className={style.but1}>
                    <Button>修改广告</Button>
                </div>
                <div className={style.but1}>
                    <Button>去广告页列表</Button>
                </div>
                <div className={style.but} >
                    <DButton width={160} height={36} word={'重新上架'} size={14} />
                </div>
            </div>)
        }else if(data[0].state==3){
            return(<div className={style.butBox}>
                <div className={style.but1}>
                    <Button>修改广告</Button>
                </div>
                <div className={style.but1}>
                    <Button>去广告页列表</Button>
                </div>
            </div>)
        }
            }

    render() {

        const { getFieldDecorator } = this.props.form;
        const columns = [
            {
                title: <span className={style.tableT}>用户名</span>,
                dataIndex: 'name',
                width:250,
                key: 'name',
                render: text => <span>{text[0].name}
                    <span className={style.tableName}>
                        <img hidden={!text[1].pay} src={require('../../components/sellPart/images/pay.png')} alt=""/>
                        <img hidden={!text[1].bank} src={require('../../components/sellPart/images/bank.png')} alt=""/>
                        <img hidden={!text[1].weChat} src={require('../../components/sellPart/images/wechat.png')} alt=""/>
                    </span>
                </span>,
            }, {
                title: <span className={style.tableT}>交易次数</span>,
                dataIndex: 'dealTime',
                width:130,
                key: 'dealTime',
            }, {
                title: <span className={style.tableT}>好评度</span>,
                dataIndex: 'goodPer',
                width:110,
                key: 'goodPer',
                render: text => <span>{text}%</span>,
            }, {
                title: <span className={style.tableT}>评价数</span>,
                dataIndex: 'evaluate',
                width:150,
                key: 'evaluate',
                render:text=><span>+{text[0].good}/-{text[0].bad}</span>
            }, {
                title: <span className={style.tableT}>浮动单价</span>,
                dataIndex: 'floatPrice',
                width:190,
                key: 'floatPrice',
                render:text=><span>{text} CNY/BTC</span>
            }, {
                title: <span className={style.tableT}>交易限额</span>,
                dataIndex: 'dealQuota',
                width:200,
                key: 'dealQuota',
                render:text=><span>{text[0].quota1}~{text[0].quota2}BTC</span>
            },{
                title: <span className={style.tableT}>付款期限</span>,
                dataIndex: 'deadline',
                width:100,
                key: 'deadline',
                render:text=><span>{text}</span>
            },{
                title: '',
                dataIndex: 'state',
                key: 'state',
                render:text=>{if(text==1){
                    return(<div className={style.stateBox1}>
                        已下架该广告
                    </div> )
                }else if(text==2){
                    return(<div className={style.stateBox2}>
                        已过期该广告
                    </div> )
                }else if(text==3){
                    return(<div className={style.stateBox3}>
                        已上架该广告
                    </div> )
                }}
            },
        ]



        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.wlopContentC}>
                            <div className={style.header}>
                                <div className={style.headerC}>
                                    <span className={style.headerTT}>
                                        广告详情
                                    </span>
                                    <span className={style.back}>
                                        广告将在 2018-05-05  00：16 到期
                                    </span>
                                </div>
                                <div className={style.headerC}>
                                    <div className={style.headerCL}>
                                        <span className={style.headerCB}>
                                        交易说明:
                                    </span>
                                        <span className={style.headerCR}>
                                        1. 订单有效期为15分钟，付款需要些许时间，请您耐心等待 <br/>
2. 下单后请及时留下您的收款方式，请务必仔细确认您的收款账号是否正确，给错资料自行承担损失

                                    </span>
                                    </div>

                                    <a className={style.look} href="javascript:void (0)">
                                        复制广告链接
                                    </a>
                                </div>
                            </div>

                            <div className={style.content}>
                                <div className={style.realTable}>
                                    <Table columns={columns} dataSource={data}/>
                                </div>
                                <div className={style.contentInpBox}>
                                    <div className={style.contentInpBoxH}>
                                        注意事项
                                    </div>
                                    <div className={style.contentInpBoxC}>
                                        <span className={style.contentInpBoxS}>
                                            1. 交易发起前，请您确认已阅读并同意买家提出的条款，并再次确认交易内容无误后，再点击出售按钮。<br/>
2. 交易发起后，请您尽快将您的收款账户发送给买家，务必使用站内聊天系统，避免资料外泄。<br/>
3. 交易发起后，系统会自动将您的数字货币锁定，待买家转账完成并确认后，请您确认指定的收款账户是否入帐，并点击<a className={style.spanA} href="">释放数字币</a>完成交易。<br/>
4. 建议您在交易前先查看买家信息，检视相关交易记录及评价，以減少交易纠纷。<br/>
5. 交易过程请使用平台的聊天系统进行沟通，平台外的对话记录将无法作为交易纠纷的依据。<br/>
6. <span className={style.red}>超过三笔取消订单，将被冻结当天下单权限。
</span>
                                        </span>

                                    </div>
                                </div>
                                <div className={style.contentInpBox}>
                                    <div className={style.contentInpBoxH}>
                                        温馨提示
                                    </div>
                                    <div className={style.contentInpBoxC}>
                                        <span className={style.contentInpBoxS}>
                                            <span className={style.spanIcon} hidden={this.state.check1}>
                                                <Icon type="exclamation-circle" />
                                            </span>
                                            <span className={style.spanIcon} hidden={!this.state.check1}>
                                                <Icon type="check" />
                                            </span> &nbsp;通过邮箱验证，单笔购买限额：1000 CNY，购买总额上限：3000 CNY，无法出售数字币<a href="" className={style.gold} hidden={this.state.check1}> (前往进阶验证)</a>
                                        </span>
                                        <span  className={style.contentInpBoxS}>
                                            <span className={style.spanIcon} hidden={this.state.check2}>
                                                <Icon type="exclamation-circle" />
                                            </span>
                                            <span className={style.spanIcon} hidden={!this.state.check2}>
                                                <Icon type="check" />
                                            </span> &nbsp;通过实名验证，单笔交易限额：50000 CNY<a href="" className={style.gold} hidden={this.state.check2}> (前往进阶验证)</a>
                                        </span>
                                        <span className={style.contentInpBoxS}>
                                            <span className={style.spanIcon} hidden={this.state.check3}>
                                                <Icon type="exclamation-circle" />
                                            </span>
                                            <span className={style.spanIcon} hidden={!this.state.check3}>
                                                <Icon type="check" />
                                            </span> &nbsp;通过进阶验证，单笔交易限额：不限制<a href="" className={style.gold} hidden={this.state.check3}> (前往进阶验证)</a>

                                        </span>
                                        <span className={style.contentInpBoxS}>
                                            若您想购买的金额大于目前单笔限额，可先通过验证再回来下单。
                                        </span>

                                    </div>
                                </div>
                                {
                                    this.adState()
                                }

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