import './banner.scss';
import React from 'react';

var Banner = React.createClass({
    render: function() {
        return (

            <div className="video" data-vide-bg="public/video/cv">
                <div className="container">
                    <div className="banner-text agileinfo-text">
                        <h1>Brian So</h1>
                        <h6>Web Designer &amp; Developer</h6>
                    </div>
                </div>
            </div>
        );
    }
});
export default Banner;