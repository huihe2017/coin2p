import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Tabs,Table,Pagination,Icon} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import DButton from '../../components/button'

const TabPane = Tabs.TabPane

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

    render() {

        const columns = [{
            title: '类型',
            dataIndex: 'part',
            key: 'part',

        }, {
            title: '币种',
            dataIndex: 'coin',
            key: 'coin',
            render: text => <span>{text[0].coin}  &nbsp;&nbsp;<span className={style.tableName}>{text[1].tip}</span></span>,
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '数量',
            dataIndex: 'num',
            key: 'num',
        }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
        }, {
            title: '确定数',
            dataIndex: 'trueNum',
            key: 'trueNum',
        }];

        const data = [{
            key: '0',
            part: 'XXXXX',
            coin: [{coin:'BTC'},{tip:'FirstBlood'}],
            time: '2014/02/28 12:45',
            num: '150000',
            state: 'XXXXX',
            trueNum:'XXXXX'
        },{
            key: '1',
            part: 'XXXXX',
            coin:[{coin:'BTC'},{tip:'FirstBlood'}],
            time: '2014/02/28 12:45',
            num: '150000',
            state: 'XXXXX',
            trueNum:'XXXXX'
        },{
            key: '2',
            part: 'XXXXX',
            coin: [{coin:'BTC'},{tip:'FirstBlood'}],
            time: '2014/02/28 12:45',
            num: '150000',
            state: 'XXXXX',
            trueNum:'XXXXX'
        },{
            key: '3',
            part: 'XXXXX',
            coin: [{coin:'BTC'},{tip:'FirstBlood'}],
            time: '2014/02/28 12:45',
            num: '150000',
            state: 'XXXXX',
            trueNum:'XXXXX'
        },];




        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.wlopContentC}>
                            <div className={style.header}>
                                <div className={style.headerC}>
                                    <span className={style.headerTT}>
                                        充值提币记录
                                    </span>
                                </div>
                                <div className={style.headerC}>
                                    <span className={style.headerCL}>
                                        展示常用币种，如需查询特殊币种请点击搜索
                                    </span>
                                </div>
                            </div>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="全部" key="1">
                                    <div className={style.realTable}>
                                        <div className={style.inp}>
                                            <Input placeholder="搜索您要查询的币种" suffix={<Icon type="search" />}/>
                                        </div>

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

export default EmailCheck