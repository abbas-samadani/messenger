import React, { Component } from 'react'
import ChatContent from './ChatContent'
import Utility from './Utility'

export default class ChatList extends Component {
    render() {
        return (
            <div id="chat1" className="tab-pane fade show active" role="tabpanel">
                <div className="item">
                    <ChatContent />
                    <Utility />
                </div>
            </div>
        )
    }
}
