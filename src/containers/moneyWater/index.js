
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


    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [ {
            title: '时间',
            dataIndex: 'time',
            width:170,
            key: 'time',
        }, {
            title: '明细',
            dataIndex: 'detail',
            width:370,
            key: 'detail',
        }, {
            title: '类型',
            dataIndex: 'part',
            width:170,
            key: 'part',
        }, {
            title: '金额',
            dataIndex: 'price',
            width:360,
            key: 'price',
        }, {
            title: '操作',
            dataIndex: 'do',
            key: 'do',
        }];

        const data = [{
            key: '0',
            time: '2014/02/28 12:45',
            detail: '150000',
            part: 'XXXXX',
            price: '150000',
            do: 'XXXXX',
        },{
            key: '1',
            time: '2014/02/28 12:45',
            detail: '150000',
            part: 'XXXXX',
            price: '150000',
            do: 'XXXXX',
        },{
            key: '2',
            time: '2014/02/28 12:45',
            detail: '150000',
            part: 'XXXXX',
            price: '150000',
            do: 'XXXXX',
        },{
            key: '3',
            time: '2014/02/28 12:45',
            detail: '150000',
            part: 'XXXXX',
            price: '150000',
            do: 'XXXXX',
        },{
            key: '4',
            time: '2014/02/28 12:45',
            detail: '150000',
            part: 'XXXXX',
            price: '150000',
            do: 'XXXXX',
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
                                        资金流水
                                    </span>
                                </div>
                            </div>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="全部" key="1">
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
                                <TabPane tab="交易" key="2">
                                    lal
                                </TabPane>

                                <TabPane tab="奖励" key="3">
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