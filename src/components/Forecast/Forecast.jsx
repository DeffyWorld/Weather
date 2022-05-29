import React from 'react'
import './index.scss';

import ContentLoader from "react-content-loader"


export default function Main({weatherData, status, activeScale}) {
    const {location, forecast, current} = weatherData;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    

	return (
        <section className="forecast">
            <div className="container">

                {status !== 'resolved' && status !== 'rejected' ? 
                    (<ContentLoader 
                        speed={2}
                        width={1440}
                        height={405}
                        viewBox="0 0 1440 405"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="100" y="112" rx="0" ry="0" width="256" height="177" /> 
                        <rect x="503" y="120" rx="0" ry="0" width="837" height="161" /> 
                      </ContentLoader>) : status === 'resolved' && (
                    <div className="row">

                        <div className="col-3">
                            <div className="main">
                                <div className="main__title">
                                    {location.name}
                                </div>
                                <div className="main__date">
                                    {days[new Date().getDay(location.localtime_epoch)]} 
                                    {' '}
                                    {location.localtime.split(' ')[1]}
                                </div>
                                <div className="main__temp">
                                    {activeScale ? current.temp_c : current.temp_f}
                                    {activeScale ? '°C' : '°F'}
                                </div>
                            </div>
                        </div>

                        <div className="col-2 offset-1">
                            {
                                forecast
                                    .forecastday[0]
                                    .hour[+location.localtime.split(' ')[1].split(':')[0]+1] &&

                                <div className="hourly-forecast-item">
                                    <div className="hourly-forecast-item_time">
                                        {
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+1]
                                                .time.split(' ')[1]
                                        }
                                    </div>
                                    <div className="hourly-forecast-item_icon">
                                        <img src={
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+1]
                                                .condition
                                                .icon
                                        } alt="#" />
                                    </div>
                                    <div className="hourly-forecast-item_temp">
                                        {
                                            activeScale ? 
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+1]
                                                .temp_c :
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+1]
                                                .temp_f 
                                        }
                                        {activeScale ? '°C' : '°F'}
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="col-2">
                            {
                                forecast
                                    .forecastday[0]
                                    .hour[+location.localtime.split(' ')[1].split(':')[0]+2] &&

                                <div className="hourly-forecast-item">
                                    <div className="hourly-forecast-item_time">
                                        {
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+2]
                                                .time.split(' ')[1]
                                        }
                                    </div>
                                    <div className="hourly-forecast-item_icon">
                                        <img src={
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+2]
                                                .condition
                                                .icon
                                        } alt="#" />
                                    </div>
                                    <div className="hourly-forecast-item_temp">
                                        {
                                            activeScale ? 
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+2]
                                                .temp_c :
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+2]
                                                .temp_f 
                                        }
                                        {activeScale ? '°C' : '°F'}
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="col-2">
                            {
                                forecast
                                    .forecastday[0]
                                    .hour[+location.localtime.split(' ')[1].split(':')[0]+3] &&

                                    <div className="hourly-forecast-item">
                                    <div className="hourly-forecast-item_time">
                                        {
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+3]
                                                .time.split(' ')[1]
                                        }
                                    </div>
                                    <div className="hourly-forecast-item_icon">
                                        <img src={
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+3]
                                                .condition
                                                .icon
                                        } alt="#" />
                                    </div>
                                    <div className="hourly-forecast-item_temp">
                                        {
                                            activeScale ? 
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+3]
                                                .temp_c :
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+3]
                                                .temp_f 
                                        }
                                        {activeScale ? '°C' : '°F'}
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="col-2">
                            {
                                forecast
                                    .forecastday[0]
                                    .hour[+location.localtime.split(' ')[1].split(':')[0]+4] &&

                                    <div className="hourly-forecast-item">
                                    <div className="hourly-forecast-item_time">
                                        {
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+4]
                                                .time.split(' ')[1]
                                        }
                                    </div>
                                    <div className="hourly-forecast-item_icon">
                                        <img src={
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+4]
                                                .condition
                                                .icon
                                        } alt="#" />
                                    </div>
                                    <div className="hourly-forecast-item_temp">
                                        {
                                            activeScale ? 
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+4]
                                                .temp_c :
                                            forecast
                                                .forecastday[0]
                                                .hour[+location.localtime.split(' ')[1].split(':')[0]+4]
                                                .temp_f 
                                        }
                                        {activeScale ? '°C' : '°F'}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}