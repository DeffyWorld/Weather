import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/weather';

import Header from './components/Header/Header';
import Forecast from './components/Forecast/Forecast';
import Now from './components/Now/Now';
import Table from './components/Table/Table';


function App() {
	const dispatch = useDispatch();
	const {weatherData, status, error} = useSelector(state => state.weather);
	const {activeScale} = useSelector(state => state.scaleChange);


	useEffect(() => {
		dispatch(fetchWeather());
	}, [dispatch]);
	
	
    return (
        <>
            <Header activeScale={activeScale} />

            {status === 'rejected' ? (<h1 className="server-error">The app can't get weather data</h1>) : 
				<>
					<Forecast weatherData={weatherData} status={status} error={error} activeScale={activeScale}/>

					<Now weatherData={weatherData} status={status} />

					<Table weatherData={weatherData} status={status} activeScale={activeScale} />
				</>
			}
        </>
    );
}


export default App;
