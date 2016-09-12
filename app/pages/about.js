import './about.scss';
import React from 'react';

var AboutModal = React.createClass({
    getInitialState(){
        return {};
    },
    render() {
        return (

            <div className="modal fade modal-about" id="about" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">ABOUT ME</h4>
                        </div>
                        <div className="modal-body modal-spa">
                            <div className="about">
                                <div className="col-md-4 about-left ">
                                    <img src="/public/images/img1.jpg" className="img-responsive" alt />
                                </div>
                                <div className="col-md-8 about-right wthree">
                                    <h3>Hi, i'm <span>Brian So </span></h3>
                                    <h4>Web Designer &amp; Developer </h4>
                                    <ul className="address">
                                        <li>
                                            <ul className="agileits-address-text ">
                                                <li><b>D.O.B</b></li>
                                                <li>23-06-1980</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="agileits-address-text">
                                                <li><b>PHONE </b></li>
                                                <li>+00 111 222 3333</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="agileits-address-text">
                                                <li><b>ADDRESS </b></li>
                                                <li>756 global Place, North Sydney, Canada.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="agileits-address-text">
                                                <li><b>E-MAIL </b></li>
                                                <li><a href="mailto:example@mail.com"> mail@example.com</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className="agileits-address-text">
                                                <li><b>WEBSITE </b></li>
                                                <li><a href="http://w3layouts.com">www.myresume.com</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix"> </div>
                                <div className="about-text agileits-w3layouts">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet sem sit amet dolor luctus pellentesque. Pellentesque eleifend tellus at interdum elementum. Nam egestas molestie elit. Vivamus sed accumsan quam, a mollis magna. Nam aliquet eros eget sapien consequat tincidunt at vel nibh sed accumsan quam.</p>
                                    <p className="agile-br"> Aliquam aliquet sapien quis mauris semper suscipit. Maecenas pharetra dapibus posuere. Praesent odio sem, varius quis dolor vel, maximus dapibus mi. Pellentesque mattis mauris neque. Nam aliquam turpis ante, at cursus massa ullamcorper ut</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default AboutModal;