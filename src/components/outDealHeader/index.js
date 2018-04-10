import React from 'react'
import style from './index.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';


class OutHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step:2,
            one:false,
            two:false,
            three:false,
            four:false,
            five:false,
            six:false,
        }
    }



    render() {

        return (
            <div className={style.wrap}>
                <ul className={style.stepUi}>
                    <li className={style.steps}>
                        <div className={style.stepLi} style={{backgroundColor: 'rgba(218,187,132,1)',color: '#fff'}}>
                            条件搜索
                        </div>
                        <div className={style.stepLiItem}>
                            <span className={style.iconPart}>CNY><span>BTC</span></span>
                            <span className={style.iconPart}>银行转账</span>
                            <a className={style.stepLiBut} href="javascript:void (0)">
                                重新选择
                            </a>
                        </div>
                        <div style={{backgroundColor: 'rgba(218,187,132,1)'}} className={style.stepLine}>
                        </div>
                    </li>
                    <li className={style.steps}>
                        <div className={style.stepLi} style={{backgroundColor: 'rgba(218,187,132,1)',color: '#fff'}}>
                            方案选择
                        </div>
                        <div  style={{backgroundColor: 'rgba(218,187,132,1)'}} className={style.stepLine}>
                        </div>
                    </li>
                    <li className={style.steps}>
                        <div className={style.stepLi}>
                            新建交易
                        </div>
                        <div className={style.stepLine}>
                        </div>
                    </li>
                    <li className={style.steps}>
                        <div className={style.stepLi}>
                            进行交易
                        </div>
                        <div className={style.stepLine}>
                        </div>
                    </li>
                    <li className={style.steps}>
                        <div className={style.stepLi}>
                            进行移交
                        </div>
                        <div className={style.stepLine}>
                        </div>
                    </li>
                    <li className={style.steps}>
                        <div className={style.stepLi}>
                            完成交易
                        </div>
                        <div className={style.stepLine}>
                        </div>
                    </li>
                </ul>
                <div className={style.online}>
                    <span className={style.onlineTitle}>
                        在线交易人数
                    </span>
                    <span  className={style.onlineNum}>
                        {this.props.onlineNum}
                    </span>
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

OutHeader = connect(mapStateToProps, mapDispatchToProps)(OutHeader)

export default OutHeader