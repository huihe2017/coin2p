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
                        <div className={style.alert}>
                            <Alert message="您的账户余额不足，暂时无法使用提币功能" type="warning" />
                        </div>

                        <div className={style.header}>
                            <div className={style.headerT}>
                                <div className={style.headerC}>
                                    <span className={style.headerTT}>
                                        BTC提币
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
                                <div className={style.headerC}>
                                    <span className={style.headerCL}>
                                        温馨提示：申请提币之前请您确认提币地址正确，交易一旦发送到区块链网络便不可撤回；发起提币申请后，我们会发送验证码至您的绑定手机号上，
验证成功后，即可发送到区块链网络中。提币通常需要2~24小时完成到账，到账后您将收到邮件通知。
                                    </span>
                                    <a className={style.headerCA} href="">
                                        收不到 币点点 发来的邮件怎么办？
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.partOne}>
                                <div className={style.partOneH}>
                                    BTC提币地址 <span className={style.partOneHT}>每日提币额度 22,500 / 22,500 1ST</span>
                                    <div className={style.partOneR}>
                                        <div className={style.partOneRW}>
                                            <span className={style.partOneRWT}>
                                               <a href="" className={style.gold}>实名认证</a> 提高额度至 45000.0 1ST
                                            </span>
                                            <a href="" className={style.partOneRWA}>查看提币额度说明</a>
                                        </div>
                                        <div className={style.partOneRB}>
                                            <DButton width={90} height={28} size={14} word={'新建地址'} />
                                        </div>
                                    </div>
                                </div>
                                <Table columns={columns} dataSource={data} />
                            </div>
                            <div className={style.partOne}>
                                <div className={style.partOneH}>
                                    提币历史记录
                                </div>
                                <Table columns={columns} dataSource={data} />
                            </div>
                            <div className={style.partOne}>
                                <div className={style.partOneH}>
                                    常见提币问题
                                </div>
                                <div className={style.aItems}>
                                    <a className={style.aItem} href="javascript:void (0)">
                                        提币功能说明
                                    </a>
                                    <a className={style.aItem} href="javascript:void (0)" style={{marginRight:0}}>
                                        提币有手续费吗？
                                    </a>
                                    <a className={style.aItem} href="javascript:void (0)">
                                        为什么我的提币还没到账？
                                    </a>
                                    <a className={style.aItem} href="javascript:void (0)"  style={{marginRight:0}}>
                                        如何查询提币的 TxID?
                                    </a>
                                    <a className={style.aItem} href="javascript:void (0)">
                                        如何提币到交易所？（以 BTC 提到 Poloniex 为例）
                                    </a>
                                    <a className={style.aItem} href="javascript:void (0)"  style={{marginRight:0}}>
                                        如何提币到钱包？（以 ETH 提到 im Token 为例）
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