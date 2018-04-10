import React from 'react'
import style from './index.css'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';


class Button extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
       let styles={
           width:this.props.width,
           height:this.props.height,
           borderRadius: '5px',
           outline:'none',
           fontSize:this.props.size,
           cursor:'pointer',
           transition: 'all 0.3s'
       }
        return (
           <button disabled={this.props.diss} className={this.props.ghost?style.ghost:style.but} style={styles}>
               {this.props.word}
           </button>
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

Button = connect(mapStateToProps, mapDispatchToProps)(Button)
export default Button