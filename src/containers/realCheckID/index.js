import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Upload, Icon,Modal} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserShow from '../../components/userShow';
import TitleBack from '../../components/titleBack';
import DButton from '../../components/button'
import TipWord from '../../components/tipWord'

const Option = Select.Option;
const FormItem = Form.Item;

class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            phone:false,
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
    }


    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    render() {
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        const imageUrl = this.state.imageUrl;
        const uploadButton = (
            <div>
                <img className={style.selectPartImg} src={require('./images/idcard.png')} alt=""/>
                <span className={style.selectPartItemW}>
                                                点击上传正面图像身份证</span>
            </div>
        );
        const uploadButton1 = (
            <div>
                <img className={style.selectPartImg} src={require('./images/guohui.png')} alt=""/>
                <span className={style.selectPartItemW}>
                                                点击上传正面图像身份证</span>
            </div>
        );
        const { previewVisible, previewImage, fileList } = this.state;

        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <TitleBack wid={96} word={'实名验证'}/>


                        <div className={style.wlopContentC}>
                            <span className={style.TopTitle}>
上传身份证正反面图像
                            </span>
                        </div>
                        <div className={style.wlopContentB}>
                            <div className={style.wlopContentCT}>
                                <div className={style.selectPart}>

                                    <div className={style.selectPartL}>
                                        <div className={style.selectPartItem}>
                                            <Upload
                                                action="//jsonplaceholder.typicode.com/posts/"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChange}
                                            >
                                                {fileList.length >= 1 ? null : uploadButton}
                                            </Upload>
                                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                            </Modal>
                                        </div>
                                        <div className={style.selectPartItem}>
                                            <Upload
                                                action="//jsonplaceholder.typicode.com/posts/"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChange}
                                            >
                                                {fileList.length >= 1 ? null : uploadButton1}
                                            </Upload>
                                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                            </Modal>
                                        </div>
                                    </div>
                                    <div className={style.selectPartL}>
                                        <div>
                                            <DButton width={120} height={36} size={14} word={'继续'} ghost={true}/>
                                        </div>

                                        <span className={style.selectPartLW}>
                                            最大文件大小为8MB。JPG或PNG格式。
                                        </span>
                                    </div>


                                </div>
                                <TipWord/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
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

EmailCheck = connect(mapStateToProps, mapDispatchToProps)(EmailCheck)
const WrapEmailCheck = Form.create()(EmailCheck)
export default WrapEmailCheck