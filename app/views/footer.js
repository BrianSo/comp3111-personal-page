import './footer.scss';
import React from 'react';

var Footer = React.createClass({
    render: function() {
        return (
            <div className="footer">
                <div className="container">
                    <p>Built on top of the design by <a href="http://w3layouts.com">W3layouts</a></p>
                    <p style={{fontSize:"0.7em"}}>© 2016 Easy Resume. All rights reserved</p>
                </div>
            </div>
        );
    }
});

export default Footer;