import React, { Component } from 'react'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

export default class index extends Component {
    render() {
        return (
            <div className="modal fade" id="compose" tabIndex={-1} role="dialog" aria-labelledby="compose" style={{ display: 'none' }} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <ModalHeader />
                        <ModalBody />
                        <ModalFooter />
                    </div>
                </div>
            </div>
        )
    }
}
