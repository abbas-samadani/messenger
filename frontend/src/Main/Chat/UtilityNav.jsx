import React, { Component } from 'react'

export default class UtilityNav extends Component {
    render() {
        return (
            <ul className="nav" role="tablist">
                <li><a href="#users" className="active" data-toggle="tab" role="tab" aria-controls="users" aria-selected="true">Users</a></li>
                <li><a href="#files" data-toggle="tab" role="tab" aria-controls="files" aria-selected="false">Files</a></li>
            </ul>

        )
    }
}
