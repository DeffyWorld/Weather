import React, { useEffect } from 'react';

import Header from './components/Header/Header';
import Forecast from './components/Forecast/Forecast';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/weather';


function App() {
	const dispatch = useDispatch();
	const {weatherData, status, error} = useSelector(state => state.weather);
	const {activeScale} = useSelector(state => state.scaleChange)

	if (status === 'resolved') {
		console.log(weatherData);
		console.log(status);
		console.log(error)
	}


	useEffect(() => {
		dispatch(fetchWeather());
	}, [dispatch]);
	
	
    return (
		<>
			<Header activeScale={activeScale} />

			{status === 'rejected'
			? <h1 className='server-error'>The app can't get weather data</h1>
			: <Forecast weatherData={weatherData} status={status} error={error} activeScale={activeScale} />}
		</>
    );
}


export default App;
