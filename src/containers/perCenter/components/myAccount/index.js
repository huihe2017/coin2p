import React from 'react'
import style from './index.css'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import PartTitle from '../../../../components/partTitle'
import {Switch } from 'antd';

class MyAccount extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    onoff(e){
        console.log(e);
    }

    render() {

        return (
            <div className={style.wlop}>
                <div className={style.header}>
                    充值，提币请点击导航栏 【资产管理】>【<a href="" className={style.toWallet}>我的钱包</a>】
                </div>
                <div className={style.content}>
                    <div className={style.partOne}>
                        <PartTitle word={'交易折扣设置'} herf={'/login'} a={'什么是OTB'}/>
                        <div className={style.partOneB}>
                            <div className={style.partOneBCL}>
                                <span className={style.partOneBCT}>
                              使用OTB支付交易手续费（50%折扣）
                            </span><span className={style.partOneBCB}>
                                OTB可到 <a href="">场外购买</a>或 <a href="">币币购买</a>
                            </span>
                            </div>
                            <div className={style.partOneBCR}>
                                <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked={true} onChange={this.onoff}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.partTwo}>
                        <PartTitle word={'场外交易设置'}/>
                        <div className={style.partTwoB}>
                            <Link to={'/login'}>
                                <a className={style.partTwoBLi} href="javascript:void (0)">
                                    <span className={style.partTwoBLiT} >
                                        收款账号设置
                                    </span>
                                    <span className={style.partTwoBLiB} >
                                        设置后，收款信息可展示在订单界面。
                                    </span>
                                </a>
                            </Link>
                            <Link to={'/login'}>
                                <a className={style.partTwoBLi} href="javascript:void (0)">
                                    <span className={style.partTwoBLiT} >
                                        信任名单
                                    </span>
                                    <span className={style.partTwoBLiB} >
                                        将用户加入信任名单后，可在此处查看用户信息和他们发布的广告。
                                    </span>
                                </a>
                            </Link>
                            <Link to={'/login'}>
                                <a className={style.partTwoBLi} href="javascript:void (0)">
                                    <span className={style.partTwoBLiT} >
                                        黑名单
                                    </span>
                                    <span className={style.partTwoBLiB} >
                                        将用户加入黑名单后，意味着该用户将不能与您进行交易。
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={style.partTwo}>
                        <PartTitle word={'币币交易设置'}/>
                        <div className={style.partTwoB}>
                            <Link to={'/login'}>
                                <a className={style.partTwoBLi} href="javascript:void (0)">
                                    <span className={style.partTwoBLiT} >
                                        API 管理
                                    </span>
                                    <span className={style.partTwoBLiB} >
                                        创建 API Key 可以让您借助第三方网站或移动应用使用 币点点 的行情查询，实时交易的服务。
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
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

MyAccount = connect(mapStateToProps, mapDispatchToProps)(MyAccount)
export default MyAccount