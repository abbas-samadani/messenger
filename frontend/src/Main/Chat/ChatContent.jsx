import React, { Component } from 'react'
import ChatTop from './ChatTop'
import ChatContainer from './ChatContainer'
import ChatFooter from './ChatFooter'

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
