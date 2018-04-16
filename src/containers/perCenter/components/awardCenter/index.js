import React from 'react'
import style from './index.css'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import PartTitle from '../../../../components/partTitle'

class AwardCenter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div className={style.wlop}>
                <div className={style.partOne}>
                    <PartTitle word={'我的红包'}/>
                </div>
                <div className={style.partOne}>
                    <PartTitle word={'分发记录'}/>
                    <div className={style.partTableBox}>
                        <table className={style.partTable}>
                            <thead >
                                <tr>
                                    <td>
                                        时间
                                    </td>
                                    <td>
                                        类型
                                    </td>
                                    <td>
                                        币种
                                    </td>
                                    <td>
                                        数量
                                    </td>
                                    <td>
                                        备注
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan={5}>
                                    <span className={style.none}>
                                    暂无内容
                                </span>
                                </td>

                            </tr>
                            </tbody>
                        </table>
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

AwardCenter = connect(mapStateToProps, mapDispatchToProps)(AwardCenter)
export default AwardCenter