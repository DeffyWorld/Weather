import React, { useEffect } from 'react'

import './index.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/weather';


export default function Main() {
	const dispatch = useDispatch();
	const {weatherData, status, error} = useSelector(state => state.weather);
	// if (status === 'resolved') {
	// 	console.log(weatherData);
	// 	console.log(status);
	// 	console.log(error)
	// }


	useEffect(() => {
		dispatch(fetchWeather());
	}, [dispatch]);
	
	
  	return (
		<section className="main">
			<div className="container">
				<div className="row">

					<div className="col-3">
						
					</div>
					
				</div>
			</div>
		</section>
  	)
}