import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Icon,Pagination,Checkbox,Alert,Tabs,Upload,Switch } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import UserPart from '../../components/userPart'
import Dbutton from '../../components/button'
import TitleBack from '../../components/titleBack'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

class SetData extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    callback(key) {
        console.log(key);
    }

    normFile (e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    onChange(info) {
        console.log(999,info);
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        return (
            <div className={style.wrap}>
                <Header/>
                    <div className={style.wlop}>
                        <div className={style.wlopContent}>
                            <Alert closable message={<span className={style.alert}>
                            欢迎来到【币点点】 您的邮箱已经验证成功
                        </span>} type="success" />
                            <div className={style.wlopMContent}>
                                <div className={style.wlopMContentL}>
                                    <UserPart/>
                                </div>
                                <div className={style.wlopMContentR}>
                                    <TitleBack wid={96} word={'修改资料'}/>
                                    <div className={style.content}>
                                        <Form onSubmit={this.handleSubmit}>
                                            <div className={style.perselphone}>
                                                <div className={style.formitems}>
                                                   <span className={style.TopTitle}>
                                                        个人头像
                                                   </span>
                                                    <img className={style.avatar} src={require('./images/bigava.png')} alt=""/>
                                                    <span className={style.TopTitleO}>
                                                        上传新头像
                                                    </span>
                                                   <FormItem>
                                                       {getFieldDecorator('upload', {
                                                           valuePropName: 'fileList',
                                                           getValueFromEvent: this.normFile,
                                                       })(<Upload name="logo" action="//jsonplaceholder.typicode.com/posts/" onChange={this.onChange}>
                                                           <Dbutton word={'选择文件'} width={90} height={30} size={14} ghost={true}/>
                                                           </Upload>)}
                                                   </FormItem>
                                                </div>
                                                <div className={style.tuxing}>
                                                    <span className={style.TopTitle}>
                                                        用户名
                                                    </span>
                                                    <div className={style.nick}>
                                                        <FormItem>{getFieldDecorator('nickname',  {initialValue:'18691000000'})(<div>
                                                            <Input onChange={
                                                                (e) => {
                                                                    this.setState({nickName: e.target.value})
                                                                }} className={style.inputp} placeholder={"请输入您的昵称"}
                                                                   type={'text'}/></div>
                                                        )}
                                                        </FormItem>
                                                    </div>


                                                    <span className={style.nickTip}>
                                                    用户名只能修改1次，请谨慎修改
                                                    </span>
                                                </div>
                                                <div className={style.tuxing}>
                                                    <span className={style.TopTitle}>
                                                        界面语言
                                                    </span>
                                                    <div className={style.nick}>
                                                <FormItem >
                                                    {getFieldDecorator('price', {
                                                        initialValue:  'da' })( <Select  onChange={this.handleCurrencyChange}>
                                                        <Option value="da">简体中文</Option>
                                                        <Option value="xiang">繁体中文</Option>
                                                        <Option value="tai">English</Option>
                                                    </Select>)}
                                                </FormItem>
                                                    </div>
                                                </div>
                                                <div className={style.tuxing}>
                                                    <div className={style.partOneBCL}>
                                                        <span className={style.TopTitle}>接受订单邮件通知
                                                        </span>
                                                    </div>
                                                    <div className={style.partOneBCR}>
                                                        <FormItem >
                                                    {getFieldDecorator('email', {initialValue:true},{ valuePropName: 'checked' })(
                                                        <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked={true} onChange={this.onoff}/>)}
                                                </FormItem>
                                                        </div>
                                                </div>


                                                <div className={style.tuxing}>

                                                    <div className={style.partOneBCL}>
                                <span className={style.TopTitle}>接受订单短信通知
                                                        </span>
                                                    </div>
                                                    <div className={style.partOneBCR}>
                                                <FormItem >
                                                    {getFieldDecorator('message', {initialValue:true},{ valuePropName: 'checked' })(
                                                        <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked={true} onChange={this.onoff}/>)}
                                                </FormItem>
                                                        </div>


                                                </div>
                                                <div className={style.but}>
                                                    <div className={style.butL}>
                                                        <FormItem>
                                                            <Button htmlType="submit" style={{width: 120, height: 36, fontSize:14,backgroundColor:'rgba(217,186,131,1)',color:'#fff'}}>{"确认修改"}</Button>

                                                        </FormItem>
                                                    </div>
                                                    <div className={style.butL}>
                                                        <Link to={'/perCenter'}>
                                                            <Dbutton width={120} height={36} size={14} ghost={true} word={'取消'}/>
                                                        </Link>
                                                    </div>
                                                </div>
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

SetData = connect(mapStateToProps, mapDispatchToProps)(SetData)
const WrapSetData = Form.create()(SetData)
export default WrapSetData