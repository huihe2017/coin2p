import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Icon,Pagination,Checkbox,Tooltip,Radio } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserShow from '../../components/userShow'
import OutHeader from '../../components/outDealHeader'
import DButton from '../../components/button'
import SellPart from '../../components/sellPart'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const text = '收款账号：xxxxxxxx';

class InDealBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CNYNum:0.00,
            BTCNum:0.00,
            timeMin:14,
            timeSec:59,
            value: 1,
        }
    }


    submit(){
        let eva={}
        eva.eva=this.state.eva;
        eva.hao=this.state.value;
        console.log(eva);
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }



    render() {
        const { getFieldDecorator} = this.props.form;
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.step}>
                        <OutHeader onlineNum={1356}/>
                    </div>
                    <div className={style.newDealHeader}>
                        <div className={style.inHeaderTitle}>
                            订单信息
                        </div>
                        <table className={style.inHeaderTable}>
                            <tr>
                                <td>
                                    <span className={style.bishu}>
                                        卖家
                                    </span>
                                    <span className={style.haoping}>
                                        飞机哈哈哈哈
                                    </span>
                                </td>
                                <td>
                                    <span className={style.bishu}>
                                        交易金额
                                    </span>
                                    <span className={style.haoping}>
                                        20000CNY
                                    </span>
                                </td>
                                <td>
                                    <span className={style.bishu}>
                                        单价
                                    </span>
                                    <span className={style.haoping}>
                                        49200CNY
                                    </span>
                                </td>
                                <td>
                                    <span className={style.bishu}>
                                        付款期限
                                    </span>
                                    <span className={style.haoping}>
                                        2018/04/02 10:39
                                    </span>
                                </td>
                                <td>
                                    <span className={style.bishu}>
                                        交易方式
                                    </span>
                                    <span className={style.haoping}>
                                        银行转账
                                    </span>
                                </td>
                                <td>
                                    <span className={style.bishu}>
                                        订单编号
                                    </span>
                                    <span className={style.haoping}>
                                        e90c7173-a800
                                    </span>
                                </td>
                                <td>
                                    <span className={style.bishu}>
                                        订单状态
                                    </span>
                                    <span className={style.haoping}>
                                        已下单
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={style.inDealContent}>
                        <div className={style.inDealContentT}>
                            <div className={style.convert}>
                                <span className={style.convertT}>
                                    总额：<span>20000 CNY</span>
                                </span>
                                    <span  className={style.convertT}>
                                    兑换：<span>0.40650406 BTC</span>
                                </span>
                            </div>
                            <span className={style.charge}>
                                交易手续费：免费
                            </span>
                        </div>
                        <div className={style.chat}>

                        </div>
                        <div className={style.dealExplain}>
                            <div className={style.dealExplainLi}>
                                <span className={style.dealExplainT}>
                                 交易说明:
                            </span>
                                <span className={style.dealExplainC}>
                                订单有效期为15分钟，请您及时在有效期内付款并点击「标记付款已完成」按钮，我才可以释放数字币给您
                            </span>
                                <span className={style.dealExplainC}>
                                如果您无法在15分钟内完成付款，请点击「延长订单有效期」按钮
                            </span>
                                <span className={style.dealExplainC}>
                                开始交易后数字币由系统锁定托管，请安心下单
                            </span>
                                <span className={style.dealExplainC}>
                                <span className={style.dealExplainT}>请勿随意取消订单！</span>任意取消订单者，被交易对象投诉将影响系统信用分数，分数过低账号会冻结数天
                            </span>
                                <span className={style.dealExplainC}>
                                您不需要提供钱包地址给卖家，交易完成后数字货币自动转入您在币点点上的钱包中
                            </span>
                                <span className={style.dealExplainC}>
                                场外交易时间通常为 5-60 分钟，具体时间依据卖家是否在线，及确认收款的时间而有所调整，请耐心等待
                            </span>
                                <span className={style.dealExplainC}>
                                若长时间未收到卖家的回复，或卖家未释放数字货币，您可以提交工单发起申诉，客服人员将协助处理
                            </span>
                            </div>
                            <div className={style.dealExplainLi}>
                                 <span className={style.dealExplainT}>
                                 交易备注:
                            </span>
                                <span className={style.dealExplainC}>
                                 转账时请备注【订单编号后4位】 以加快确认速度
                            </span>
                                <span className={style.dealExplainC}>
                                请勿在汇款备注内填写比特币，BTC，OTC，等任何数字币有关字眼，防止您的汇款被银行拦截
                            </span>
                                <span className={style.dealExplainC}>
                                联系电话：<span className={style.dealExplainT}>1890000000</span>
                            </span>
                                <span className={style.dealExplainC}>
                                <span className={style.dealExplainT}>下单后可以直接加我微信或者用电话和我联系</span>
                            </span>
                            </div>
                            <div className={style.dealExplainLi1}>
                                <span className={style.dealExplainT1}>
                                    卖家收款账号:
                                </span>
                                <div className={style.sellpart}>
                                    <Tooltip placement="topLeft" title={text}>
                                        <div className={style.TL}>
                                            <img className={style.butImg} src={require('../../components/sellPart/images/pay.png')} alt=""/>
                                            <span className={style.butword}>
                                                支付宝
                                            </span>
                                        </div>
                                    </Tooltip>
                                    <Tooltip placement="top" title={text}>
                                        <div className={style.Top}><img className={style.butImg} src={require('../../components/sellPart/images/wechat.png')} alt=""/>
                                            <span className={style.butword}>
                                                微信账号
                                            </span></div>
                                    </Tooltip>
                                    <Tooltip placement="topRight" title={text}>
                                        <div className={style.TR}><img className={style.butImg} src={require('../../components/sellPart/images/bank.png')} alt=""/>
                                            <span className={style.butword}>
                                                银行账户
                                            </span></div>
                                    </Tooltip>
                                </div>
                            </div>

                            <div className={style.partOne} hidden={true}>
                                <div className={style.lineTime}>
                                    BTC 托管时间剩余 <span className={style.time}>{this.state.timeMin}：{this.state.timeSec}</span> 逾期将自动取消 请及时付款并点击标记付款
                                </div>
                                <div className={style.but}>
                                    <DButton width={'100%'} height={40} word={'标记付款已完成'} size={14}/>
                                </div>
                                <div className={style.extend}>
                                    <DButton width={160} height={40} word={'延长订单有效期'} size={14} ghost={true}/>
                                </div>
                                <div className={style.extend}>
                                    <DButton width={160} height={40} word={'取消交易'} size={14} ghost={true}/>

                                </div>
                            </div>

                            <div className={style.partTwo} hidden={true}>
                                <div className={style.lineTime}>
BTC 将持续由系统锁定托管
                                    <a className={style.appeal} href="">我要申诉</a>
                                </div>
                                <div className={style.but}>
                                    <DButton width={'100%'} height={40} word={' 标记付款，请等待卖家核实后释放数字币'} diss={true} size={14}/>
                                </div>
                                <div className={style.extend}>
                                    <span className={style.tip}>
                                         如果您已付款，切勿取消
                                    </span>
                                </div>
                                <div className={style.extend}>
                                    <DButton width={160} height={40} word={'取消交易'} size={14} ghost={true}/>

                                </div>
                            </div>

                            <div className={style.partThree} hidden={false}>
                                <div className={style.lineTime1}>
                                    我给 卖家 的交易评价
                                    <a className={style.appeal} href="">我要申诉</a>
                                </div>
                                <div>
                                    <textarea className={style.textarea} name="" id="" cols="30" rows="10" onChange={(e)=>{
                                       this.setState({
                                           eva:e.target.value
                                       })
                                    }}>

                                    </textarea>
                                </div>
                                <div className={style.submit}>
                                    <RadioGroup onChange={this.onChange} value={this.state.value}>
                                        <Radio value={1}>好评</Radio>
                                        <Radio value={2}>中评</Radio>
                                        <Radio value={3}>差评</Radio>
                                    </RadioGroup>
                                    <a onClick={this.submit.bind(this)} className={style.appeal} href="javascript:void (0)">提交评价</a>
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

InDealBox = connect(mapStateToProps, mapDispatchToProps)(InDealBox)
const WrapInDealBox = Form.create()(InDealBox)
export default WrapInDealBox