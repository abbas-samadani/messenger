import React, { Component } from 'react'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Modal from './Modal'
import LocationService from '../Services/LocationService'
import PeerService from '../Services/PeerService'
export default class Main extends Component {
    constructor(){        
        super();
        this.locationService = new LocationService();
        this.peerService = new PeerService();
    }

    componentDidMount(){
        this.locationService.getUserLocation().then(cords => console.log(cords)).catch(error => console.log(error));        
    }
    render() {
        return (
            <div className="layout">
                <Navigation />
                <Sidebar />
                <Chat />
                <Modal />
            </div>
        )
    }
}
