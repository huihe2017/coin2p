import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Tabs,Table,Pagination} from 'antd';
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
            title: '交易广告',
            dataIndex: 'Name',
            key: 'Name',
            render: text => <span className={style.tableName}>{text[0].name} {text[1].deal} {text[2].coin}</span>,
        }, {
            title: '评价',
            dataIndex: 'Eval',
            key: 'Eval',
        }, {
            title: '评价内容',
            dataIndex: 'Content',
            key: 'Content',
        }, {
            title: '评价时间',
            dataIndex: 'Time',
            key: 'Time',
        }, {
            title: '评价用户',
            dataIndex: 'Person',
            key: 'Person',
        }];

        const data = [{
            key: '0',
            Name: [{name:'小飞机'},{deal:'购买'},{coin:'BTC'}],
            Eval: '好评',
            Content: 'New York No. 1 Lake Park',
            Time: '46.724.96',
            Person: '大****大大',
        },{
            key: '1',
            Name: [{name:'飞机'},{deal:'购买'},{coin:'USDT'}],
            Eval: '好评',
            Content: 'New York No. 1 Lake Park',
            Time: '46.724.96',
            Person: '大****大大',
        },{
            key: '2',
            Name: [{name:'大飞机'},{deal:'出售'},{coin:'OTC'}],
            Eval: '中评',
            Content: 'New York No. 1 Lake Park',
            Time: '46.724.96',
            Person: '大****大大',
        },{
            key: '3',
            Name: [{name:'大大飞机'},{deal:'购买'},{coin:'BTC'}],
            Eval: '好评',
            Content: 'New York No. 1 Lake Park',
            Time: '46.724.96',
            Person: '大****大大',
        },{
            key: '4',
            Name: [{name:'大大大飞机'},{deal:'出售'},{coin:'BTC'}],
            Eval: '差评',
            Content: 'New York No. 1 Lake Park',
            Time: '46.724.96',
            Person: '大****大大',
        },];
        const columns1 = [{
            title: '出售币种',
            dataIndex: 'PartF',
            key: 'PartF'
        }, {
            title: '收款币种',
            dataIndex: 'PartL',
            key: 'PartL',
        }, {
            title: '出售单价',
            dataIndex: 'Price',
            key: 'Price',
        }, {
            title: '交易限额',
            dataIndex: 'Quota',
            key: 'Quota',
            render: text => <span>{text[0].quota1}-{text[1].quota2}</span>,
        }, {
            title: '最后更新',
            dataIndex: 'Time',
            key: 'Time',
        }, {
            title: '广告状态',
            dataIndex: 'State',
            key: 'State',
        }, {
            title: '操作',
            dataIndex: 'Do',
            key: 'Do',
            render: text => <span className={style.tableName}>{text}</span>,
        }];

        const data1 = [{
            key: '0',
            PartF: 'BTC',
            PartL: 'CNY',
            Price: '40000.00',
            Quota: [{quota1:10000.00},{quota2:10000.00}],
            Time: '2019/2/2',
            State: 'XXXXX',
            Do: 'XXXXX',
        },];
        const data2 = [];

        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.wlopContentH}>
                            <div className={style.wlopContentHOne}>
                                <img className={style.user} src={require('./images/user.png')} alt=""/>
                                <div className={style.userdata}>
                                    <span className={style.userName}>
                                        飞机哈哈哈哈
                                    </span>
                                    <span className={style.userDeal}>
                                        交易次数：<span>1122</span>
                                    </span>
                                    <span className={style.userLine} style={this.state.online?{}:{filter: 'grayscale(100)'}}>
                                        <div className={style.online}></div>
                                        <span>用户在线</span>
                                    </span>
                                </div>
                            </div>
                            <div className={style.wlopContentHTwo}>
                                <div className={style.headerItem}>
                                    <span className={style.headerItemT}>
                                        好评：<span className={style.headerItemC}>100%</span>
                                    </span>
                                    <span className={style.headerItemT}>
                                        评价数：<span className={style.headerItemTF}>+66</span>/<span className={style.headerItemTL}>-0</span>
                                    </span>
                                </div>
                                <div className={style.headerItem}>
                                    <span className={style.headerItemT}>
                                        进阶认证：<span className={style.headerItemC}>已认证</span>
                                    </span>
                                    <span className={style.headerItemT}>
                                        实名认证：<span className={style.headerItemC}>未认证</span>
                                    </span>
                                </div>
                                <div className={style.headerItem}>
                                    <span className={style.headerItemT}>
                                        邮箱认证：<span className={style.headerItemC}>已认证</span>
                                    </span>
                                    <span className={style.headerItemT}>
                                        手机认证：<span className={style.headerItemC}>未认证</span>
                                    </span>
                                </div>
                                <div className={style.headerItem}>
                                    <span className={style.headerItemT}>
                                        注册时间：<span className={style.headerItemC}>2018-01-14</span>
                                    </span>
                                    <span className={style.headerItemT}>
                                        最后登录：<span className={style.headerItemC}>2018-04-11</span>
                                    </span>
                                </div>

                            </div>
                            <div className={style.wlopContentHThree}>
                                <div className={style.but}>
                                    <DButton width={120} height={30} size={14} ghost={true} word={'移出信任名单'}/>
                                </div>
                                <div className={style.but}>
                                    <DButton width={120} height={30} size={14} ghost={true} word={'加入黑名单'}/>
                                </div>
                            </div>
                        </div>
                        <div className={style.wlopContentC}>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="评价记录" key="1">
                                    <table className={style.partTable}>
                                        <tr>
                                            <td>
                                                分类
                                            </td>
                                            <td>
                                                <a href="" className={style.itemA}>全部</a><a href="" className={style.item}>有内容</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                评价类型
                                            </td>
                                            <td>
                                                <a href=""  className={style.itemA}>全部</a><a href="" className={style.item}>好评</a><a href="" className={style.item}>中评</a><a href="" className={style.item}>差评</a>
                                            </td>
                                        </tr>
                                    </table>
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
                                <TabPane tab="出售广告" key="2">
                                    <div className={style.realTable}>
                                        <Table columns={columns1} dataSource={data1} />
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

                                <TabPane tab="购买广告" key="3">
                                    <div className={style.realTable}>
                                        <Table columns={columns1} dataSource={data2} />
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

export default EmailCheck