class LocationService{
 

    getUserLocation(){
        if(!this.isLocationSupported){
            throw new Error('Location in this browser not supported!')
        }
        const promise = new Promise((resolve, reject) =>{
            navigator.geolocation.getCurrentPosition(position =>{
                resolve(position.coords)
            }, positionError =>{
                reject(positionError)
            })
        })
        return promise;
    }

    isLocationSupported(){
        return 'geolocation' in navigator
    }
}

export default LocationService