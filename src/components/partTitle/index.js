import React from 'react'
import style from './index.css'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';


class PartTitle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div className={style.wlop}>
                <span className={style.title}>
                    {this.props.word}
                </span>
                {
                    this.props.a?<Link to={this.props.herf}>
                        <a  className={style.a} href="">{this.props.a}</a>
                    </Link>:''
                }

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

PartTitle = connect(mapStateToProps, mapDispatchToProps)(PartTitle)
export default PartTitle