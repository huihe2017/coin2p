import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Icon,Pagination } from 'antd';
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

class OutDeal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
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
                    <div className={style.stepOne}>
                        <Form onSubmit={this.handleSubmit}>
                            <div className={style.stepOneItem}>
                                <span>使用</span>
                                <FormItem

                                    wrapperCol={{ span: 21 }}
                                >
                                    {getFieldDecorator('part', {initialValue: 'rmb',
                                        rules: [{  message: ' ' }],
                                    })(
                                        <Select

                                            style={{ width: '100%' }}

                                        >
                                            <Option value="rmb">RMB</Option>
                                            <Option value="dollar">Dollar</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </div>
                            <div className={style.stepOneItem}>
                                <span>金额</span>
                                <FormItem

                                    wrapperCol={{ span: 21 }}
                                >
                                    {getFieldDecorator('note', {
                                        rules: [{  message: ' ' }],
                                    })(
                                        <Input
                                            type="text"
                                            onChange={(e)=>{
                                                this.setState({
                                                    money:e
                                                })
                                            }}
                                            style={{ width: '100%'}}
                                        />
                                    )}
                                </FormItem>
                            </div>
                            <div className={style.stepOneItem}>
                                <span>兑换</span>
                                <FormItem
                                    wrapperCol={{ span: 21 }}
                                >
                                    {getFieldDecorator('coinPart', {initialValue: 'btc',
                                        rules: [{  message: ' ' }],
                                    })(
                                        <Select

                                            style={{ width: '100%' }}

                                        >
                                            <Option value="btc">BTC</Option>
                                            <Option value="usdt">USDT</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </div>
                            <div className={style.stepOneItem}>
                                <span>交易方式</span>
                                <FormItem

                                    wrapperCol={{ span: 21 }}
                                >
                                    {getFieldDecorator('dealPart', {initialValue: 'no',
                                        rules: [{  message: ' ' }],
                                    })(
                                        <Select

                                            style={{ width: '100%' }}

                                        >
                                            <Option value="no">不限</Option>
                                            <Option value="paybao">支付宝</Option>
                                            <Option value="wechat">微信</Option>
                                            <Option value="bank">银行转账</Option>

                                        </Select>
                                    )}
                                </FormItem>
                            </div>
                            <div className={style.stepOneItemR}>
                                <FormItem
                                    wrapperCol={{ span:21}}
                                >
                                    {/*<button  htmlType="submit">2222</button>*/}
                                    <Button style={{height:48,lineHeight:'48px',marginTop:38,backgroundColor: 'rgba(218,187,132,1)',color:'#fff',fontSize:18}} className={style.but} htmlType="submit">
                                        确定
                                    </Button>
                                </FormItem>
                            </div>

                        </Form>
                    </div>
                    <div className={style.stepTwoTop}>
                        <div className={style.cheapest}>
                            <div className={style.partTitle}>
                                <div className={style.partLine}>

                                </div>
                                <span className={style.partTitleCon}>
                                    价格最低
                                </span>
                            </div>
                            <div className={style.cheapContent}>
                                <div className={style.cheapContentL}>
                                    <span className={style.cheapContentLT}>
                                        feiji
                                    </span>
                                    <span className={style.cheapContentLB}>
                                        1000-50000CNY
                                    </span>
                                </div>
                                <div className={style.cheapContentR}>
 <span className={style.cheapContentLT}>
                                        45.640
                                    </span>
                                    <span className={style.cheapContentLB}>
                                        CNY/BTC
                                    </span>
                                </div>
                            </div>
                            <div className={style.but}>
                                <DButton width={140} height={40} word={'立即购买'} size={18}/>
                            </div>
                        </div>
                        <div className={style.notice}>
                            <div className={style.partTitle}>
                                <div className={style.partImg}>
                                    <img src={require('../home/images/tip.png')} alt=""/>
                                </div>
                                <span className={style.partTitleCon}>
                                    信誉最高
                                </span>
                            </div>
                            <ul>
                                <li>如何购买数字币</li>
                                <li>如何购买数字币</li>
                                <li>如何购买数字币</li>
                            </ul>
                        </div>
                        <div className={style.cheapest}>
                            <div className={style.partTitle}>
                                <div className={style.partLine}>

                                </div>
                                <span className={style.partTitleCon}>
                                    信誉最高
                                </span>
                            </div>
                            <div className={style.cheapContent}>
                                <div className={style.cheapContentL}>
                                    <span className={style.cheapContentLT}>
                                        feiji
                                    </span>
                                    <span className={style.cheapContentLB}>
                                        1000-50000CNY
                                    </span>
                                </div>
                                <div className={style.cheapContentR}>
 <span className={style.cheapContentLT}>
                                        45.640
                                    </span>
                                    <span className={style.cheapContentLB}>
                                        CNY/BTC
                                    </span>
                                </div>
                            </div>
                            <div className={style.but}>
                                <DButton width={140} height={40} word={'立即购买'} size={18}/>
                            </div>
                        </div>
                        <div className={style.notice}>
                            <div className={style.partTitle}>
                                <div className={style.partLine}>

                                </div>
                                <span className={style.partTitleCon}>
                                    批量交易
                                </span>
                                <a className={style.titleA} href="javascript:void (0)" >
                                    什么是批量交易？
                                </a>
                            </div>
                            <table className={style.sellTable}>
                                <thead>
                                    <tr>
                                        <td>
                                            单价
                                        </td>
                                        <td>
                                            数量
                                        </td>
                                        <td>
                                            一口价
                                        </td>
                                        <td>
                                            操作
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            45.640
                                        </td><td>
                                            0.05
                                        </td><td>
                                            2.310
                                        </td><td>
                                        <a className={style.titleB} href="javascript:void (0)">购买</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            45.640
                                        </td><td>
                                            0.05
                                        </td><td>
                                            2.310
                                        </td><td>
                                        <a className={style.titleB} href="javascript:void (0)">购买</a>
                                        </td>
                                    </tr><tr>
                                        <td>
                                            45.640
                                        </td><td>
                                            0.05
                                        </td><td>
                                            2.310
                                        </td><td>
                                        <a className={style.titleB} href="javascript:void (0)">购买</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={style.stepTwoBottom}>
                        <div className={style.stepTwoTitle}>
                            <span>
                                全部商家
                            </span>
                            <a className={style.titleA} href="javascript:void (0)">
                                列表页和下单价格不一致？
                            </a>
                        </div>
                        <div className={style.stepTwoContent}>
                            <table className={style.stepTwoContentTable}>
                                <thead>
                                    <tr>
                                        <td>
                                            昵称
                                        </td>
                                        <td>
                                            信用 &nbsp;<Icon type="down" />
                                        </td>
                                        <td>
                                            交易限额
                                        </td>
                                        <td>
                                            浮动单价 &nbsp;<Icon type="down" />
                                        </td>
                                        <td>
                                            操作
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                fudonh
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                交易 213121
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                交易 213121
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                交易 213121
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                交易 213121
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                交易 213121
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                交易 213121
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                交易 213121
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                交易 213121
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.nick}>

                                            <SellPart/>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                交易 213121
                                            </span>
                                            <span className={style.haoping}>
                                                好评度 100%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                100-25.754.61
                                            </span>
                                            <span className={style.haoping}>
                                                CNY
                                            </span>
                                        </td>
                                        <td>
                                            <span className={style.bishu}>
                                                46.724.96
                                            </span>
                                            <span className={style.haoping}>
                                               CNY/BTC
                                            </span>
                                        </td>
                                        <td>
                                            <DButton width={80} height={36} size={17} word={'购买'}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={style.page}>
                        <div className={style.pages}>
                            <Pagination defaultCurrent={1} total={1000} showSizeChanger onShowSizeChange={this.onShowSizeChange}/>
                        </div>

                        {/*<div className={style.evePage}>*/}
                            {/*每页展示条 共<span>100</span>条*/}
                        {/*</div>*/}
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

OutDeal = connect(mapStateToProps, mapDispatchToProps)(OutDeal)
const WrapOutDeal = Form.create()(OutDeal)
export default WrapOutDeal