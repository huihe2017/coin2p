import React from 'react'
import style from './index.css'
import {DatePicker, Col,Input,Select,Form,Button,message,Tabs,Table,Pagination,Icon,Switch} from 'antd';
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
            online:true,
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
        }
    }

    callback(key) {
        console.log(key);
    }

    onChange(checked) {
        console.log(`switch to ${checked}`);
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render() {
        const { loading, selectedRowKeys } = this.state;
        const { getFieldDecorator } = this.props.form;
        const columns = [ {
            title: '创建时间',
            dataIndex: 'time',
            width:160,
            key: 'time',
        }, {
            title: '广告类型',
            dataIndex: 'adPart',
            width:100,
            key: 'adPart',
        }, {
            title: '价格',
            dataIndex: 'price',
            width:170,
            key: 'price',
            render:text=> <span>
                {text} CNY/BTC
            </span>
        }, {
            title: '交易限额',
            dataIndex: 'quota',
            width:130,
            key: 'quota',
            render:text=> <span>
                {text[0].quota1}-{text[1].quota2} BTC
            </span>
        }, {
            title: '交易方式',
            dataIndex: 'dealPart',
            width:100,
            key: 'dealPart',
            render:text=> <span className={style.payPart}>
                <img src={require('../../components/sellPart/images/wechat.png')} alt=""/>
                <img src={require('../../components/sellPart/images/bank.png')} alt=""/>
                <img src={require('../../components/sellPart/images/pay.png')} alt=""/>
            </span>
        }, {
            title: '状态',
            dataIndex: 'state',
            width:66,
            key: 'state',
        }, {
            title: '成交量',
            dataIndex: 'turnover',
            width:70,
            key: 'turnover',
        }, {
            title: '上/下架',
            dataIndex: 'putaway',
            width:75,
            key: 'putaway',
            render:text=><Switch defaultChecked={false} onChange={this.onChange} />
        }, {
            title: '操作',
            dataIndex: 'do',
            key: 'do',
            width:182,
            render:text=><div>
                <div className={style.butBox}>
                    <div className={style.but}>
                        <Button>查看</Button>
                    </div>
                    <div className={style.but}>
                        <Button>分享</Button>
                    </div>
                    <div className={style.but}>
                        <Button>编辑</Button>
                    </div>
                </div>

                <div className={style.butBoxB}>
                    <Button>移入回收站</Button>
                </div>
            </div>
        }];

        const data = [{
            key: '0',
            time: '2014/02/28 12:45',
            adPart:'购买广告',
            price:'15000.84',
            quota:[{quota1:0.3},{quota2:0.5}],
            dealPart:[{weChat:true},{bank:true},{pay:true}],
            state: '已下架',
            turnover: '0',

            do: 'XXXXX',
        }];

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.wlopContentC}>
                            <div className={style.header}>
                                <div className={style.headerC}>
                                    <span className={style.headerTT}>
                                        我的广告
                                    </span>
                                </div>
                                <a href=""  className={style.headerA}>
                                    <Icon type="delete" /> &nbsp;&nbsp;<b>广告回收站</b>
                                </a>
                            </div>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>

                                <TabPane tab="全部" key="1">
                                    <table className={style.partTable} >
                                        <tr>
                                            <td>
                                                分类
                                            </td>
                                            <td>
                                                <a href="" className={style.itemA}>全部广告</a><a href="" className={style.item}>普通广告</a><a href="" className={style.item}>批量交量广告</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <div className={style.realTable}>
                                        <Table columns={columns} dataSource={data}  rowSelection={rowSelection}/>
                                        <div className={style.butBack}>
                                            <Button
                                                type="primary"
                                                onClick={this.start}
                                                disabled={!hasSelected}
                                                loading={loading}
                                            >
                                                批次移入回收站
                                            </Button>
                                        </div>

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
                                    <table className={style.partTable}>
                                        <tr>
                                            <td>
                                                分类
                                            </td>
                                            <td>
                                                <a href="" className={style.itemA}>全部广告</a><a href="" className={style.item}>普通广告</a><a href="" className={style.item}>批量交量广告</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <div className={style.butBack}>
                                        <Button
                                            type="primary"
                                            onClick={this.start}
                                            disabled={!hasSelected}
                                            loading={loading}
                                        >
                                            批次移入回收站
                                        </Button>
                                    </div>
                                    <div className={style.realTable}>
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
                                <TabPane tab="ETH" key="3">
                                    <table className={style.partTable}>
                                        <tr>
                                            <td>
                                                分类
                                            </td>
                                            <td>
                                                <a href="" className={style.itemA}>全部广告</a><a href="" className={style.item}>普通广告</a><a href="" className={style.item}>批量交量广告</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <div className={style.butBack}>
                                        <Button
                                            type="primary"
                                            onClick={this.start}
                                            disabled={!hasSelected}
                                            loading={loading}
                                        >
                                            批次移入回收站
                                        </Button>
                                    </div>
                                    <div className={style.realTable}>
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
                                <TabPane tab="LTC" key="4">
                                    <table className={style.partTable}>
                                        <tr>
                                            <td>
                                                分类
                                            </td>
                                            <td>
                                                <a href="" className={style.itemA}>全部广告</a><a href="" className={style.item}>普通广告</a><a href="" className={style.item}>批量交量广告</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <div className={style.butBack}>
                                        <Button
                                            type="primary"
                                            onClick={this.start}
                                            disabled={!hasSelected}
                                            loading={loading}
                                        >
                                            批次移入回收站
                                        </Button>
                                    </div>
                                    <div className={style.realTable}>
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