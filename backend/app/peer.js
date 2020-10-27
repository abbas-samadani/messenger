const PeerServer = require('peer').PeerServer
const clientManager = require('./messenger/clientManager')
const server = new PeerServer({
    port: 4000,
    path: '/messenger'
})




const startPeerServer = () => {

    new clientManager(server)

}


module.exports = startPeerServer;

