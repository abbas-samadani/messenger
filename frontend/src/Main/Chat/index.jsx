import React, { Component } from 'react'
import ChatList from './ChatList'
import ChatList2 from './Chat2/ChatList2'
export default class index extends Component {
    render() {
        return (
            <div className="chat">
                <div className="tab-content">
                    <ChatList />
                    <ChatList2 />
                </div>                
            </div>
        )
    }
}
