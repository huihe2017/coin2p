import React from 'react'
import style from './index.css'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import CheckItem from './components/checkItems'
import DButton from '../../components/button'

class UserPart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

// alert(this.props.userMsg.userAuth.emailAuth)
        return (
            <div className={style.wlop}>
                <div className={style.wlopMContentLT}>
                    <div className={style.userHead}>
                        <img className={style.userImg} src={this.props.userMsg.portrait} alt=""/>
                        <div className={style.userData}>
                                                <span className={style.userName}>
                                                    {this.props.userMsg.nickname}
                                                </span>
                            <span className={style.userEmail}>
                                                    {this.props.userMsg.account}
                                                </span>
                            <span>上次登录：{this.props.userMsg.lastLoginTime}
                                                </span>
                            <span>
                                                   评价数：+{this.props.userMsg.evaluateValue[0]}/-{this.props.userMsg.evaluateValue[1]}
                                                </span>
                        </div>
                    </div>
                    <div className={style.userBut}>
                        <div className={style.but}>
                            <Link to={'/setData'}>
                                <DButton width={90} height={36} size={15} ghost={true} word={'修改资料'}/>
                            </Link>
                        </div>
                        <div className={style.but}>
                            <Link to={'/setPass'}>
                                <DButton width={90} height={36} size={15} ghost={true} word={'修改密码'}/>
                            </Link>
                        </div>
                        <div className={style.but}>
                            <DButton width={90} height={36} size={15} ghost={true} word={'登出'}/>
                        </div>
                    </div>
                </div>
                <div className={style.wlopMContentLT}>
                    <div className={style.checkIdHead}>
                        <CheckItem title={true} id={true} herf={'/login'} />
                    </div>
                    <div className={style.checkIdContent}>
                        <div className={style.checkIdContentLi}>
                            <CheckItem title={false} content={'邮箱认证'} checked={true} />
                        </div>
                        <div className={style.checkIdContentLi}>
                            <CheckItem title={false} content={'实名认证'} checked={this.props.userMsg.userAuth.realNameAuth}  herf={'/realCheckStart'} />
                        </div>
                        <div className={style.checkIdContentLi}>
                            <CheckItem title={false} content={'进阶认证'} checked={this.props.userMsg.userAuth.AdvancedAuth} three={true} />
                        </div>




                    </div>
                </div>
                <div>
                    <div className={style.checkIdHead}>
                        <CheckItem title={true}  herf={'/login'} />
                    </div>
                    <div className={style.checkIdContent}>
                        <div className={style.checkIdContentLi}>
                            <CheckItem title={false} content={'两步验证'} checked={this.props.userMsg.userAuth.twoStepAuth} herf={'/login'} />
                        </div>
                        <div className={style.checkIdContentLi}>
                            <CheckItem title={false} content={'手机认证'} checked={this.props.userMsg.userAuth.phoneAuth} herf={'/login'} />
                        </div>
                    </div>
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

UserPart = connect(mapStateToProps, mapDispatchToProps)(UserPart)
export default UserPart