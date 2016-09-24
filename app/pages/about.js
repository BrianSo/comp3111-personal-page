import './about.scss';
import React from 'react';

import Data from '../data';
import Modal from '../views/modal';

var AboutModal = React.createClass({
    getInitialState(){
        return {
            info: Data.info
        };
    },
    render() {
        return (
            <Modal title="ABOUT ME" id="about">
                <div className="about">
                    <div className="col-md-4 about-left ">
                        <img src="/public/images/brian.jpg" className="img-responsive" alt />
                    </div>
                    <div className="col-md-8 about-right wthree">
                        <h3>Hi, i'm <span>Brian So </span></h3>
                        <h4>Web Designer &amp; Developer </h4>
                        <ul className="address">
                            {
                                this.state.info.map((record,i)=>
                                    <li key={i}>
                                        <ul className="agileits-address-text ">
                                            <li><b>{record[0]}</b></li>
                                            <li>{
                                                record[2] ?
                                                    <a href={record[2]}> {record[1]}</a> :
                                                    record[1]
                                            }</li>
                                        </ul>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                    <div className="about-text agileits-w3layouts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet sem sit amet dolor luctus pellentesque. Pellentesque eleifend tellus at interdum elementum. Nam egestas molestie elit. Vivamus sed accumsan quam, a mollis magna. Nam aliquet eros eget sapien consequat tincidunt at vel nibh sed accumsan quam.</p>
                        <p className="agile-br"> Aliquam aliquet sapien quis mauris semper suscipit. Maecenas pharetra dapibus posuere. Praesent odio sem, varius quis dolor vel, maximus dapibus mi. Pellentesque mattis mauris neque. Nam aliquam turpis ante, at cursus massa ullamcorper ut</p>
                    </div>
                </div>
            </Modal>
        );
    }
});

export default AboutModal;