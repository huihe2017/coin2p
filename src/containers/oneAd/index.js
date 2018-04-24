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
const data = [];

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {

        };
    }

    render() {
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        const columns = [{
            title: <span className={style.titleName}>币种</span>,
            dataIndex: 'coinPart',
            key: 'coinPart',
            width:170,
        }, {
            title: <span className={style.titleName}>提币时间
</span>,
            dataIndex: 'time',
            width:190,
            key: 'total',
        }, {
            title:<span className={style.titleName}>提币数量</span>,
            dataIndex: 'hash',
            width:190,
            key: 'balance',
        }, {
            title:<span className={style.titleName}>地址标签</span>,
            dataIndex: 'num',
            width:290,
            key: 'frost',
        }, {
            title:<span className={style.titleName}>状态</span>,
            dataIndex: 'state',
            width:170,
            key: 'locked',
        }, {
            title:<span className={style.titleName}>详情</span>,
            dataIndex: 'tureNum',
            key: 'asset',

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
                                        发布一口价广告
                                    </span>
                                </div>
                                <div className={style.headerC}>
                                    <span className={style.headerCL}>
                                        0广告费，1口价买卖数字币
                                    </span>
                                    <span className={style.headerCLB}>
                                        请确保您的账户余额大于 0.025 BTC，广告才可以展示在广告列表中。
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.partOne}>
                                <div className={style.partOneH}>
                                    BTC提币地址
                                    <span className={style.partOneHT}>
                                        每日提币额度 22,500 / 22,500 1ST
                                    </span>
                                </div>

                            </div>
                            <div className={style.partOne}>
                                <div className={style.partOneH}>
                                    提币历史记录
                                </div>

                            </div>
                            <div className={style.partOne}>
                                <div className={style.partOneH}>
                                    常见提币问题
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