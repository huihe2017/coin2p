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
import LzEditor from 'react-lz-editor'

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const data = [];


class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            initialValue:`<p>1. 请在订单有效期内及时付款并点击「标记付款已完成」以锁定数字币<br>2. 请通过站内聊天或我留下的联系方式与我联系，我会尽快给您释放数字币<br>3. 转帐时请备注「订单编号后4位」以加快确认速度'</p>`
        };
    }
    receiveHtml(e){
        console.log(e);
        this.setState({
            initialValue:e
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
                                        0广告费，1口价买卖数字币
                                    </span>
                                    <span className={style.headerCLB}>
                                        请确保您的账户余额大于 0.025 BTC，广告才可以展示在广告列表中。
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={style.content}>
                            <Form onSubmit={this.handleSubmit}>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        我想
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
                                        <span className={style.partOneHT}>
                                            ( 注意：广告发布后，该价格不会因市场波动而改变)
                                        </span>
                                    </div>
                                    <div className={style.partOneC}>
                                        <div className={style.inp}>
                                            <FormItem>
                                                {getFieldDecorator('price', {rules: [{ required: true, message: ' ' },],})(
                                                    <Input placeholder="固定单价(不随市价浮动）" suffix={'CNY'}/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inpt}>
                                            <FormItem>
                                                {getFieldDecorator('num', {rules: [{ required: true, message: ' ' },],
                                                })(
                                                    <Input placeholder="数量" suffix={'BTC'}/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inptt}>
                                            <div className={style.total}>
                                                <span className={style.inpT}>
                                                    可出售余额：<span className={style.inpC}>{0} BTC</span>
                                                </span>
                                                    <span className={style.inpT}>
                                                    成交手续费：<span className={style.inpC}>{0} BTC</span>
                                                </span>
                                            </div>
                                            <div className={style.total}>
                                                <span className={style.totalT}>
                                                    总价
                                                </span>
                                                <span className={style.totalC}>
                                                    {51069.9} CNY
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <span className={style.tip}>
                                        当前市场最低出售价：{52100} CNY
                                    </span>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        收款方式
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
                                    <div className={style.partOneC}>
                                        <div className={style.inp}>
                                            <FormItem>
                                                {getFieldDecorator('name', { rules: [
                                                        { required: true, message: ' ' },
                                                    ],
                                                })(
                                                    <Input placeholder="姓名"/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className={style.inp}>
                                            <FormItem>
                                                {getFieldDecorator('account', {rules: [
                                                        { required: true, message: ' ' },
                                                    ],
                                                })(
                                                    <Input placeholder="银行账号" />
                                                )}
                                            </FormItem>
                                        </div>

                                        <div className={style.inp}>
                                            <FormItem>
                                                {getFieldDecorator('contact', { rules: [{ required: true, message: ' ', },],
                                                })(
                                                    <Input placeholder="请填写联系方式"/>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        买家限制
                                    </div>
                                    <div className={style.partOneCX}>
                                        <FormItem>
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: false,
                                            })(
                                                <Checkbox><span className={style.checkWord}>买家必须通过实名验证</span></Checkbox>
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: false,
                                            })(
                                                <Checkbox><span className={style.checkWord}>买家必须通过进阶验证</span></Checkbox>
                                            )}
                                        </FormItem>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        交易备注
                                    </div>
                                    <div className={style.partOneC}>
                                        <div className={style.textArea}>
                                            <FormItem>
                                                {getFieldDecorator('textArea', {rules: [{ message: ' ' },],})(
                                                    <LzEditor active={true} importContent={this.state.initialValue} cbReceiver={this.receiveHtml.bind(this)} uploadProps={uploadProps} removeStyle={false} image={false} video={false} audio={false} pasteNoStyle={false} autoSave={false} fullScreen={false} lang="zh"/>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.partOneH}>
                                        温馨提示
                                    </div>
                                    <div className={style.partOneC}>
                                        <span className={style.partOneCT}>
                                            广告为一次性，交易完成后，广告随即过期。 <br/>
                   <span className={style.black}>BTC 批量交易成交手续费为 0.5%</span>，此费用由发布批量交易广告的用户承担。<a className={style.partOneCA} href="">点击查看详情。
</a> <br/>
                                            例如交易金额为 1 BTC，则批量交易成交手续费为 0.005 BTC。使用 OTB 支付 50% 折扣。
                                            <br/>
                                            <span className={style.red}>发布广告后请履行契约精神，恶意抬价或者是反悔，被投诉将冻结账户 3-14 天不等。</span>

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