import React from 'react'
import style from './index.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';


class OutHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 3,
        }
    }


    render() {

        return (
            <div className={style.wrap}>
                <ul className={style.stepUi}>
                    <li className={style.steps}>
                        <div className={style.stepLied}>
                            条件搜索
                        </div>

                        <div className={style.stepLined}>
                        </div>
                    </li>
                    <li className={style.steps}>
                        <div className={this.state.step >= 2 ? style.stepLied : style.stepLi}>
                            方案选择
                        </div>
                        {
                            this.state.step >= 2 ? <div className={style.stepLiItem}>
                                <span className={style.iconPart}>CNY><span>BTC</span></span>
                                <span className={style.iconPart}>银行转账</span>
                                <a className={style.stepLiBut} href="javascript:void (0)">
                                    重新选择
                                </a>
                            </div> : null
                        }

                        <div className={this.state.step >= 2 ? style.stepLined : style.stepLine}>
                        </div>
                    </li>
                    <li className={style.steps}>
                        <div className={this.state.step >= 3 ? style.stepLied : style.stepLi}>
                            新建交易
                        </div>
                        <div className={this.state.step >= 3 ? style.stepLined : style.stepLine}>
                        </div>
                    </li>
                    <li className={style.steps} hidden={false}>
                        <div className={this.state.step >= 4 ? style.stepLied : style.stepLi}>
                            进行交易
                        </div>
                        <div className={this.state.step >= 4 ? style.stepLined : style.stepLine}>
                        </div>
                    </li>
                    <li className={style.steps} hidden={false}>
                        <div className={this.state.step >= 5 ? style.stepLied : style.stepLi}>
                            进行移交
                        </div>
                        <div className={this.state.step >= 5 ? style.stepLined : style.stepLine}>
                        </div>
                    </li>
                    <li className={style.steps} hidden={false}>
                        <div className={this.state.step >= 6 ? style.stepLied : style.stepLi}>
                            完成交易
                        </div>
                        <div className={this.state.step >= 6 ? style.stepLined : style.stepLine}>
                        </div>
                    </li>
                    <li className={style.stepStop} hidden={true}>
                        <div className={style.stepLiStop}>
                            交易取消
                        </div>
                        <div className={style.stepLined}>
                        </div>
                    </li>

                </ul>
                <div className={style.online}>
                    <span className={style.onlineTitle}>
                        在线交易人数
                    </span>
                    <span className={style.onlineNum}>
                        {this.props.onlineNum}
                    </span>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

OutHeader = connect(mapStateToProps, mapDispatchToProps)(OutHeader)

export default OutHeader