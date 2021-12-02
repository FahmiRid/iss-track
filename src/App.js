
import './App.css';
import Map from './components/Map'
import { useState , useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar/Navbar';




function App() {
  const [loading, SetLoading] = useState(false)
  const [longitude, SetLongitude] = useState(101.6869)
  const [latitude, SetLatitude] = useState(3.1390)
  

  useEffect(() => {
    getLocation()
  }, [])


  const getLocation = async () => {
    SetLoading(true)
    const res = await axios.get('http://api.open-notify.org/iss-now.json')
    const { longitude, latitude } = await res.data.iss_position


    SetLongitude(parseFloat(longitude))
    SetLatitude(parseFloat(latitude))
    SetLoading(false)
  }

  return (
    <div className="App">
      
      <Navbar />
      <div>
        <input type="text" value={latitude} />
        <input type="text" value={longitude} />
        
      </div>
     
      {!loading ? (
        
        <Map center={{ lat: latitude, lng: longitude }} />
        
        
        ) : (

         <h1>Loading</h1>
         
        )}

        
      
      </div>
      
  );
}

export default App;
