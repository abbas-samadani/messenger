import React, { Component } from 'react'
import ChatContent from './ChatContent2'
import Utility from './Utility2'

export default class ChatList extends Component {
    render() {
        return (
            <div id="chat2" className="tab-pane fade" role="tabpanel">
                <div className="item">
                    <ChatContent />
                    <Utility />
                </div>
            </div>
        )
    }
}
