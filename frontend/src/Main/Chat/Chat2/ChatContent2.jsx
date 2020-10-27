import React, { Component } from 'react'
import ChatTop from './ChatTop2'
import ChatContainer from './ChatContainer2'
import ChatFooter from './ChatFooter2'

export default class ChatContent extends Component {
    render() {
        return (
            <div className="content">
                <ChatTop />
                <ChatContainer />
                <ChatFooter />
            </div>
        )
    }
}
