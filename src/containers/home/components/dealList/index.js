import React from 'react'
import style from './index.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setTime} from "../../../../common/tool";


class DealList extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {


    }

    getList = () => {

        let num = this.props.num
        if (num === 1) {
            return this.props.data.map((value,index) => {
                if(index>4){
                    return null
                }
                return (
                    <li>
                        <span className={style.content}>{value.realCurrency} => {value.tradeCount} {value.currency} ({value.tradeTime} 秒移交)</span>
                        <span className={style.time}>
                        {setTime(value.time)}
                    </span>
                    </li>
                )
            })
        }

        if (num === 2) {
            return this.props.data.map((value,index) => {
                if(index<4||index>9){
                    return null
                }
                return (
                    <li>
                        <span className={style.content}>CNY => 129.87 EOS (46 秒移交)</span>
                        <span className={style.time}>
                        21秒前
                    </span>
                    </li>
                )
            })
        }

        if (num === 3) {
            return this.props.data.map((value,index) => {
                if(index<9||index>14){
                    return null
                }
                return (
                    <li>
                        <span className={style.content}>CNY => 129.87 EOS (46 秒移交)</span>
                        <span className={style.time}>
                        21秒前
                    </span>
                    </li>
                )
            })
        }
    }

    render() {
        return (
            <ul className={style.wlop}>
                {
                    this.getList()
                }
            </ul>
        )
    }
}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

DealList = connect(mapStateToProps, mapDispatchToProps)(DealList)

export default DealList