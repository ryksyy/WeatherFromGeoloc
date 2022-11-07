import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Weather from './components/Weather';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setLoading(false)
      }, (error) =>{
        alert(error);
      })
    }else{
      alert('browser doesnt support geoloc')
    }
  },[])
  if(loading)
    return <p>loading please wait . . . </p>
  return (
    <div className='content'>
      <p>
        Position:
        {lat.toFixed(3)},
        {lng.toFixed(3)}
      </p>
      <Weather lat={lat} lng={lng}/>
    </div>
  );
}

export default App;
