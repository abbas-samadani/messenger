import React, { Component } from 'react'
import UtilityUsers from './UtilityUsers'
import UtilityFiles from './UtilityFiles'

export default class UtilityContent extends Component {
    render() {
        return (
            <div className="tab-content">
                <UtilityUsers />
                <UtilityFiles />
            </div>
        )
    }
}
