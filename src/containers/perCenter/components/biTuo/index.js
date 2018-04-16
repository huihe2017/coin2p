import React from 'react'
import style from './index.css'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';


class BiTuo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div className={style.wlop}>
                敬请期待
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

BiTuo = connect(mapStateToProps, mapDispatchToProps)(BiTuo)
export default BiTuo