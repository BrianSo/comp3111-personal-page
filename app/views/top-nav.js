import './top-nav.scss';
import React from 'react';

var TopNav = React.createClass({
    render: function() {
        return (

            <div className="top-nav">
                <div className="container">
                    <div className="navbar-header logo">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            Menu
                        </button>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div className="menu">
                            <ul className="nav navbar">
                                {/*<li><a href="index.html" className="w3ls-hover"><span data-letters="Home">Home</span></a></li>*/}
                                <li><a href="#" data-toggle="modal" data-target="#about" className="w3ls-hover"><span data-letters="About">About </span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#skill" className="w3ls-hover"><span data-letters="Skills">Skills</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#experience" className="w3ls-hover"><span data-letters="Experience">Experience </span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#education" className="w3ls-hover"><span data-letters="Education">Education </span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#work" className="w3ls-hover"><span data-letters="Work">Work</span></a></li>
                                <li><a href="#" data-toggle="modal" data-target="#contact" className="w3ls-hover"><span data-letters="Contact">Contact </span></a></li>
                                <li><a className="w3ls-icon" href="#"><span className="glyphicon glyphicon-save" /></a></li>
                            </ul>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default TopNav;