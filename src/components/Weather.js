import React, {useEffect,useState} from 'react';
import axios from 'axios'


const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "your api key goes here"
const iconUrl = "http://openweathermap.org/img/wn/"

export default function Weather({lat, lng}){
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const addr = API_URL +
        '?lat=' + lat +
        '&lon=' + lng +
        '&units=metric' +
        '&appid=' + API_KEY;
        console.log(addr)

        axios.get(addr)
            .then((res) => {
                console.log(res.data)
                setTemp(res.data.main.temp)
                setSpeed(res.data.wind.speed)
                setDirection(res.data.deg)
                setDescription(res.data.weather[0].description)
                setIcon(iconUrl + res.data.weather[0].icon + '@2x.png')
                console.log(iconUrl + res.data.weather[0].icon + '@2x.png')
            }).catch(err => {
                alert(err)
            })

    }, [])

    return (
        <>
            <h3>Weather on your location</h3>
            <p>{temp} C&#176;</p>
            <p>{speed} m/s {direction} deg</p>
            <p>{description}</p>
            <img src={icon} alt=""/>
        </>
    )

    
}