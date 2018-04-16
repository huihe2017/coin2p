import React from 'react'
import style from './index.css'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';


class TipWord extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={style.tipWord}>
                <span className={style.wlopContentCC}>
                    一，您最多可以申请 3 次实名认证，当前是第 1 次申请；
                </span>
                <span className={style.wlopContentCC}>
                    二，每次申请验证操作的有效时间是 30 分钟，请在 30 分钟之内完成照片上传，超时则算 1 次失败申请；
                </span>
                <span className={style.wlopContentCC}>
                    三，如果您需要帮助，请查看帮助文档 <a href='javascript:void (0)' className={style.wlopContentCBA}>如何进行护照验证，如何进行身份验证；</a>
                </span>
                <span className={style.wlopContentCC}>
                    四，<span className={style.wlopContentCCR}>上传照片的过程请不要刷新页面或者使用浏览器的后退功能，如需重新上传照片请使用上传界面中的返回按钮。</span>
                </span>
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

TipWord = connect(mapStateToProps, mapDispatchToProps)(TipWord)
export default TipWord