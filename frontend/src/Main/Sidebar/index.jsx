import React, { Component } from 'react'
import Conversion from './Conversion'
import Friends from './Friends'
import Notifications from './Notifications'
import Settings from './Settings'

export default class index extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="container">
                    <div className="tab-content">
                        <Conversion />
                        <Friends />
                        <Notifications />
                        <Settings />
                    </div>
                </div>
            </div>
        )
    }
}
