import React from 'react'
import style from './index.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <ul className={style.wlop}>
                <li>
                    <span className={style.content}>CNY => 129.87 EOS (46 秒移交)</span>
                    <span className={style.time}></span>
                </li>
                <li>
                    <span className={style.content}>CNY => 129.87 EOS (46 秒移交)</span>
                    <span className={style.time}></span>
                </li>
                <li>
                    <span className={style.content}>CNY => 129.87 EOS (46 秒移交)</span>
                    <span className={style.time}></span>
                </li>
                <li>
                    <span className={style.content}>CNY => 129.87 EOS (46 秒移交)</span>
                    <span className={style.time}></span>
                </li>
                <li>
                    <span className={style.content}>CNY => 129.87 EOS (46 秒移交)</span>
                    <span className={style.time}></span>
                </li>
            </ul>
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

Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home