import React, { Component } from 'react';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

class Sliderr extends Component {
    render() {
        return (

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={banner1} height={600} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={banner2} height={600} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={banner3} height={600} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn-crownx.winmart.vn/images/prod/barona_15-31.01_d807d5c2-494e-4105-a0ea-9c4a4d526e17.png" height={600} alt="Four slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn-crownx.winmart.vn/images/prod/8_4996d437-64f1-4426-afd0-95fdbd57e185.jpg" height={600} alt="fif slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Sliderr;