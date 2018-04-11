import React from 'react'
import style from './index.css'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';


class SellPart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    re(){
        if(this.props.title){
            if(this.props.id){
                return(<div>
                    <img className={style.checkIdHeadImg} src={require('./images/IDcard.png')} alt=""/>
                    <span className={style.checkIdHeadTidle}>
                    身份认证:
                    </span>
                    <Link to={this.props.herf}>
                        <a className={style.checkIdHeadA} href="javascript:void (0)">
                            我需要完成那些验证？
                        </a>
                    </Link>
                </div>)
            }else{
                return(<div>
                    <img className={style.checkIdHeadImg} src={require('./images/safe.png')} alt=""/>
                    <span className={style.checkIdHeadTidle}>
                    安全认证:
                    </span>
                    <Link to={this.props.herf}>
                        <a className={style.checkIdHeadA} href="javascript:void (0)">
                            如何提高账户安全性？
                        </a>
                    </Link>
                </div>)
            }
        } else {
            return(<div>
                <img className={style.checkIdHeadImg} src={require(this.props.checked?'./images/ed.png':'./images/empty.png')} alt=""/>
                <span className={style.checkIdHeadTidleN} style={this.props.checked?{color: '#DABB84'}:{color: '#989898'}}>
                    {this.props.content}
                    </span>
                {this.word()}

            </div>)
        }
    }

    word(){
        if(this.props.checked){
            return(
                <span className={style.checkIdHeadAed}>
                   已认证
                </span>
            )
        }else {
            if(!this.props.three){
                return(
                    <Link to={this.props.herf}>
                        <a className={style.checkIdHeadAe} href="javascript:void (0)">
                            去认证
                        </a>
                    </Link>
                )
            }else if(this.props.three){
                return(
                    <span className={style.checkIdHeadAed} >
                        完成三笔场外交易后可申请
                    </span>


                )
            }
        }
    }

    render() {

        return (
            <div className={style.wlop}>
                {
                   this.re()
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

SellPart = connect(mapStateToProps, mapDispatchToProps)(SellPart)
export default SellPart