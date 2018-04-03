import React from 'react'
import style from './index.css'
import {Button,Alert} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            showBut1:true,
            showBut2:true,
            showBut3:true
        }
    }
    showButton1(e){
        this.setState({
            showBut1:e
        })
    }
    showButton2(e){
        this.setState({
            showBut2:e
        })
    }
    showButton3(e){
        this.setState({
            showBut3:e
        })
    }

    render() {
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.bannerList}>
                    <ul  className={style.bannerUl}>
                        <li className={style.bannerLi}></li>
                    </ul>
                    <ul className={style.bannerItem}>
                        <li className={style.bannerItemContent} onMouseEnter={this.showButton1.bind(this,false)} onMouseLeave={this.showButton1.bind(this,true)}>
                            <span className={style.itemTitle}>
                                场外交易
                            </span>
                            <div hidden={!this.state.showBut1}>
                               <span className={style.itemContent}>
                                使用法币购买 / 出售数字币
                            </span>
                                <div className={style.imgList}>
                                    <img src={require('./images/wechat.png')} alt=""/>
                                    <img src={require('./images/paybao.png')} alt=""/>
                                    <img src={require('./images/bank.png')} alt=""/>
                                </div>
                            </div>

                            <a className={style.but} href="javascript:void (0)" hidden={this.state.showBut1}>
                                立即购买
                            </a>
                        </li>
                        <li className={style.bannerItemContent} onMouseEnter={this.showButton2.bind(this,false)} onMouseLeave={this.showButton2.bind(this,true)}>
                            <span className={style.itemTitle}>
                                场外交易
                            </span>
                            <div hidden={!this.state.showBut2}>
                               <span className={style.itemContent1}>
                                ETH / BTC 换取各种数字币
                            </span>

                            </div>

                            <a className={style.but} href="javascript:void (0)" hidden={this.state.showBut2}>
                                立即交易
                            </a>
                        </li>
                        <li className={style.bannerItemContent} onMouseEnter={this.showButton3.bind(this,false)} onMouseLeave={this.showButton3.bind(this,true)}>
                            <span className={style.itemTitle}>
                                场外交易
                            </span>
                            <div hidden={!this.state.showBut3}>
                               <span className={style.itemContent1}>
                                带你鉴别区块链的投资机会
                            </span>

                            </div>

                            <a className={style.but} href="javascript:void (0)" hidden={this.state.showBut3}>
                                阅读教程
                            </a>
                        </li>

                    </ul>
                </div>
                <div className={style.tipTip}>
                    <div className={style.tip}><img className={style.tipImg} src={require('./images/tip.png')} alt=""/><b>最新公告：</b>ETH/USDT、BTC/USTD 交易对上线 （3-29）</div>
                </div>
                <div className={style.outMarket}>
                    <div className={style.outMarketPart}>
                        <div className={style.outMarketTitle}>
                            <span className={style.outMarketTitleT}>
                                Coin2p场外交易区
                            </span>
                            <span className={style.outMarketTitleB}>
                                支持多国法币购买 BTC 、 ETH 、 LTC 、 EOS 、 BCH 、 NEO 、 QTUM 、 ZEC 、 USDT 等多种主流数字币 <br/>
                                下单 => 微信／支付宝转账=> 成交
                            </span>
                        </div>
                        <div className={style.outMarketBut}>
                            <a href="javascript:void (0)">
                                购买BTC
                            </a>
                            <a href="javascript:void (0)">
                                出售BTC
                            </a>
                        </div>
                        <div className={style.outMarketList}>

                        </div>
                    </div>
                </div>
                <div className={style.about}>

                </div>
                <Footer/>

            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        auth:state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home