import React from 'react'
import style from './index.css'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';


class TitleBack extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={style.wlopMContentRTitle}>
                <span className={style.wlopMContentRTitleA} style={{width:this.props.wid}}>
                    {this.props.word}
                </span>
                <Link to={'/perCenter'}>
                    <a className={style.back} href="javascript:void (0)">
                        <img src={require('./images/back.png')} alt=""/>
                        返回我的账号
                    </a>
                </Link>
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

TitleBack = connect(mapStateToProps, mapDispatchToProps)(TitleBack)
export default TitleBack