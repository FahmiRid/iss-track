import GoogleMapReact from 'google-map-react'
import iss from './iss.png'



function Map({ center, zoom }) {
    
  return (
    <div className="map-container" id="Map"> 
        <GoogleMapReact
            boostrapURLKeys={{ key: 'AIzaSyAxSRCmgNvqpk8hi-b-YbKsb7Rn58SiopI', }}
            defaultCenter={center}
            defaultZoom={zoom}
            
            
        
        >
           

            <img src={iss} alt='ISS Icon' className='iss-icon' 
            lat={center.lat}
            lng={center.lng}
            />
        </GoogleMapReact>
        
        </div>
  );
  
}

Map.defaultProps = {
    center: {
        lat: 3.1390,
        lng: 101.6869
    },
    zoom: 11,
}

export default Map;
