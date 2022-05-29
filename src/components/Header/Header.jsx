import React from 'react'

import './index.scss';
import logo from '../../assets/img/logo.svg';

import { useDispatch } from 'react-redux';
import { scaleChange } from '../../redux/scaleChange';

export default function Header({activeScale}) {
	const dispath = useDispatch();


	function changeScale() {
		dispath(scaleChange())
	}


  	return (
        <header className="header">
            <div className="container">
                <div className="row">
					
                    <div className="col-2">
                        <div className="logo">
                            <div className="logo__img">
								<img src={logo} alt="Logo"/>
							</div>
                            <div className="logo__text">WeatherApp</div>
                        </div>
                    </div>

                    <div className="col-6">
                        {/* <SearchPanel /> */}
                    </div>

                    <div className="col-3 offset-1">
                        <div onClick={changeScale} className="scale-change">
							<span className={activeScale ? 'scale-change__scale_active' : 'scale-change__scale'} >
								°C
							</span>
							<span className="scale-change__scale_active">
								|
							</span>
							<span className={activeScale ? 'scale-change__scale' : 'scale-change__scale_active'} >
								°F
							</span>
						</div>
                    </div>

                </div>
            </div>
        </header>
    );	
}
