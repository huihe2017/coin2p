import React from 'react'
import style from './index.css'
import {DatePicker, Col,Input,Select,Form,Button,message,Tabs,Table,Pagination,Icon} from 'antd';
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
            online:true
        }
    }

    callback(key) {
        console.log(key);
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            console.log(fieldsValue);
            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            const rangeTimeValue = fieldsValue['range-time-picker'];
            const values = {
                ...fieldsValue,
                'start': fieldsValue['start'].format('YYYY-MM-DD'),
                'end': fieldsValue['end'].format('YYYY-MM-DD'),
            };
            console.log('Received values of form: ', values);
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [{
            title: '订单号',
            dataIndex: 'orderNum',
            key: 'orderNum',
            width:170,
            render:text=><div>
                <div className={style.tdHead}>
                    {text[0].time}
                </div>
                <div className={style.tdContent}>
                    {text[1].orderNum}
                </div>
                <div className={style.tdBottom}>

                </div>
            </div>
        }, {
            title: '单价',
            dataIndex: 'price',
            key: 'price',
            width:170,
            render:text=><div>
                <div className={style.tdHead}>

                </div>
                <div className={style.tdContent}>
                    {text} CNY
                </div>
                <div className={style.tdBottom}>

                </div>
            </div>
        },  {
            title: '数量',
            dataIndex: 'num',
            key: 'num',
            width:280,
            render:text=><div>
                <div className={style.tdHead}>

                </div>
                <div className={style.tdContent}>
                    {text[0].part=='sell'?<span style={{color:'#4ADB88'}}>卖</span>:<span style={{color:'#FF6060'}}>买</span>      } {text[1].num} BTC
                </div>
                <div className={style.tdBottom}>

                </div>
            </div>
        }, {
            title: '总价',
            dataIndex: 'total',
            key: 'total',
            width:160,
            render:text=><div>
                <div className={style.tdHead}>

                </div>
                <div className={style.tdContent}>
                    {text} CNY
                </div>
                <div className={style.tdBottom}>

                </div>
            </div>
        }, {
            title: <span>手续费 <a className={style.gold} href="">【查看折扣】</a></span>,
            dataIndex: 'procedure',
            key: 'procedure',
            width:160,
            render:text=><div>
                <div className={style.tdHead}>

                </div>
                <div className={style.tdContent}>
                    {text}
                </div>
                <div className={style.tdBottom}>

                </div>
            </div>
        }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            width:150,
            render:text=><div>
                <div className={style.tdHead}>

                </div>
                <div className={style.tdContent}>
                    {text}
                </div>
                <div className={style.tdBottom}>

                </div>
            </div>
        }, {
            title: '操作',
            dataIndex: 'do',
            key: 'do',
            render:text=><div>
                <div className={style.tdHead}>
                    <span className={style.tdName}>
                        {text[0].name}
                    </span><img className={style.tdImg} src={require('./images/chat.png')} alt=""/>
                </div>
                <div className={style.tdContent}>
                    <a href="" className={style.gold}><b>查看详情</b></a>
                </div>
                <div className={style.tdBottom}>

                </div>
            </div>
        }];

        const data = [
            {
                key:0,
                orderNum:[{time:'2018-05-03 18:08'},{orderNum:'12a68062-659a'}],
                price:'47.355',
                num:[{part:'sell'},{num:'0.02111'}],
                total:'1.000',
                procedure:0,
                state:'已取消',
                do:[{name:'大飞机'}]
            },{
                key:1,
                orderNum:[{time:'2018-02-03 18:08'},{orderNum:'81awr062-659a'}],
                price:'47.355',
                num:[{part:'buy'},{num:'0.021709'}],
                total:'3.000',
                procedure:0,
                state:'已取消',
                do:[{name:'大大飞机'}]
            },{
                key:2,
                orderNum:[{time:'2018-02-03 18:08'},{orderNum:'81awr062-659a'}],
                price:'47.355',
                num:[{part:'buy'},{num:'0.021709'}],
                total:'3.000',
                procedure:0,
                state:'已取消',
                do:[{name:'大大飞机'}]
            },{
                key:3,
                orderNum:[{time:'2018-02-03 18:08'},{orderNum:'81awr062-659a'}],
                price:'47.355',
                num:[{part:'buy'},{num:'0.021709'}],
                total:'3.000',
                procedure:0,
                state:'已取消',
                do:[{name:'大大飞机'}]
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
                                        查看全部订单
                                    </span>
                                </div>
                            </div>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="全部" key="1">
                                    <div className={style.realTable}>
                                        <div className={style.inp}>
                                            <Input placeholder="搜索您要查询的币种" suffix={<Icon type="search" />}/>
                                        </div>
                                        <div className={style.inpTime}>
                                            <Form onSubmit={this.handleSubmit}>
                                                <Col span={8}>
                                                    <FormItem>
                                                        {getFieldDecorator('start', {
                                                            rules: [{ type: 'object', required: true, message: ' ' }],
                                                        })(
                                                            <DatePicker  format="YYYY-MM-DD" />
                                                        )}
                                                    </FormItem>
                                                </Col>
                                                <Col span={2}>
        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' ,lineHeight:'28px'}}>
          -
        </span>
                                                </Col>
                                                <Col span={8}>
                                                    <FormItem>
                                                        {getFieldDecorator('end', {
                                                            rules: [{ type: 'object', required: true, message: ' ' }],
                                                        })(
                                                            <DatePicker  format="YYYY-MM-DD" />
                                                        )}
                                                    </FormItem>
                                                </Col>
                                                <Col span={6}>
                                                    <FormItem>
                                                        <div className={style.but}>
                                                            <Button type="primary" htmlType="submit">
                                                                确定
                                                            </Button>
                                                        </div>

                                                    </FormItem>
                                                </Col>
                                            </Form>
                                        </div>
                                        <table className={style.partTable}>
                                            <tr>
                                                <td>
                                                    分类
                                                </td>
                                                <td>
                                                    <a href="" className={style.itemA}>全部</a><a href="" className={style.item}>买单</a><a href="" className={style.item}>卖单</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    评价类型
                                                </td>
                                                <td>
                                                    <a href=""  className={style.item}>交易中</a><a href="" className={style.item}>已完成</a><a href="" className={style.item}>已取消</a>
                                                    <div className={style.butR}>
                                                        <Button>将当前结果导出为CSV</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <Table columns={columns} dataSource={data} />
                                        <div className={style.page}>
                                            <div className={style.pages}>
                                                <Pagination defaultCurrent={1} total={1000} showSizeChanger
                                                            onShowSizeChange={this.onShowSizeChange}/>
                                            </div>

                                            {/*<div className={style.evePage}>*/}
                                            {/*每页展示条 共<span>100</span>条*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="BTC" key="2">
                                    lal
                                </TabPane>

                                <TabPane tab="ETH" key="3">
                                    lalalal
                                </TabPane>
                                <TabPane tab="LTC" key="4">
                                    lalalal
                                </TabPane>
                            </Tabs>
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