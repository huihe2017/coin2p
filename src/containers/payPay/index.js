import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Icon,Pagination,Checkbox,Alert,Tabs,Upload,Modal } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link,browserhistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserPart from '../../components/userPart'
import Dbutton from '../../components/button'
import TitleBack from '../../components/titleBack'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class SetPass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked:false,
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(values)
            if (!err) {
                //Toast.loading('', 0, null, false)
                // this.props.register({
                //     // tel: this.state.areaCode + " " + this.state.phone,
                //     pwd: this.state.password,
                //     code: this.state.authCode,
                //     email: this.state.email,
                //     language:this.props.auth.isEnglish
                // }, (errorText) => {
                //     Toast.hide()
                //     this.setState({picImg: this.getPicImg()})
                //     if (errorText) {
                //         Toast.info(errorText, 3, null, false)
                //     } else {
                //         this.props.hideAuth()
                //     }
                // })
                message.success("注册成功")
            }
        });
    }
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    handleChange = ({ fileList }) => this.setState({ fileList })
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleCancel = () => this.setState({ previewVisible: false })


    handleChangeCB = (e) => {
        this.setState({
            checkNick: e.target.checked,
        }, () => {
            this.props.form.validateFields(['nickname'], { force: true });
        });
    }



    render() {
        console.log(777,hashHistory);
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        const { previewVisible, previewImage, fileList } = this.state;
        const imageUrl = this.state.imageUrl;

        const uploadButton = (
            <div>
                <img className={style.selectPartImg} src={require('../advanceCheckStart/images/handID.png')} alt=""/>
                <span className={style.selectPartItemW}>
                                                点击上传正面图像身份证</span>
            </div>
        );

        return (
            <div className={style.wrap}>
                <Header/>
                    <div className={style.wlop}>
                        <div className={style.wlopContent}>
                            <div className={style.wlopMContent}>
                                <div className={style.wlopMContentL}>
                                    <UserPart/>
                                </div>
                                <div className={style.wlopMContentR}>
                                    <TitleBack wid={144} word={'编辑支付方式'}/>
                                    <div className={style.header}>
                                        支付宝支付
                                    </div>

                                    <div className={style.content}>
                                        <Form onSubmit={this.handleSubmit} className="login-form">
                                            <div className={style.formPart}>
                                                <div className={style.wlopContentC}>
                                                <span className={style.wlopContentCTT} >
                                                    账号信息
                                                </span>

                                                </div>
                                                <div className={style.inpBox}>
                                                    <div className={style.inp}>
                                    <span className={style.inpTip}>
                                        姓名
                                    </span><FormItem>
                                                            {getFieldDecorator('name', {
                                                                rules: [{ required: true, message: '请输入您的姓名！',pattern: /^[\u4E00-\u9FA5A-Za-z]+$/, }]
                                                            })(
                                                                <Input  className={style.inputp} placeholder="请输入姓名" />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className={style.inp}>
                                    <span className={style.inpTip}>
                                        账户
                                    </span><FormItem>
                                                        {getFieldDecorator('account', {
                                                            rules: [{ required: true, message: '请输入您的账户！',pattern: /^[a-zA-Z0-9]*$/, }]
                                                        })(
                                                            <Input  className={style.inputp} placeholder="请输入账户" />
                                                        )}
                                                    </FormItem>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className={style.formPart}>
                                                <div className={style.wlopContentC}>
                                                <span className={style.wlopContentCTT} >上传收款二维码/账户信息
                                                </span>
                                                    <a className={style.wlopContentCTA} href="">
                                                        如何获取支付宝收款码？
                                                    </a>
                                                </div>
                                                <div className={style.selectPartItem}>

                                                    <FormItem>
                                                        {getFieldDecorator('upload')(
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
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className={style.partOne}>

                                                    <div className={style.tuxing1}>
                                                        <div className={style.nick}>
                                                            <FormItem>
                                                                <Checkbox
                                                                    value={this.state.checkNick}
                                                                    onChange={this.handleChangeCB}
                                                                >
                                            <span className={style.wlopContentCTTB}>
                                                展示在订单首页
                                            </span>
                                                                </Checkbox>
                                                            </FormItem>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className={style.but}>
                                                <FormItem>
                                                    <Button htmlType="submit">提交</Button>
                                                </FormItem>
                                            </div>
                                        </Form>

                                    </div>

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

SetPass = connect(mapStateToProps, mapDispatchToProps)(SetPass)
const WrapSetPass = Form.create()(SetPass)
export default WrapSetPass