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

class TwoSBack extends React.Component {
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
                        <TitleBack wid={96} word={'两步验证'}/>
                        <img className={style.twoImg} src={require('./images/twoStep.png')} alt=""/>
                        <span className={style.twoTipT}>
                           Authy / Google Authentication
                        </span>
                        <span className={style.twoContentT}>
                           您已经绑定两步验证
                        </span>
                        <span className={style.twoContentC}>
                           两步验证为您的账户添加了一层保护 <br/>
                            建议仅在需要更换两步验证时，才解除您当前的 Authy 或 Google Authentication
                        </span>


                        <div className={style.but}>
                            <DButton width={240} height={36} size={14} word={'解除绑定'} ghost={true}/>
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

TwoSBack = connect(mapStateToProps, mapDispatchToProps)(TwoSBack)

export default TwoSBack