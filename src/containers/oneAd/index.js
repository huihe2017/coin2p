import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Tabs,Icon,Table,Menu, Dropdown,Pagination,Radio,Checkbox,Alert,Tooltip,InputNumber } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import DButton from '../../components/button';
import LzEditor from 'react-lz-editor'

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const data = [];


class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            initialValue:`<p>1. 订单有效期为15分钟，请您及时在有效期内付款并点击「标记付款已完成」按钮，我才可以释放数字币给您<br>
2. 如果您无法在15分钟内完成付款，请点击「延长订单有效期」按钮<br>3. 开始交易后数字币由系统锁定托管，请安心下单
</p>`,
            initialValue1:`<p>转帐时请备注「订单编号后4位」以加快确认速度。</p><p>请勿在汇款备注内填写比特币、BTC、OTC等任何数字币有关字眼，防止您的汇款被银行拦截</p>
<br>
<p>银行帐号：xxxx xxxx xxxx xxxx</p><p>支付宝帐号：xxxxxxx </p>
<p>微信帐号：xxxxx </p>
<p>下单后可以直接加我微信跟我联系，我会尽快回复。</p>`
        };
    }
    receiveHtml(e){
        this.setState({
            initialValue:e
        })
    }
    receiveHtml1(e){
        this.setState({
            initialValue1:e
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            if (!err) {
                values.textarea=this.state.initialValue
                console.log('Received values of form: ', values);
            }
        });
    }
    onChange(value) {
        console.log('changed', value);
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
        const uploadProps = {
            action: "http://v0.api.upyun.com/devopee",
            onChange: this.onChange,
            listType: 'picture',
            fileList: this.state.responseList,
            data: (file) => {

            },
            multiple: true,
            beforeUpload: this.beforeUpload,
            showUploadList: true
        }

        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.header}>
                            <div className={style.headerT}>
                                <div className={style.headerC}>
                                    <span className={style.headerTT}>
                                        一口价极速交易区
                                    </span>
                                </div>
                                <div className={style.headerC}>
                                    <span className={style.headerCL}>
                                        费用说明：
                                    </span>
                                    <span className={style.headerCLB}>
                                        1、BTC 广告费： <span className={style.headerCLBB}>2018-4-12 0:00 ~ 2018-6-29 23:59 免费</span>
                                    </span>
                                    <span className={style.headerCLB}>
                                        2、BTC 成交手续费：<span className={style.headerCLBB}>成交额的 0.5 %
</span><br/>（例：成交金额为 1 BTC，则手续费为 0.005 BTC。使用 OTB 支付可获 50% 折扣 <a className={style.gload} href="">去设置</a>）

                                    </span>
                                </div>
                                <div className={style.headerC}>
                                    <span className={style.headerCL}>
                                        展示说明：
                                    </span>
                                    <span className={style.headerCLB}>
                                        1、广告有效期：<span className={style.headerCLBB}>14天</span>
                                    </span>
                                    <span className={style.headerCLB}>
                                        2、账户余额需大于 <span className={style.headerCLBB}>0.025 BTC
</span>，广告才可展示

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={style.content}>
                            <Form onSubmit={this.handleSubmit}>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        我想
                                        <span className={style.partOneHTB}>
                                            【必填】
                                        </span>
                                    </div>
                                    <div className={style.partOneC}>
                                        <div className={style.inp}>
                                            <FormItem>
                                                {getFieldDecorator('sell', {initialValue:'sell',
                                                    rules: [
                                                        { required: true, message: ' ' },
                                                    ],
                                                })(
                                                    <Select placeholder="Please select a country">
                                                        <Option value="sell">出售</Option>
                                                        <Option value="buy">购买</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inpt}>
                                            <FormItem>
                                                {getFieldDecorator('coinW', {initialValue:'BTC',
                                                    rules: [
                                                        { required: true, message: ' ' },
                                                    ],
                                                })(
                                                    <Select placeholder="Please select a country">
                                                        <Option value="BTC">BTC</Option>
                                                        <Option value="USDT">USDT</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </div>
                                        <img src={require('../newDeal/images/lranger.png')} className={style.inpImg} alt=""/>
                                        <div className={style.inp}>
                                            <FormItem>
                                                {getFieldDecorator('coinN', {initialValue:'cny',
                                                    rules: [
                                                        { required: true, message: ' ', },
                                                    ],
                                                })(
                                                    <Select placeholder="Please select a country">
                                                        <Option value="cny">人民币</Option>
                                                        <Option value="us">dollar</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>

                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        价格设置
                                        <span className={style.partOneHTB}>
                                            【必填】
                                        </span>

                                    </div>
                                    <div className={style.partOneC}>
                                        <div className={style.inp}>
                                            <span className={style.topTip}>
                                                市场价对标交易所
                                            </span>
                                            <FormItem>
                                                {getFieldDecorator('price', {initialValue:'ava',rules: [{ required: true, message: ' ' },],})(
                                                    <Select placeholder="Please select a country">
                                                        <Option value="ava">average</Option>
                                                        <Option value="otc">otcbtc</Option>
                                                        <Option value="bt">btcoin</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inptt}>
                                            <div className={style.total}>
                                                <span className={style.totalT}>
                                                    您的报价&nbsp;&nbsp; <Tooltip placement="top" title={'基于溢价比例得出报价，5分钟更新一次'}>
        <Icon type="question-circle" />
      </Tooltip>
                                                </span>
                                                <span className={style.totalC}>
                                                    {51069.9} CNY
                                                </span>
                                            </div>
                                        </div>
                                        <div className={style.inptt}>
                                            <div className={style.total}>
                                                <span className={style.totalT}>
                                                    当前市场最低出售价
                                                </span>
                                                <span className={style.totalCG}>
                                                    {51069.9} CNY
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={style.partOneC}>
                                     <span className={style.topTip}>
                                                溢价设置 &nbsp;&nbsp; <Tooltip placement="top" title={'「溢价」为基于市场价格的溢出比例，基础市场价来源于您设置的交易所的对标价格，设定适当的溢价比例能让您的广告报价处于合理范围，比如当前价格为 30000，溢价比例为 5%，那么价格为 31500'}>
        <Icon type="question-circle" />
      </Tooltip><span className={style.partOneHTt}>
                                            （注意：您的报价为浮动价格，实际交易价格将以用户下单时的价格为准 <a href="" className={style.partOneCA}>关于浮动价格的说明</a>）
                                        </span>
                                            </span>
                                        <div className={style.inp}>
                                            <FormItem>
                                                {getFieldDecorator('yiPrice', {initialValue:'0',rules: [{ required: true, message: ' ' },],})(
                                                    <InputNumber defaultValue={100} min={0} max={100} formatter={value => `${value}%`} parser={value => value.replace('%', '')} onChange={this.onChange}
                                                    />
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inpb}>
                                            <span className={style.partOneHTt}>（溢价仅计算到小数后两位）
                                            </span>
                                        </div>
                                    </div>
                                    <div className={style.partOneC}>
                                     <span className={style.topTip}>
                                                最低可接受出售价 &nbsp;&nbsp; <Tooltip placement="top" title={'该设置可帮助您在价格剧烈波动时保持稳定的报价，比如设置最低价为 2000，而市场价处于 2000 以下时，您的广告将依旧以 2000 的价格展示'}>
        <Icon type="question-circle" />
      </Tooltip><span className={style.partOneHTt}>
                                            （留空，则不设置）
                                        </span>
                                            </span>
                                        <div className={style.inp}>
                                            <FormItem>
                                                {getFieldDecorator('minSell', {initialValue:'0',rules: [{  message: ' ' },],})(
                                                    <Input placeholder="Basic usage" />
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>

                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        交易方式
                                        <span className={style.partOneHTB}>
                                            【必填】
                                        </span>
                                    </div>
                                    <div className={style.partOneC}>
                                        <div className={style.inp}>
                                            <FormItem>
                                                {getFieldDecorator('payPart', {initialValue:'bank',
                                                    rules: [
                                                        { required: true, message: ' ' },
                                                    ],
                                                })(
                                                    <Select placeholder="Please select a country">
                                                        <Option value="bank">银行转账</Option>
                                                        <Option value="wechat">微信</Option>
                                                        <Option value="pay">支付宝</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        交易限制
                                        <span className={style.partOneHTB}>
                                            【必填】
                                        </span>
                                    </div>
                                    <div className={style.partOneC}>
                                        <div className={style.inp}>
                                            <span className={style.topTip}>
                                                最小限额<span className={style.partOneHTt}>（一次交易的最低的交易限制）
                                        </span>
                                            </span>
                                            <FormItem>
                                                {getFieldDecorator('min', {initialValue:'100',rules: [{ required: true, message: ' ' },],})(
                                                    <Input  suffix={'CNY'}/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inp}>
                                            <span className={style.topTip}>
                                                最大限额<span className={style.partOneHTt}>（一次交易的最高的交易限制）
                                        </span>
                                            </span>
                                            <FormItem>
                                                {getFieldDecorator('max', {initialValue:'1000',rules: [{ required: true, message: ' ' },],})(
                                                    <Input suffix={'CNY'}/>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        交易说明<span className={style.partOneHT}>
                                            所有用户可见 【建议填写】
                                        </span>
                                    </div>
                                    <div className={style.partOneC}>
                                        <div className={style.textArea}>
                                            <FormItem>
                                                {getFieldDecorator('explain', {rules: [{ message: ' ' },],})(
                                                    <LzEditor active={true} importContent={this.state.initialValue} cbReceiver={this.receiveHtml.bind(this)} uploadProps={uploadProps} removeStyle={false} image={false} video={false} audio={false} pasteNoStyle={false} autoSave={false} fullScreen={false} lang="zh"/>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        交易备注<span className={style.partOneHT}>
                                            客户下单后可见 【建议填写】
                                        </span>
                                    </div>
                                    <div className={style.partOneC}>
                                        <div className={style.textArea}>
                                            <FormItem>
                                                {getFieldDecorator('remark', {initialValue:'15',rules: [{ message: ' ' },],})(
                                                    <LzEditor active={true} importContent={this.state.initialValue1} cbReceiver={this.receiveHtml1.bind(this)} uploadProps={uploadProps} removeStyle={false} image={false} video={false} audio={false} pasteNoStyle={false} autoSave={false} fullScreen={false} lang="zh"/>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        自动回复消息
                                        <span className={style.partOneHT}>
                                            【必填】
                                        </span>
                                    </div>
                                    <div className={style.partOneC1}>
                                        <div className={style.inpw}>
                                            <span className={style.topTip}>
                                                问候语<span className={style.partOneHTt}>（客户下单后，对话框自动发出此内容；留空，则不设置）
                                        </span>
                                            </span>
                                            <FormItem>
                                                {getFieldDecorator('start', {                    rules: [{  message: ' ' },],})(
                                                    <Input placeholder="支付宝账号：xxxxxx ； 银行卡号：xxxxxx ；..."/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inpw}>
                                            <span className={style.topTip}>
                                                结束语<span className={style.partOneHTt}>（订单完成后，对话框自动发出此内容；留空，则不设置）
                                        </span>
                                            </span>
                                            <FormItem>
                                                {getFieldDecorator('end', {
                                                    rules: [
                                                        { message: ' ' },
                                                    ],
                                                })(
                                                    <Input placeholder="请查收账户，期待下次交易 ；..."/>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        限制设置
                                        <span className={style.partOneHT}>
                                            设置限制可以让您筛选出可信度更高的交易对象，但过多的限制也将降低您接收订单的机率【选填】
                                        </span>
                                    </div>
                                    <div className={style.partOneC}>
                                        <div className={style.inp}>
                                            <span className={style.topTip}>
                                                同时最大处理订单数 (0 = 不限制)&nbsp;&nbsp; <Tooltip placement="top" title={'设置该限制，可以避免大量订单同时涌进，导致处理不过来的情况，比如当您设定为 2 时，最多只会有 2 笔订单可同时向您下单，其余买家会看到「广告主处理订单已达上限，请稍候再试」，待您处理完后才允许下一笔订单进入'}>
        <Icon type="question-circle" />
      </Tooltip>
                                            </span>
                                            <FormItem>
                                                {getFieldDecorator('maxDeal', { initialValue:'15', rules: [{ required: true, message: ' ' },],})(
                                                    <Input />
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inp}>
                                            <span className={style.topTip}>
                                                买家必须成交过几次 (0 = 不限制)
                                            </span>
                                            <FormItem>
                                                {getFieldDecorator('deal', {initialValue:'0',
                                                    rules: [
                                                        { required: true, message: ' ' },
                                                    ],
                                                })(
                                                    <Input placeholder="请查收账户，期待下次交易 ；..."/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.partOneCX}>
                                            <FormItem>
                                                {getFieldDecorator('autonym', {
                                                    valuePropName: 'checked',
                                                    initialValue: false,
                                                })(
                                                    <Checkbox><span className={style.checkWord}>买家必须通过实名验证</span></Checkbox>
                                                )}
                                            </FormItem>
                                            <FormItem>
                                                {getFieldDecorator('advance', {
                                                    valuePropName: 'checked',
                                                    initialValue: false,
                                                })(
                                                    <Checkbox><span className={style.checkWord}>买家必须通过进阶验证</span></Checkbox>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        注意事项
                                    </div>
                                    <div className={style.partOneC}>
                                        <span className={style.partOneCT}>
                                            OTCBTC 为了保证用户的交易安全，将采用数字货币托管系统。严禁绕过平台私下交易，违者将自行承担损失，且<span className={style.black}>永久封号。</span><br/>
 请在交易说明及交易备注中，详细写下您所希望的交易条件，以及与您交易所需注意的事项，明确的信息将提升您的交易成功机率及评价。<br/>
请勿在 OTCBTC 尝试欺诈行为，违者将会导致帐号被冻结，并承担法律责任。<br/>
                                            <span className={style.red}>发布广告后请履行契约精神，恶意抬价或者是反悔，被投诉将冻结账户 3-14 天不等。
</span>

                                        </span>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        注意！注意！注意！务必详细阅读以下信息，以确保您的交易安全
                                    </div>
                                    <div className={style.partOneC}>
                                        <span className={style.partOneCT}>
                                            交易过程中，请先确认款项入帐后再释放数字货币。<br/>
                                            交易过程中，不要透露与您账户安全有关的敏感资讯。<br/>
                                            不要直接透露你的电子邮箱给买家，否则有可能会收到诈骗信件，及对账户安全造成危害。<br/>
                                            永远确保你在正确的 币点点 网站上，请将网站记录在书签上，避免误闯钓鱼网站。<br/>
                                            币点点 员工将不会以官方名义与您进行交易，请不要与自称是 币点点 的员工交易，避免利益损失。
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className={style.butG}>
                                        <Button htmlType="submit" className="login-form-button">
                                            取消
                                        </Button>
                                    </div>
                                    <div className={style.but}>
                                        <FormItem>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                发布广告
                                            </Button>
                                        </FormItem>
                                    </div>

                                </div>
                            </Form>
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