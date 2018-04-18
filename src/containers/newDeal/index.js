import React from 'react'
import style from './index.css'
import {Input, Select, Form, Button, message, Icon, Pagination, Checkbox} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import {getAdDetails,downOrder} from '../../actions/businessProcess'
import OutHeader from '../../components/outDealHeader'
import DButton from '../../components/button'
import SellPart from '../../components/sellPart'

const FormItem = Form.Item;
const Option = Select.Option;

class NewDealBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            CNYNum: '',
            BTCNum: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let _this = this
        this.props.downOrder()

    }

    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    componentDidMount() {
        this.props.getAdDetails(this.props.params.id)
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        if (!this.props.adDetails.nickname) {
            return <div>loading</div>
        }
        alert(1)
        if(this.props.adDetails.isDownOrder){alert(2)
            this.props.history.pushState(null, '/')
        }
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.step}>
                        <OutHeader onlineNum={1356}/>
                    </div>
                    <div className={style.newDealHeader}>
                        <table className={style.newDealTable}>
                            <tr>
                                <td>
                                    <SellPart
                                        userMsg={{
                                            nickname: this.props.adDetails.nickname,
                                            portrait: this.props.adDetails.portrait,
                                            adUptime: this.props.adDetails.adUptime,
                                            isCertifiedBusiness: this.props.adDetails.isCertifiedBusiness,
                                        }}
                                        tradeMode={this.props.adDetails.tradeMode}
                                    />
                                </td>
                                <td>
                                     <span className={style.bishu}>
                                                浮动单价
                                            </span>
                                    <span className={style.haoping}>
                                                {this.props.adDetails.price} CNY / BTC
                                            </span>
                                </td>
                                <td>
                                     <span className={style.bishu}>
                                                交易限额
                                            </span>
                                    <span className={style.haoping}>
                                        {this.props.adDetails.tradeQuota.min} ~ {this.props.adDetails.tradeQuota.max} CNY
                                            </span>
                                </td>
                                <td>
                                     <span className={style.bishu}>
                                                付款期限
                                            </span>
                                    <span className={style.haoping}>
                                                {this.props.adDetails.payPeriod} 分钟
                                            </span>
                                </td>
                                <td>
                                     <span className={style.bishu}>
                                                交易次数
                                            </span>
                                    <span className={style.haoping}>
                                                {this.props.adDetails.tradeNum}
                                            </span>
                                </td>
                                <td>
                                     <span className={style.bishu}>
                                                好评度
                                            </span>
                                    <span className={style.haoping}>
                                                {this.props.adDetails.praise}%
                                            </span>
                                </td>
                                <td>
                                     <span className={style.bishu}>
                                                历史
                                            </span>
                                    <span className={style.haoping}>
                                                {this.props.adDetails.tradeTotal} BTC
                                            </span>
                                </td>
                                <td>
                                     <span className={style.bishu}>
                                                状态
                                            </span>
                                    <span className={style.haoping}>
                                                {this.props.adDetails.state}
                                            </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={style.newDealContent}>
                        <div className={style.newDealContentTT}>
                            <div className={style.shuoming}>
                                 <span className={style.tou}>
                                交易说明
                            </span>
                                <ul className={style.touUi}>
                                    <li className={style.tou}>
                                        订单有效期为15分钟，请您及时在有效期内付款并点击「标记付款已完成」按钮，我才可以释放数字币给您
                                    </li>
                                    <li className={style.tou}>
                                        如果您无法在15分钟内完成付款，请点击「延长订单有效期」按钮
                                    </li>
                                    <li className={style.tou}>
                                        开始交易后数字币由系统锁定托管，请安心下单
                                    </li>
                                </ul>
                            </div>
                            <div className={style.cash}>
                                <span className={style.cashTitle}>
                                    交易额度
                                </span>
                                <span className={style.cashNum}>
                                    <span>{this.state.BTCNum}</span>BTC
                                </span>
                                <img className={style.cashImg} src={require('./images/lranger.png')} alt=""/>
                                <span className={style.cashNum}>
                                    <span>{this.state.CNYNum}</span>CNY
                                </span>
                            </div>
                        </div>
                        <div className={style.newDealContentT}>
                            <Form onSubmit={this.handleSubmit}>
                                <div className={style.stepOneItem}>
                                    <span>您想够买多少CNY？</span>
                                    <FormItem

                                    >
                                        {getFieldDecorator('CNY', {
                                            rules: [{required: true, message: ' ',}],
                                            value:this.state.CNYNum
                                        })(
                                            <Input
                                                type="text"
                                                value={this.props.CNYNum}
                                                onChange={(e) => {
                                                    this.setState({
                                                        CNYNum: e.target.value ? e.target.value : 0,
                                                        BTCNum: e.target.value / this.props.adDetails.price
                                                    })
                                                }}
                                                style={{width: '100%'}}
                                            />
                                        )}
                                    </FormItem>
                                </div>
                                <div className={style.stepOneItem1}>
                                    <img src={require('./images/lranger.png')} alt=""/>
                                </div>
                                <div className={style.stepOneItem}>
                                    <span>换取BTC</span>
                                    <FormItem

                                    >
                                        {getFieldDecorator('BTC', {
                                            rules: [{required: true, message: ' ',}],
                                            value:this.state.BTCNum
                                        })(
                                            <Input
                                                type="text"
                                                value={this.state.BTCNum}
                                                onChange={(e) => {
                                                    this.setState({
                                                        BTCNum: e.target.value ? e.target.value : 0,
                                                        CNYNum: e.target.value * this.props.adDetails.price
                                                    })
                                                }}
                                                style={{width: '100%'}}
                                            />
                                        )}
                                    </FormItem>
                                </div>
                                <div className={style.stepOneItem}>
                                    <span>交易方式</span>
                                    <FormItem
                                    >
                                        {getFieldDecorator('coinPart', {
                                            initialValue: 'bank',
                                            rules: [{required: true, message: ' ', initialValue: '0.0',}],
                                        })(
                                            <Select

                                                style={{width: '100%'}}

                                            >

                                                {
                                                    this.props.adDetails.tradeMode[0].alipay ?
                                                        <Option value="pay">支付宝</Option> : ''
                                                }
                                                {
                                                    this.props.adDetails.tradeMode[1].weixin ?
                                                        <Option value="wechat">微信</Option> : ''
                                                }
                                                {
                                                    this.props.adDetails.tradeMode[2].bankCard ?
                                                        <Option value="bank">银行转账</Option> : ''
                                                }

                                            </Select>
                                        )}
                                    </FormItem>
                                </div>

                                <div className={style.stepOneItemR}>
                                    <span>进行交易前，请您先登录并通过邮箱验证 <a href="">点击登录</a></span>
                                    <div className={style.yanz}>
                                        <FormItem style={{marginBottom: 8}}>
                                            {getFieldDecorator('agreement', {
                                                valuePropName: 'checked',
                                            })(
                                                <Checkbox>我已阅读并确认以上交易信息</Checkbox>
                                            )}
                                        </FormItem>
                                    </div>


                                    <FormItem
                                    >
                                        <Button style={{
                                            height: 48,
                                            lineHeight: '48px',
                                            backgroundColor: 'rgba(218,187,132,1)',
                                            color: '#fff',
                                            fontSize: 18,
                                            width: 240,
                                            float: 'right'
                                        }} className={style.but} htmlType="submit">
                                            确定
                                        </Button>
                                    </FormItem>
                                </div>

                            </Form>
                        </div>
                        <div className={style.newDealContentTB}>
                            <a className={style.sao} href="">一键扫货</a>
                            <span className={style.shuo}>
                                当前数字货币价格为系统自动计算，实际交易价格以发起交易时的价格为准，请点击查看<a className={style.shuoA} href="">关于浮动价格的说明</a>
                            </span>
                        </div>
                        <div className={style.newDealContentB}>
                            <ul className={style.touUi}>
                                <li className={style.tou1}>
                                    交易发起前，请您确认已阅读并同意卖家提出的条款，并再次确认交易内容无误后，再点击购买按钮。
                                </li>
                                <li className={style.tou1}>
                                    交易发起后，请您于付款期限截止前转帐至指定账户，并<span className={style.shuoA}>标记已付款完毕</span>，逾期系统将自动取消交易。
                                </li>
                                <li className={style.tou1}>
                                    交易发起后，系统会自动将卖家的数字货币锁定，待卖家确认收到您的转帐后，将会释放数字货币至您的账户中。
                                </li>
                                <li className={style.tou1}>
                                    建议您在交易前先查看卖家信息，检视相关交易记录及评价，以減少交易纠纷。
                                </li>
                                <li className={style.tou1}>
                                    交易过程请使用平台的聊天系统进行沟通，平台外的对话记录将无法作为交易纠纷的依据。
                                </li>
                                <li className={style.tou1}>
                                    温馨提示：超过三笔取消订单，将被冻结当天下单权限。
                                </li>
                                <li className={style.tou1}>
                                    <span className={style.shuoB}>
                                        下单后请履行契约精神，恶意抬价或者是反悔，被投诉将冻结账户 3-14 天不等。
                                    </span>
                                </li>
                            </ul>
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
        adDetails: state.businessProcess.orderDetails
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAdDetails: bindActionCreators(getAdDetails, dispatch),
        downOrder:bindActionCreators(downOrder, dispatch)
    }
}

NewDealBox = connect(mapStateToProps, mapDispatchToProps)(NewDealBox)
const WrapNewDealBox = Form.create()(NewDealBox)
export default WrapNewDealBox