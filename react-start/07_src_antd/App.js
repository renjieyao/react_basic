import React, { Component } from 'react';
import {Button,DatePicker} from 'antd';
import {WechatOutlined,WechatFilled} from '@ant-design/icons';



class App extends Component {
    onChange = () => {

    }

    render() {
        return (
            <div>
                <Button type="primary">hello world</Button>
                <Button>hello</Button>
                <WechatOutlined/>
                <WechatFilled spin/>
                <DatePicker onchange={this.onChange}/>
                <DatePicker onchange={this.onChange} picker="year"/>
            </div>
        );
    }
}

export default App;
