import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserShow from '../../components/userShow';
import TitleBack from '../../components/titleBack';
import DButton from '../../components/button'

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            phone:false
        }
    }

    render() {
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <TitleBack wid={96} word={'实名验证'}/>
                        <div className={style.wlopContentT}>
                            <span className={style.wlopContentTH}>
                                温馨提示
                            </span>
                            <span  className={style.wlopContentTC}>
                                请您使用 <a className={style.wlopContentTCA} href="javascript:void (0)">最新版Chrome浏览器</a> or <a className={style.wlopContentTCA} href="javascript:void (0)">最新版FireFox浏览器</a> 进行实名认证，搜狗、猎豹、360等浏览器可能无法正常使用实名验证权限
                            </span>
                        </div>
                        <div className={style.wlopContentC}>
                            <div className={style.wlopContentCT}>
                               <span className={style.wlopContentCC}>
                                认证照片规范
 <a className={style.wlopContentCCA} href="javascript:void (0)">为什么实名验证不能添加水印？
</a>
                            </span>
                                <a className={style.wlopContentCA} href="javascript:void (0)">如何用身份证进行实名认证
                                </a>
                            </div>
                            <div className={style.wlopContentCB}>
                                <div className={style.wlopContentCCLi}>
                                    <div className={style.wlopContentCCLiImgBox}>
                                        <img className={style.wlopContentCCLiImgBox1} src={require('./images/defined.png')} alt=""/>
                                        <img className={style.wlopContentCCLiImgBox2} src={require('./images/right.png')} alt=""/>
                                    </div>
                                    <span className={style.wlopContentCCLiWord}>
                                       自然光正面自拍
                                    </span>
                                </div>
                                <div className={style.wlopContentCCLi}>
                                    <div className={style.wlopContentCCLiImgBox}>
                                        <img className={style.wlopContentCCLiImgBox1} src={require('./images/bigEyes.png')} alt=""/>
                                        <img className={style.wlopContentCCLiImgBox2} src={require('./images/error.png')} alt=""/>
                                    </div>
                                    <span className={style.wlopContentCCLiWord}>
                                       美图 / PS
                                    </span>
                                </div>
                                <div className={style.wlopContentCCLi}>
                                    <div className={style.wlopContentCCLiImgBox}>
                                        <img className={style.wlopContentCCLiImgBox1} src={require('./images/cardPicture.png')} alt=""/>
                                        <img className={style.wlopContentCCLiImgBox2} src={require('./images/error.png')} alt=""/>
                                    </div>
                                    <span className={style.wlopContentCCLiWord}>
                                       证件照
                                    </span>
                                </div>
                                <div className={style.wlopContentCCLi}>
                                    <div className={style.wlopContentCCLiImgBox}>
                                        <img className={style.wlopContentCCLiImgBox1} src={require('./images/shuiyinP.png')} alt=""/>
                                        <img className={style.wlopContentCCLiImgBox2} src={require('./images/error.png')} alt=""/>
                                    </div>
                                    <span className={style.wlopContentCCLiWord}>
                                       加水印
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className={style.wlopContentB}>
                            <div className={style.wlopContentCT}>
                               <span className={style.wlopContentCC}>
                                身份证照片规范（下面以身份证背面为例，正面保持与背面一致效果）
                                </span>
                            </div>
                            <div className={style.wlopContentCB}>
                                <div className={style.wlopContentCCLi1}>
                                    <div className={style.wlopContentCCLiImgBox11}>
                                        <img className={style.wlopContentCCLiImgBox111} src={require('./images/definedID.png')} alt=""/>
                                        <img className={style.wlopContentCCLiImgBox211} src={require('./images/right.png')} alt=""/>
                                    </div>
                                    <span className={style.wlopContentCCLiWord}>
                                       自然光正面自拍
                                    </span>
                                </div>
                                <div className={style.wlopContentCCLi1}>
                                    <div className={style.wlopContentCCLiImgBox11}>
                                        <img className={style.wlopContentCCLiImgBox111} src={require('./images/psID.png')} alt=""/>
                                        <img className={style.wlopContentCCLiImgBox211} src={require('./images/error.png')} alt=""/>
                                    </div>
                                    <span className={style.wlopContentCCLiWord}>
                                       经过PS处理
                                    </span>
                                </div>
                                <div className={style.wlopContentCCLi1}>
                                    <div className={style.wlopContentCCLiImgBox11}>
                                        <img className={style.wlopContentCCLiImgBox111} src={require('./images/shuiyinID.png')} alt=""/>
                                        <img className={style.wlopContentCCLiImgBox211} src={require('./images/error.png')} alt=""/>
                                    </div>
                                    <span className={style.wlopContentCCLiWord}>
                                       加水印
                                    </span>
                                </div>
                                <div className={style.wlopContentCCLi1}>
                                    <div className={style.wlopContentCCLiImgBox11}>
                                        <img className={style.wlopContentCCLiImgBox111} src={require('./images/definedID.png')} alt=""/>
                                        <img className={style.wlopContentCCLiImgBox211} src={require('./images/error.png')} alt=""/>
                                    </div>
                                    <span className={style.wlopContentCCLiWord}>
                                       证件有效期过期
                                    </span>
                                </div>
                                <div className={style.wlopContentCCLi1}>
                                    <div className={style.wlopContentCCLiImgBox11}>
                                        <img className={style.wlopContentCCLiImgBox111} src={require('./images/mohuID.png')} alt=""/>
                                        <img className={style.wlopContentCCLiImgBox211} src={require('./images/error.png')} alt=""/>
                                    </div>
                                    <span className={style.wlopContentCCLiWord}>
                                       信息模糊
                                    </span>
                                </div>
                            </div>
                            <div className={style.but}>
                                <Link to='/realCheckOne'>
                                    <DButton width={120} height={36} size={14} word={'开始实名验证'}/>
                                </Link>
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

export default EmailCheck