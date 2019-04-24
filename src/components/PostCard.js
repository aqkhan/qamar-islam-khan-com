import React from 'react';
import logo from '../../Public/images/card1.jpg';

export default () => (
    <div className="card">
        <div className="card-image">
        <img className="logo-img" src={logo}></img>
        </div>
        <div className="image-design-text">
            <p>DESIGN, STYLE</p>
        </div>
        <div className="card-heading">
            <h3>Who Else Wants To Know The Mystery Behind Style?</h3>
        </div>
        <div className="card-para-text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, nunc et accumsan cursus, neque eros sodales lectus, in fermentum libero dui eu lacus. Nam lobortis facilisis sapien non aliquet. Aenean ligula urna, vehicula placerat sodales vel, tempor et orci. Donec molestie metus a sagittis…
            </p>
        </div>
        <div className="card-footer">
            <div className="card-duration">
                <p>
                Gillion, 2 years ago
                </p>
            </div>
            <hr className="card-footer-line"></hr>
            <div className="card-messages">
                <div className="card-font-awe">
                    <i className='fa fa-comment'></i>
                </div>
                <div className="card-mssg-num">
                    0
                </div>
            </div>
            <hr className="card-footer-line"></hr>
            <div className="card-mssg-duration">
                <div className="card-font-awe">
                    <i className="fa fa-clock-o"></i>
                </div>
                <div className="card-mssg-num">
                    1 min read
                </div>
            </div>
        </div>
    </div>
)