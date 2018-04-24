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
                            <span className={style.headerTT}>
                                数据统计
                            </span>
                            <span className={style.headerCLB}>
                                追踪每周交易数据，提升交易效率
                            </span>

                        </div>
                        <div className={style.content}>
                            <span className={style.contentT}>
                                总资产 ≈ {0} CNY
                            </span>
                            <div className={style.contentC}>
                                <div className={style.contentCL}>
                                    <span className={style.contentCLT}>
                                        卖出
                                    </span>
                                    <div className={style.contentCLC}>
                                        <div className={style.contentCLCT}>
                                            <img src={require('./images/juxing.png')} alt=""/><span className={style.word}>本周交易【卖出】</span>
                                        </div>
                                        <div className={style.contentCLCC}>
                                            暂无交易
                                        </div>
                                    </div>
                                    <div className={style.contentCLC}>
                                        <div className={style.contentCLCT}>
                                            <img src={require('./images/juxing.png')} alt=""/><span className={style.word}>本周交易【卖出】</span>
                                        </div>
                                        <div className={style.contentCLCC}>
                                            暂无交易
                                        </div>
                                    </div>
                                </div>
                                <div className={style.contentCR}>
                                    <span className={style.contentCLT}>
                                        买入
                                    </span>
                                    <div className={style.contentCLC}>
                                        <div className={style.contentCLCT}>
                                            <img src={require('./images/circle.png')} alt=""/><span className={style.word}>本周交易【买入】</span>
                                        </div>
                                        <div className={style.contentCLCC}>
                                            暂无交易
                                        </div>
                                    </div>
                                    <div className={style.contentCLC}>
                                        <div className={style.contentCLCT}>
                                            <img src={require('./images/circle.png')} alt=""/><span className={style.word}>本周交易【买入】</span>
                                        </div>
                                        <div className={style.contentCLCC}>
                                            暂无交易
                                        </div>
                                    </div>

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