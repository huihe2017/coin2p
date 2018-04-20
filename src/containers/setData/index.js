import React from 'react'
import style from './index.css'
import {Input, Select, Form, Button, message, Icon, Pagination, Checkbox, Alert, Tabs, Upload, Switch} from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory, Link} from 'react-router'
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
            pic: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFAklEQVRYR81ZWUicVxT+rqPjUoNLxq0kwbXViCguJAQToxGpaEERfalUmkJnJEXavvah7UNf2yKNM1NoS4cUiQhiWrG4xQdxiSZuSJO44IYaM1Hjho7O/OXczojLLP+dB5n7pPznO+fz3Hu+c+6VwY3V0NCgMBqN2YyxXMZYJoD3ALwL4B2rux0ASwBeSpI0JEnSY5VK1VNRUWEWDcdEAHq9Pk6SpM8lSfqIMRYmgpUk6TVj7E/G2M9qtXpaLlYWQb1eHyVJ0vcAPgagkOvcgR1l0cAY+1qtVi+78uWSoFarvcsY+wFAkCtngt/fSpL0VXV19W/OcA4J1tbW+iqVyl+sWROMLWRuMJlMn9XU1OzbQ9kleP/+/UCFQvEXgNtCodw37jabzR/eu3dv+7SLMwStmfvnHMnZOHWbTKYPTmfyDEGdTvfHOWyro1wbNBpN1fGPJwhaC+JX0Z1SKBSIiopCcHAwGGPY2NjA8vIyDg8PRV1BkqRPjxfOEUGrlPwrWq0pKSlIT0+Hn5/fCTL7+/sYHR3FyMgIBRUh+pYxlmSToCOCOp2Oyv0TuZ4oU3l5eYiPj+cElpaWsLKywuFhYWG4fPkyz+bc3Bza2tpgsVjkuia73zUazV36gRO0dogXIiJMWcvKysLu7i7a29uPyNlYqFQqFBQU4MKFCzyT/f39IgTNjLH3qeNwgjqd7kcAX8j14Ovri8rKSnh5eaGpqQlGo9EulM5kWVkZt6uvr8f29hkVcRbyJ41G8yWjxv/mzZtlkd6amJiInJwcTE5Ooqury+nflZ2djeTkZPT19WFsbExuDujYvL548WIUq6ury/Hy8uqWjQRw48YNUHF0d3fjxQs6GY5XTEwM32qyI3uRZbFYbjOtVvstY+wbEaAtK3T2ZmZmnEIvXbqEoqIiTE1NobOzUyQMZfE7ptPp/gZQJIJMS0vDtWvX8OzZMwwODjqFpqam4vr16xgeHsaTJ09EwpBtCxF8CSBBBBkaGory8nLs7Ozg4cOHODg4sAun4qioqEBQUBAePXrExVtwTRJBKi3bJCwbX1hYiCtXrmB2dhYdHR0wm08Oy6SBubm5SEhI4BLU3Nws2/cxwx0iKCTzNnBAQABKS0sRGBiItbU1rnWvXr3ioh0eHg7aWtLCvb09LkWbm5vuEITbBClaSEgIJ+nj42M3OGWVtnZ1ddUtcgRye4tjY2NB1ezv78+D02CwtbXFM0jdw0aaejJ1kefPn7tDkm+xcJFkZGQgM5Muc+C9lgSYCsA2FND5i4iI4FpJOki/j4+Po7e3V5QkLxIhmUlKSsKtW7d4xkh4p6edX9CokO7cuQOlUomBgQE+3QisFiGhpoIg2fD29kZraysWFhZkxYqMjERxcTHPZGNjI9bX12XhuFCLtLqbN2/i6tWrbm2X7VhQxkmW5Cze6uQOCyS6VVVVoOn5wYMHXD5EFhUNTUCENxgMMJlMTuFHwwJZyRm36NCXlJRgcXERLS0tItyObPPz8xEXF8ePx/z8vCsf/49bZCVnYKXJmQ7706dPMTQ05Mq53e9U1TQJ9fT0YGJiwpmPkwOrNYtOR37aYpIM+ssd9V5XrGl7o6OjuTS5uFCdHPmtWaT3F+FLkytSbny3f2kiR+5eO90g4RDi8NppQ3j0xZ1IevzTB5H06Mcj21Z79PPb8RPssQ+Yx0l69BPwKaKe+Yh+WrTO898Q/wEGN2UXMESdJAAAAABJRU5ErkJggg==',
            nikennam:'',
            lang:'',
            emailNotice:false,
            phoneNotice:false
        }
    }

    callback(key) {
        console.log(key);
    }

    normFile(e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    onChange(info) {
        console.log(999, info);
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                pic: imageUrl,
                loading: false,
            }));
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
        if (!this.props.user.account) {
            this.props.history.pushState(null, '/login')
            return null
        }
        if (!this.props.user.evaluateValue) {
            this.props.history.pushState(null, '/perCenter')
            return null
        }
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <Alert closable message={<span className={style.alert}>
                            欢迎来到【币点点】 您的邮箱已经验证成功
                        </span>} type="success"/>
                        <div className={style.wlopMContent}>
                            <div className={style.wlopMContentL}>
                                <UserPart userMsg={this.props.user}/>
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
                                                <img className={style.avatar} src={this.state.pic}
                                                     alt=""/>
                                                <span className={style.TopTitleO}>
                                                        上传新头像
                                                    </span>
                                                <FormItem>
                                                    {getFieldDecorator('upload', {
                                                        valuePropName: 'fileList',
                                                        getValueFromEvent: this.normFile,
                                                    })(<Upload name="logo"
                                                               showUploadList={false}
                                                               action="//jsonplaceholder.typicode.com/posts/"
                                                               onChange={this.onChange.bind(this)}>
                                                        <Dbutton word={'选择文件'} width={90} height={30} size={14}
                                                                 ghost={true}/>
                                                    </Upload>)}
                                                </FormItem>
                                            </div>
                                            <div className={style.tuxing}>
                                                    <span className={style.TopTitle}>
                                                        用户名
                                                    </span>
                                                <div className={style.nick}>
                                                    <FormItem>{getFieldDecorator('nickname', {initialValue: '18691000000'})(
                                                        <div>
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
                                                    <FormItem>
                                                        {getFieldDecorator('price', {
                                                            initialValue: 'da'
                                                        })(<Select onChange={this.handleCurrencyChange}>
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
                                                    <FormItem>
                                                        {getFieldDecorator('email', {initialValue: true}, {valuePropName: 'checked'})(
                                                            <Switch checkedChildren="ON" unCheckedChildren="OFF"
                                                                    defaultChecked={true} onChange={this.onoff}/>)}
                                                    </FormItem>
                                                </div>
                                            </div>


                                            <div className={style.tuxing}>

                                                <div className={style.partOneBCL}>
                                <span className={style.TopTitle}>接受订单短信通知
                                                        </span>
                                                </div>
                                                <div className={style.partOneBCR}>
                                                    <FormItem>
                                                        {getFieldDecorator('message', {initialValue: true}, {valuePropName: 'checked'})(
                                                            <Switch checkedChildren="ON" unCheckedChildren="OFF"
                                                                    defaultChecked={true} onChange={this.onoff}/>)}
                                                    </FormItem>
                                                </div>


                                            </div>
                                            <div className={style.but}>
                                                <div className={style.butL}>
                                                    <FormItem>
                                                        <Button htmlType="submit" style={{
                                                            width: 120,
                                                            height: 36,
                                                            fontSize: 14,
                                                            backgroundColor: 'rgba(217,186,131,1)',
                                                            color: '#fff'
                                                        }}>{"确认修改"}</Button>

                                                    </FormItem>
                                                </div>
                                                <div className={style.butL}>
                                                    <Link to={'/perCenter'}>
                                                        <Dbutton width={120} height={36} size={14} ghost={true}
                                                                 word={'取消'}/>
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
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

SetData = connect(mapStateToProps, mapDispatchToProps)(SetData)
const WrapSetData = Form.create()(SetData)
export default WrapSetData