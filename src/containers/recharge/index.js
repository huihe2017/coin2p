import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Tabs,Icon,Table,Menu, Dropdown,Pagination,Radio,Checkbox } from 'antd';
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


    dian(){

        document.execCommand("Copy");
        message.success('复制成功')
    }

    render() {
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        const columns = [{
            title: <span className={style.titleName}>币种</span>,
            dataIndex: 'coinPart',
            key: 'coinPart',
            width:130,
        }, {
            title: <span className={style.titleName}>充值时间</span>,
            dataIndex: 'time',
            width:160,
            key: 'total',
        }, {
            title:<span className={style.titleName}>交易哈希</span>,
            dataIndex: 'hash',
            width:490,
            key: 'balance',
        }, {
            title:<span className={style.titleName}>充值数量</span>,
            dataIndex: 'num',
            width:150,
            key: 'frost',
        }, {
            title:<span className={style.titleName}>状态</span>,
            dataIndex: 'state',
            width:130,
            key: 'locked',
        }, {
            title:<span className={style.titleName}>确认数</span>,
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
                                <span className={style.headerTT}>
                                    BTC充值
                                </span>
                                <div className={style.backT}>
                                    <Link to={'/walletRecharge'}>
                                        <a className={style.back} href="javascript:void (0)">
                                            <img src={require('../../components/titleBack/images/back.png')} alt=""/>
                                            返回我的钱包
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className={style.headerB}>
                                <div className={style.inpBox}>
                                    <span className={style.inpTitle}>
                                        请将 BTC 充值到以下地址
                                    </span>
                                    <div className={style.inpBoxI}>
                                        <div className={style.inpBoxIL}>
                                            <Input value="1FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" disabled={true} />
                                        </div>
                                        <div className={style.inpBoxrR} onClick={this.dian.bind(this)}>
                                           <DButton width={120} height={36} size={14} word={'复制地址'}/>
                                       </div>
                                    </div>

                                    <span className={style.inpTip}>
                                        提示：充值需要些许时间，请等待交易完成 3 个确认数，到账您将收到邮件通知。<br/><span className={style.red}>单笔充值不得低于 0.003 BTC</span> ，我们不会处理少于该金额的 BTC 充值请求。

                                    </span>
                                </div>
                                <div className={style.QcodeBox}>
                                    <div className={style.QcodeR}>
                                        <img src={require('./images/qcode.jpg')} className={style.qcode} alt=""/>
                                        <a className={style.QcodeWordR}>
                                            查看区块链浏览器
                                        </a>
                                    </div>
                                    <span className={style.QcodeWordL}>
                                        或扫描二维码获得地址
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.partOne}>
                                <div className={style.partOneH}>
                                    充值历史记录
                                </div>
                                <Table columns={columns} dataSource={data} />
                            </div>
                            <div className={style.partOne}>
                                <div className={style.partOneH}>
                                    常见充值问题
                                </div>
                                <div className={style.aItems}>
                                    <a className={style.aItem} href="javascript:void (0)">
                                        如何进行充值？(以 Poloniex 充值 BTC 为例)
                                    </a>
                                    <a className={style.aItem} href="javascript:void (0)" style={{marginRight:0}}>
                                        如何进行充值？(以 imToken 充值 ETH 为例)
                                    </a>
                                    <a className={style.aItem} href="javascript:void (0)">
                                        为什么我的充值还没到帐？
                                    </a>
                                    <a className={style.aItem} href="javascript:void (0)"  style={{marginRight:0}}>
                                        如何查询 imToken 转账状态？
                                    </a>
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