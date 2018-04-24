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
            title: '创建时间',
            dataIndex: 'time',
            key: 'time',
            width:160
        }, {
            title: '广告种类',
            dataIndex: 'adPart',
            key: 'adPart',
            width:160
        }, {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            width:130
        }, {
            title: '交易限额',
            dataIndex: 'dealPrice',
            key: 'dealPrice',
            width:180
        }, {
            title: '交易方式',
            dataIndex: 'dealPart',
            key: 'dealPart',
            width:160
        }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            width:90
        }, {
            title: '成交量',
            dataIndex: 'dealNum',
            key: 'dealNum',
            width:100
        }, {
            title: '操作',
            dataIndex: 'do',
            key: 'do',
        }];

        const data = [{
            key: '0',
            time: '2014/02/28 12:45',
            adPart: 'BTC',
            price: '10000',
            dealPrice: '12000',
            dealPart: 'XXXXX',
            state:'XXXX',
            dealNum: 'XXXXX',
            trueNum:'XXXXX',
            do:'XXXX'
        }];




        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.wlopContentC}>
                            <div className={style.header}>
                                <span className={style.headerTT}>
                                    我的广告
                                </span>
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