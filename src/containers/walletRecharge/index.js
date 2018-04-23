import React from 'react'
import style from './index.css'
import {Input,Select,Form,Button,message,Tabs,Icon,Table,Menu, Dropdown,Pagination,Radio,Checkbox } from 'antd';
import Header from '../../components/header'
import Footer from '../../components/footer'
import {hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Toast from 'antd-mobile/lib/toast';
import DButton from '../../components/button';


const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const data = [{
    key: '1',
    coinPart: {coinPart:'BTC',leftPart:'FirstBlood',bottomPart:'FirstBlood',do:[{bi:true},{sell:true},{buy:true}]},
    total: 0,
    balance: 0,
    frost: 0,
    locked: 0,
    asset: 0,
}, {
    key: '2',
    coinPart:  {coinPart:'USDT',leftPart:'lalalal',bottomPart:'hahahah',do:[{bi:true},{sell:false},{buy:true}]},
    total: 0,
    balance: 0,
    frost: 0,
    locked: 0,
    asset: 0,
}, {
    key: '3',
    coinPart: {coinPart:'ETC',leftPart:'lolololol',bottomPart:'luelueluel',do:[{bi:true},{sell:true},{buy:false}]},
    total: 0,
    balance: 0,
    frost: 0,
    locked: 0,
    asset: 0,
}, {
    key: '4',
    coinPart: {coinPart:'ETC',leftPart:'lolololol',bottomPart:'luelueluel',do:[{bi:true},{sell:true},{buy:false}]},
    total: 0,
    balance: 0,
    frost: 0,
    locked: 0,
    asset: 0,
}];


class EmailCheck extends React.Component {
    constructor() {
        super()
        this.state = {
            filterDropdownVisible: true,
            data,
            data1:data,
            searchText: '',
            filtered: false,
        };
    }


    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    callback(key) {
        console.log(key);
    }

    onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    filter(){
        const { data1,searchText } = this.state;
        const reg = new RegExp(searchText, 'gi');
        data1.map((record) => {
            console.log(record);
            console.log(record.coinPart.coinPart);
            const match = record.coinPart.coinPart.match(reg);
            console.log(111,match);

            if (!match) {
                return null;
            }
            console.log(321,record);

            return {
                record
            };
        })
    }

    onSearch = () => {
        const { searchText } = this.state;
        console.log(2,this.state.data1);
        this.setState({
            filtered: !!searchText,
            data: this.filter(),
        },()=>{
            console.log(1,this.state.data);
        });
    }


    render() {
        const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form;
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="">币币交易</a>
                </Menu.Item>
                <Menu.Item >
                    <a target="_blank" rel="noopener noreferrer" href="">场外购买</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="">场外出售</a>
                </Menu.Item>
            </Menu>
        );

        const columns = [{
            title: <span className={style.titleName}>币种</span>,
            dataIndex: 'coinPart',
            key: 'coinPart',
            width:185,
            filterDropdown:(<div className={style.partOneHeader}>
                <div className={style.partOneHeader2}>
                    <Checkbox onChange={this.onChange}>隐藏0资产钱包</Checkbox>
                </div>
                <div className={style.partOneHeader1}>
                    <Input placeholder="Basic usage"
                           ref={ele => this.searchInput = ele}
                           placeholder="Search name"
                           value={this.state.searchText}
                           onChange={this.onInputChange}
                           onPressEnter={this.onSearch} suffix={<Icon type="search" />}/>
                </div>

            </div>)
            ,
            filterDropdownVisible: this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange: (visible) => {
                 () => this.searchInput.focus();
            },
            render: (a) => (
                <div className={style.coinBox}>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="javascript:void (0)">
                            {a.coinPart} <Icon type="down" />
                        </a>
                    </Dropdown>
                    <span className={style.coinTip}>
                        {a.leftPart}
                    </span>
                    <span className={style.coinTipB}>
                        {a.bottomPart}
                    </span>
                </div>
            ),
        }, {
            title: <span className={style.titleName}>总额</span>,
            dataIndex: 'total',
            width:150,
            key: 'total',
        }, {
            title:<span className={style.titleName}>可用余额</span>,
            dataIndex: 'balance',
            width:180,
            key: 'balance',
        }, {
            title:<span className={style.titleName}>下单冻结</span>,
            dataIndex: 'frost',
            width:180,
            key: 'frost',
        }, {
            title:<span className={style.titleName}>锁仓</span>,
            dataIndex: 'locked',
            width:140,
            key: 'locked',
        }, {
            title:<span className={style.titleName}>资产估值</span>,
            dataIndex: 'asset',
            key: 'asset',
            width:160,
            render: (a) => (
                <span>
                    {a}CNY
                </span>
            )
        }, {
            title:<div className={style.titleName} style={{textAlign:'right'}}>充值提币记录</div>,
            dataIndex: 'do',
            width:220,
            render: () => (
                <div>
                    <div className={style.butBox}>
                        <Link to={'/newDeal/346346263236'}><DButton width={58} height={28} size={14} ghost={true}                                   word={'锁仓'}/></Link>
                    </div>
                    <div className={style.butBox}>
                        <Link to={'/newDeal/346346263236'}><DButton width={58} height={28} size={14} word={'充值'}/></Link>
                    </div>
                    <div className={style.butBox}>
                        <Link to={'/newDeal/346346263236'}><DButton width={58} height={28} size={14} ghost={true}  word={'提币'}/></Link>
                    </div>

                </div>
            ),
        }


        ];

        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.wlop}>
                    <div className={style.wlopContent}>
                        <div className={style.header}>
                            <span className={style.headerT}>
                                钱包
                            </span>
                            <span className={style.headerC}>
                                币币与场外钱包共用，您可以点击「币币」「场外」标签筛选相应市场的币种
                            </span>
                        </div>
                        <div className={style.content}>
                            <div className={style.headerTitle}>
                                当前总资产估值：
                                <span className={style.headerTitleB}>
                                    0 CNY
                                </span>
                            </div>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>

                                <TabPane tab="全部" key="1">
                                    <div className={style.partOne}>

                                        <Table columns={columns} dataSource={data} />
                                        <div className={style.page}>
                                            <div className={style.pages}>
                                                <Pagination defaultCurrent={1} total={1000} showSizeChanger
                                                            onShowSizeChange={this.onShowSizeChange}/>
                                            </div>

                                            {/*<div className={style.evePage}>*/}
                                            {/*每页展示条 共<span>100</span>条*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="币币" key="2">
                                    <div className={style.partOne}>
                                        <Table columns={columns} dataSource={data} />
                                        <div className={style.page}>
                                            <div className={style.pages}>
                                                <Pagination defaultCurrent={1} total={1000} showSizeChanger
                                                            onShowSizeChange={this.onShowSizeChange}/>
                                            </div>

                                            {/*<div className={style.evePage}>*/}
                                            {/*每页展示条 共<span>100</span>条*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>

                                </TabPane>
                                <TabPane tab="场外" key="3">
                                    <div className={style.partOne}>
                                        <Table columns={columns} dataSource={data} />
                                        <div className={style.page}>
                                            <div className={style.pages}>
                                                <Pagination defaultCurrent={1} total={1000} showSizeChanger
                                                            onShowSizeChange={this.onShowSizeChange}/>
                                            </div>

                                            {/*<div className={style.evePage}>*/}
                                            {/*每页展示条 共<span>100</span>条*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
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