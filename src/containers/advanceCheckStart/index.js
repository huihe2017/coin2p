import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Upload,Modal,Checkbox} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link,browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserShow from '../../components/userShow';
import TitleBack from '../../components/titleBack';


const FormItem = Form.Item;


class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            phone:false,
            checked:false,
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }


    }

    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

            }else {
                message.error('请完善您的资料')
            }
        });
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
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        const { previewVisible, previewImage, fileList } = this.state;
        const imageUrl = this.state.imageUrl;

        const uploadButton1 = (
            <div>
                <img className={style.selectPartImg} src={require('./images/handID.png')} alt=""/>
                <span className={style.selectPartItemW}>
                                                点击上传正面图像身份证</span>
            </div>
        );
        const uploadButton2 = (
            <div>
                <img className={style.selectPartImg} src={require('./images/bank.png')} alt=""/>
                <span className={style.selectPartItemW}>
                                                点击上传正面图像身份证</span>
            </div>
        );
        const uploadButton3 = (
            <div>
                <img className={style.selectPartImg} src={require('./images/handPID.png')} alt=""/>
                <span className={style.selectPartItemW}>
                                                点击上传正面图像身份证</span>
            </div>
        );

        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <TitleBack wid={96} word={'进阶验证'}/>


                        <div className={style.wlopContentC}>
                            <span className={style.helpWord}>
                                    请确保您使用本人的真实证件进行验证，您所提交的资料将不会提供给未被授权的第三方，进阶身份验证为人工审核，请您耐心等待验证结果，一般审核时间为1-3个工作日
                                </span>
                            <span className={style.helpWordB}>
                                    请注意：一旦您提交，您将无法修改您的申请，再提交之前，确保所有信息无误。照片格式只支持： png/jpg 图片要求小于 5 MB。
                                </span>
                            <Form onSubmit={this.handleSubmit}>
                                <div className={style.partOne}>
                                    <div className={style.wlopContentCTT}>
                                        一，身份证归档
                                    </div>
                                    <span className={style.wlopContentCTTT}>
                                        填写本人真实姓名，身份证号，并上传手持身份证正面照片
                                    </span>
                                    <div className={style.tuxing}>
                                        <span className={style.TopTitle}>
                                            真实姓名
                                        </span>
                                        <div className={style.nick}>
                                            <FormItem>{getFieldDecorator('realName',  {rules: [{
                                                    required: true,
                                                    initialValue: '36363@ww.com',
                                                    pattern:  /^([a-zA-Z\u4e00-\u9fa5\·]{1,10})$/,
                                                    message:"请输入您的姓名！"
                                                }]})(<div>
                                                <Input onChange={
                                                    (e) => {
                                                        this.setState({nickName: e.target.value})
                                                    }} className={style.inputp} placeholder={"请输入您的真实姓名"}
                                                       type={'text'}/></div>
                                            )}
                                            </FormItem>
                                        </div>

                                    </div>
                                    <div className={style.tuxing}>
                                        <span className={style.TopTitle}>
                                            身份证号码
                                        </span>
                                        <div className={style.nick}>
                                            <FormItem>{getFieldDecorator('cardNum',  {rules: [{
                                                    required: true,
                                                    initialValue: '36363@ww.com',
                                                    pattern: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
                                                    message:"请输入正确的证件号码"
                                                }]})(<div>
                                                <Input onChange={
                                                    (e) => {
                                                        this.setState({nickName: e.target.value})
                                                    }} className={style.inputp} placeholder={"请输入您将用作实名认证的证件号码"}
                                                       type={'text'}/></div>
                                            )}
                                            </FormItem>
                                        </div>

                                    </div>
                                    <div className={style.selectPart}>
                                        <span className={style.TopTitle}>
                                            证件号码(身份证/护照）
                                        </span>
                                        <div className={style.selectPartItem}>
                                            <FormItem>
                                                {getFieldDecorator('upload', {
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,
                                                })(
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
                                                )}
                                            </FormItem>
                                        </div>

                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.wlopContentCTT}>
                                        二，银行卡归档
                                    </div>
                                    <span className={style.wlopContentCTTT}>
                                        填写本人银行卡号，开户银行，并上传银行卡正面照片（请勿使用信用卡验证，必须是您实际交易时所使用的”储值银行卡“或“银行借记卡”）
                                    </span>
                                    <div className={style.tuxing}>
                                        <span className={style.TopTitle}>
                                            1.开户银行
                                        </span>
                                        <div className={style.nick}>
                                            <FormItem>{getFieldDecorator('realName',  {rules: [{
                                                    required: true,
                                                    initialValue: '36363@ww.com',
                                                    pattern:  /^([\u4e00-\u9fa5\·]{1,15})$/,
                                                    message:"请输入您的开户行！"
                                                }]})(<div>
                                                <Input onChange={
                                                    (e) => {
                                                        this.setState({nickName: e.target.value})
                                                    }} className={style.inputp} placeholder={"请输入您的开户银行"}
                                                       type={'text'}/></div>
                                            )}
                                            </FormItem>
                                        </div>

                                    </div>
                                    <div className={style.tuxing}>
                                        <span className={style.TopTitle}>
                                            2.银行卡号
                                        </span>
                                        <div className={style.nick}>
                                            <FormItem>{getFieldDecorator('cardNum',  {rules: [{
                                                    required: true,
                                                    initialValue: '36363@ww.com',
                                                    pattern: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
                                                    message:"请输入正确的银行卡号"
                                                }]})(<div>
                                                <Input onChange={
                                                    (e) => {
                                                        this.setState({nickName: e.target.value})
                                                    }} className={style.inputp} placeholder={"请输入您的银行卡号"}
                                                       type={'text'}/></div>
                                            )}
                                            </FormItem>
                                        </div>

                                    </div>
                                    <div className={style.selectPart}>
                                        <span className={style.TopTitle}>
                                            3.上传银行卡正面照片

                                        </span>
                                        <div className={style.selectPartItem}>
                                            <FormItem>
                                                {getFieldDecorator('upload', {
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,
                                                })(
                                                    <div className={style.selectPartItem}>
                                                        <Upload
                                                            action="//jsonplaceholder.typicode.com/posts/"
                                                            listType="picture-card"
                                                            fileList={fileList}
                                                            onPreview={this.handlePreview}
                                                            onChange={this.handleChange}
                                                        >
                                                            {fileList.length >= 1 ? null : uploadButton2}
                                                        </Upload>
                                                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                        </Modal>
                                                    </div>
                                                )}
                                            </FormItem>
                                        </div>

                                    </div>
                                </div>
                                <div className={style.partOne}>
                                    <div className={style.wlopContentCTT}>
                                        三，声明书归档
                                    </div>
                                    <span className={style.wlopContentCTTT}>
                                        上传手持银行卡正面及手持声明书的照片；声明书请在白纸上”日期“+”注册邮箱“+”此银行账户用于币点点交易“
                                    </span>
                                    <div className={style.selectPart}>
                                        <span className={style.TopTitle}>
                                           声明书范例

                                        </span>
                                        <div className={style.Item}>
                                            <img src={require('./images/egImg.png')} alt=""/>
                                        </div>

                                        <div className={style.selectPartItem}>

                                            <FormItem>
                                                {getFieldDecorator('upload', {
                                                    valuePropName: 'fileList',
                                                    getValueFromEvent: this.normFile,
                                                })(
                                                    <div className={style.selectPartItem}>
                                                        <Upload
                                                            action="//jsonplaceholder.typicode.com/posts/"
                                                            listType="picture-card"
                                                            fileList={fileList}
                                                            onPreview={this.handlePreview}
                                                            onChange={this.handleChange}
                                                        >
                                                            {fileList.length >= 1 ? null : uploadButton3}
                                                        </Upload>
                                                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                        </Modal>
                                                    </div>
                                                )}
                                            </FormItem>
                                        </div>

                                    </div>
                                </div>
                                <div className={style.partOne}>

                                    <div className={style.tuxing1}>
                                        <div className={style.nick}>
                                            <FormItem>
                                                <Checkbox
                                                    value={this.state.checkNick}
                                                    onChange={this.handleChangeCB}
                                                >
                                            <span className={style.wlopContentCTTB}>我承诺所提供的资料为我本人所有，不存在盗用他人资料的情况。
                                            </span>
                                                </Checkbox>
                                            </FormItem>
                                        </div>

                                    </div>

                                </div>
                                <div className={style.but}>
                                    <div className={style.butL}>
                                        <FormItem>
                                                <Button htmlType="submit" style={{width: 360, height: 36, fontSize:14,backgroundColor:'rgba(217,186,131,1)',color:'#fff'}}>{"提交申请"}</Button>
                                        </FormItem>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className={style.wlopContentB}>
                            <div className={style.wlopContentCT}>
                                <span className={style.wlopContentCTT}>
                                    请注意
                                </span>
                                <span className={style.wlopContentCC}>
                                币点点 本身是一个中立换币平台，提供换币服务，并未有与任何「套利平台」有合作关系。 <br/>
                                   若有任何套利平台声称与 OTCBTC 有合作关系，且声称有巨额回报， 请用户提高警觉，注意并小心各种潜在风险。
                                </span>
                                <span className={style.wlopContentCC}>
                                   若有疑问请随时咨询在线客服。
                                </span>
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