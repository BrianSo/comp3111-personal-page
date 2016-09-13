import './info.scss';
import React from 'react';

var Info = React.createClass({
    render: function() {
        return (
            <div className="info-view">
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature">
                            <div>
                                <div><i className="fa fa-5x fa-laptop"></i></div>
                                <h2>Technical skills</h2>
                                <p>
                                    Javascript(ES6), Java, C++, C#, Objective-C
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature">
                            <div>
                                <div><i className="fa fa-5x fa-users"></i></div>
                                <h2>Soft skills</h2>
                                <p>
                                    Project management, communication.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature">
                            <div>
                                <div><i className="fa fa-5x fa-gamepad"></i></div>
                                <h2>Interests</h2>
                                <p>
                                    Frisbee, Badminton, Table tennis, Minecraft
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Info;