import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Tabs,Icon,Table,Menu, Dropdown,Pagination,Radio,Checkbox,Alert,Tooltip,Modal } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import DButton from '../../components/button';

const FormItem = Form.Item;


class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            visible: false
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;



        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.banner}>
                    </div>
                    <div className={style.wlopContent}>
                        <div className={style.wlopContentH}>
                            <div className={style.wlopContentHT}>
                                <span className={style.wlopContentHTT}>
                                    分享链接
                                </span>
                                <span className={style.wlopContentHTB}>
                                    分享链接或二维码邀请好友，好友注册完成的每一笔场外交易订单，您均可获得奖励 <a className={style.wlopContentHA} href="">查看活动细则</a>
                                </span>
                            </div>
                            <div className={style.wlopContentHT1}>
                                <span className={style.wlopContentHAt}>
                                    邀请注册 <Tooltip placement="top" title={'通过您的邀请链接注册的人数'}>
        <Icon type="question-circle" />
      </Tooltip>
                                </span>
                                <span className={style.wlopContentHAb}>
                                    <span className={style.perNum}>
                                        <b>0</b>
                                    </span>
                                    人
                                </span>
                            </div>
                            <div className={style.wlopContentHT2}>
<span className={style.wlopContentHAt}>
                                    您的收益 <Tooltip placement="top" title={'收益实时显示，下次结算日期为 2018-5-1 12:00'}>
        <Icon type="question-circle" />
      </Tooltip>
                                </span>
                                <span className={style.wlopContentHAb1}>
                                    暂无
                                </span>
                            </div>
                        </div>
                        <div className={style.wlopContentC}>
                            <div className={style.inp}>
                                <Input value="币点点是目前最流畅、最靠谱、最好用的场外交易平台，支持支付宝、微信、银行卡支付购买BTC、ETH、EOS、USDT、QTUM、ZEC、GXS、BCH 等数字币。现在注册，即可领取比特币红包！" />
                            </div>
                            <div className={style.but}>
                                <DButton width={200} height={60} word={<b>复制邀请链接</b>} size={18}/>
                            </div>
                            <div onClick={this.showModal}  className={style.but}>
                                <DButton width={200} height={60} word={<b>二维码邀请好友</b>} size={18}/>
                                <div className={style.la}>
                                    <Modal
                                        visible={this.state.visible}
                                        onCancel={this.handleCancel}
                                        bodyStyle={{padding:'0',width:370}}
                                    >
                                        <img src={require('./images/register.png')} alt=""/>
                                        <img className={style.qcode} src={require('./images/qCode.png')} alt=""/>
                                        <span className={style.imgTip}>
                                            点击下载图片，分享给朋友
                                        </span>
                                    </Modal>
                                </div>

                            </div>
                        </div>
                        <div className={style.wlopContentC1}>
                            <div className={style.wlopContentCC}>
                                <div className={style.wlopContentCT}>
                                    邀请记录：
                                </div>
                                <div className={style.wlopContentCCT}>
                                    被邀请人动态
                                </div>
                                <div className={style.wlopContentCCT}>
                                    收益动态

                                </div>
                            </div>
                            <div className={style.wlopContentCCT1}>
                                暂无
                            </div>
                        </div>

                        <div className={style.wlopContentCC}>
                            <div className={style.wlopContentCT1}>
                                邀请好友注册，赚取返利
                            </div>
                            <span className={style.wlopContentCTtip}>
                                复制链接或二维码邀请好友注册，被邀请人成功完成的每一笔场外交易订单，您均可获得奖励
                            </span>
                        </div>
                        <div>
                            <span className={style.title}>
                                活动细则：
                            </span>
                            <span className={style.content}>
1. 在本页中选择「二维码邀请好友」或者「复制邀请链接」分享给微信好友或朋友圈；<br/>
2. 好友通过您的邀请链接注册，将会计入邀请人数；<br/>
3. 活动期间，计入邀请人数的好友成功完成的每笔场外交易(普通交易或批量交易)，您均可获得其交易手续费的 20% 作为奖励。后续将根据实际情况对奖励比例进行调整；<br/>
4. 奖励以数字币形式发放，奖励币种与好友交易所使用的币种一致。下次结算时间为 2018-5-1 12:00，收益于3个工作日内发放；<br/>
5. 同一用户仅能被邀请一次；<br/>
6. OTCBTC 保留对本活动的最终修改解释权。<br/>
例：好友通过您的邀请链接注册，若他完成一笔场外交易产生手续费 0.1 BTC，则您将得到 0.02 BTC 奖励。
                            </span>
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