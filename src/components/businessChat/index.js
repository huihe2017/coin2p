import React from 'react';


class BusinessChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillUnmount(){
        document.querySelectorAll('.rcs-chat-wrapper')[0].innerHTML = '';
        window.RongIMClient.getInstance().disconnect(true)

    }

    componentDidMount(){
        //yuyuyu99
        // var appKey = "lmxuhwagliihd";
        // var token = "YG+I2a60HemE2x3sKimNDQWEhbPtTQxEZqtVdtr5INYMQO9bwo50qdkT0C2zm08AwSwSo9l9x1HS8g2mI14xrNqTFof8RNfb";


        //yuyuyu23 f
        var appKey = "lmxuhwagliihd";
        var token = "Bfj7vGulM6xbG1CsT+pvCAWEhbPtTQxEZqtVdtr5INYMQO9bwo50qZ0rEkCW4S5xhYOWK8T4vmHcz+XZVqFQj9qTFof8RNfb";

        //var appKey = "3argexb6r934e";
        //var token = "b/jvjEFD41TIVT0nsf9+L3ryPPkHsvRwWZV8SVI5ICcZ2I5Nl4OdNO01OjZxjjmVlD2dmk4RZ90=";


        window.RCS.init({
            appKey: this.props.appKey,
            token: this.props.token,
            target: document.getElementById(this.props.target),
            showConversitionList: true,
            type:this.props.type,//1是买卖聊天框  2是客服聊天框
            targetId:this.props.targetId,
            //targetId:"cddc3aa01b05409292d14b159e5ff749",
            templates: {
                button: ['<div class="rongcloud-consult rongcloud-im-consult">',
                    '   <button onclick="RCS.showCommon()"><span class="rongcloud-im-icon">进入 IM</span></button>',
                    '</div>',
                    '<div class="customer-service" style="display: none;"></div>'].join(''),//"templates/button.html",
                // chat: "templates/chat.html",
                // closebefore: 'templates/closebefore.html',
                // conversation: 'templates/conversation.html',
                // endconversation: 'templates/endconversation.html',
                // evaluate: 'templates/evaluate.html',
                // imageView: 'templates/imageView.html',
                // leaveword: 'templates/leaveword.html',
                // main: 'templates/main.html',
                // message: 'templates/message.html',
                // messageTemplate: 'templates/messageTemplate.html',
                // userInfo: 'templates/userInfo.html',
            },
            extraInfo: {
                // 当前登陆用户信息
                userInfo: {
                    name: "游客",
                    grade: "VIP"
                },
                // 产品信息
                requestInfo: {
                    productId: "123",
                    referrer: "10001",
                    define: "" // 自定义信息
                }
            }
        });
    }

    render() {
        if(this.props.type===2){
            return null
        }
        return(
            <div id={this.props.target}>

            </div>

        )
    }
}


export default BusinessChat;