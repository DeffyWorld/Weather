import React from 'react'
import './index.scss';

export default function Table({weatherData, status, activeScale}) {
    const {forecast} = weatherData;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    return (
        <section className="table">
            <div className="container">
                {status === 'resolved' && (
                    <div className="row">
                        <div className="col-1 offset-1">
                            <div className="table__title">DAY</div>
                        </div>
                        <div className="col-3 offset-1">
                            <div className="table__title">CHANCE OF RAIN</div>
                        </div>
                        <div className="col-2">
                            <div className="table__title">HUMIDITY</div>
                        </div>
                        <div className="col-1">
                            <div className="table__title">WIND</div>
                        </div>
                        <div className="col-3">
                            <div className="table__title">TEMPERATURE</div>
                        </div>
                    </div>
                )}
                {status === 'resolved' && 
                    forecast.forecastday.map(day => {
                        return (
                            <div key={`${day.date_epoch}`}>
                                <div  className="row">
                                    <div className="col-12">
                                        <div className="table__line"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1 offset-1">
                                        <div className="table__value">
                                            {days[new Date(day.date).getDay()]} 
                                        </div>
                                    </div>
                                    <div className="col-3 offset-1">
                                        <div className="table__value">
                                            {day.day.daily_chance_of_rain}%
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="table__value">
                                            {day.day.avghumidity}%
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className="table__value">
                                            {day.day.maxwind_kph} km/h
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="table__value">
                                            {activeScale ? day.day.avgtemp_c : day.day.avgtemp_f}°
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}
