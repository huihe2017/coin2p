import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Tabs,Icon,Table,Menu, Dropdown,Pagination,Radio,Checkbox,Alert } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import DButton from '../../components/button';

const FormItem = Form.Item;
const data = [
        {
            key:0,
            num:'81a68062-659a',
            sum:1.000,
            amount:0.02111109 ,
            state:'已取消'
        },{
            key:1,
            num:'81a68062-659a',
            sum:2.000,
            amount:0.24111109 ,
            state:'已完成'
        },{
            key:2,
            num:'81a68062-659a',
            sum:3.000,
            amount:0.12111109 ,
            state:'处理中'
        },{
            key:3,
            num:'81a68062-659a',
            sum:3.000,
            amount:0.12111109 ,
            state:'处理中'
        },
    ];
const data1 = [

    ];

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {

        };
    }

    render() {
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        const columns = [{
            title: <span className={style.titleName}>订单编号</span>,
            dataIndex: 'num',
            key: 'num',
            width:360,
            render:text=><span className={style.titleContent1}>{text}</span>
        }, {
            title: <span className={style.titleName}>交易金额
</span>,
            dataIndex: 'sum',
            width:350,
            key: 'sum',
            render:text=><span>{text} CNY</span>
        }, {
            title:<span className={style.titleName}>交易数量</span>,
            dataIndex: 'amount',
            width:350,
            key: 'amount',
            render:text=><span>{text} BC</span>
        }, {
            title:<span className={style.titleName}>状态</span>,
            dataIndex: 'state',
            key: 'state',
        }];
        const columns1 = [{
            title: <span className={style.titleName1}>单价</span>,
            dataIndex: 'price',
            key: 'price',
            width:230,
            render:text=><span className={style.titleContent1}>{text}</span>
        }, {
            title: <span className={style.titleName1}>数量

            </span>,
            dataIndex: 'num',
            width:230,
            key: 'num',
            render:text=><span>{text} CNY</span>
        }, {
            title:<span className={style.titleName1}>总价</span>,
            dataIndex: 'total',
            width:230,
            key: 'total',
            render:text=><span>{text} BC</span>
        }, {
            title:<span className={style.titleName1}>状态</span>,
            dataIndex: 'state',
            width:230,
            key: 'state',
        }, {
            title:<span className={style.titleName1}>操作</span>,
            dataIndex: 'do',
            key: 'do',
        }];



        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.header}>
                            <div className={style.headerT}>
                                <div className={style.headerC}>
                                    <span className={style.headerTT}>
                                        交易大堂
                                    </span>
                                </div>
                                <div className={style.headerC}>
                                    <span className={style.headerCLB}>
                                        追踪正在进行中的交易
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.partOne}>
                                <div className={style.partOneH}>
                                    近期交易记录
                                </div>
                                <div className={style.smallTable}>
                                    <Table columns={columns} dataSource={data} scroll={{ y: 120 }}/>
                                </div>
                                <div className={style.but}>
                                    <Button  onClick={()=>{alert('获取')}}>账户资金流水</Button>
                                </div>
                                <div className={style.but}>
                                    <Button  onClick={()=>{alert('获取')}}>全部订单</Button>
                                </div>
                                <div className={style.but}>
                                    <Button  onClick={()=>{alert('获取')}}>全部广告</Button>
                                </div>

                            </div>
                            <div className={style.partOne}>
                                <div className={style.partOneHeader}>
                                    <div className={style.partOneH}>
                                        交易中卖单
                                    </div>
                                    <img src={require('./images/refresh.png')} className={style.partOneHT} onClick={()=>{alert('刷新')}} alt=""/>
                                </div>

                                <div className={style.bigTable}>
                                    <Table columns={columns1} dataSource={data1} />
                                </div>
                            </div>

                            <div className={style.partOne}>
                                <div className={style.partOneHeader}>
                                    <div className={style.partOneH}>
                                        交易中卖单
                                    </div>
                                    <img src={require('./images/refresh.png')} className={style.partOneHT} onClick={()=>{alert('刷新')}} alt=""/>
                                </div>
                                <div className={style.bigTable}>
                                    <Table columns={columns1} dataSource={data1} />
                                </div>
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