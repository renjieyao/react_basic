import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Detail from './Detail';

class Messages extends Component {
    messageArr = [
        {id:"01",title:"message1",content:"hello message1"},
        {id:"02",title:"message2",content:"hello message2"},
        {id:"03",title:"message3",content:"hello message3"},
    ]

    replaceShow = (item) => {
        debugger
        this.props.history.replace('/home/messages/detail',{id:item.id,title:item.title})
    }

    pushShow = (item) => {
        this.props.history.push(`/home/messages/detail/${item.id}/${item.title}`)
    }

    render() {
        return (
            <div>
                {/* params 传参 */}
                <ul>
                    {this.messageArr.map(item => {
                        return <li key={item.id}>
                            <NavLink to={`/home/messages/detail/${item.id}/${item.title}`}>{item.title}</NavLink>
                            <button onClick={() => {this.replaceShow(item)}}>replace show</button>
                            <button onClick={()=>{this.pushShow(item)}}>push show</button>
                        </li>
                    })}
                </ul>

                {/* search 传参 */}
                {/* <ul>
                    {this.messageArr.map(item => {
                        return <li key={item.id}>
                            <NavLink to={`/home/messages/detail?id=${item.id}&title=${item.title}`}>{item.title}</NavLink>
                        </li>
                    })}
                </ul> */}

                {/* state 传参 */}
                {/* <ul>
                    {this.messageArr.map(item => {
                        return <li key={item.id}>
                            <NavLink to={{pathname:'/home/messages/detail',state:{id:item.id,title:item.title}}}>{item.title}</NavLink>
                        </li>
                    })}
                </ul> */}

                {/* params 接收参数 */}
                {/* <Route path="/home/messages/detail/:id/:title" component={Detail}></Route> */}

                {/* search&state 接收参数 */}
                <Route path="/home/messages/detail" component={Detail}></Route>

            </div>
        );
    }
}

export default Messages;
