import React from 'react'
import './index.scss';

export default function Now({weatherData, status}) {
    const {location, forecast} = weatherData;
    const titles =['Chance of Rain', 'Humidity', 'Wind Speed', 'Visiblity', 'Pressure'];


    return (
        <section className="now">
            <div className="container">

                {status === 'resolved' && (
                    <div className="row">

                        <div className="col-1">
                            <div className="now__title">
                                Now
                            </div>
                        </div>

                        {titles.map((el, index) => {
                            return(
                                <div key={`${el}_${index}`} className="col-2">
                                    <div className="now-item">
                                        <div className="now-item__title">
                                            {el}
                                        </div>
                                        <div className="now-item__value">
                                            {el === 'Chance of Rain' &&
                                                `${forecast
                                                    .forecastday[0]
                                                    .day
                                                    .daily_chance_of_rain}%`}
                                            {el === 'Humidity' &&
                                                `${forecast
                                                    .forecastday[0]
                                                    .hour[+location.localtime.split(' ')[1].split(':')[0]]
                                                    .humidity}%`}
                                            {el === 'Wind Speed' &&
                                                `${forecast
                                                    .forecastday[0]
                                                    .hour[+location.localtime.split(' ')[1].split(':')[0]]
                                                    .wind_kph}k/h`}
                                            {el === 'Visiblity' &&
                                                `${forecast
                                                    .forecastday[0]
                                                    .hour[+location.localtime.split(' ')[1].split(':')[0]]
                                                    .vis_km}km`}   
                                            {el === 'Pressure' &&
                                                `${forecast
                                                    .forecastday[0]
                                                    .hour[+location.localtime.split(' ')[1].split(':')[0]]
                                                    .pressure_mb}hPa`}                
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                )}

            </div>
        </section>
    )
}