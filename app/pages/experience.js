import './experience.scss';
import React from 'react';

var ExperienceModal = React.createClass({
    render: function() {
        return (

            <div className="modal fade modal-experience" id="experience" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">My Experience</h4>
                        </div>
                        <div className="modal-body modal-spa">
                            <div className="experience w3-agileits-info">
                                <div className="experience-grids">
                                    <div className="experience-left">
                                        <h3>2014 - Now </h3>
                                        <h5>Company Name </h5>
                                    </div>
                                    <div className="experience-right">
                                        <h4>Senior Web Designer</h4>
                                        <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="experience-grids experience-grids-btm">
                                    <div className="experience-left">
                                        <h3>2013 - 2014</h3>
                                        <h5>Company Name </h5>
                                    </div>
                                    <div className="experience-right">
                                        <h4>Graphic Designer</h4>
                                        <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="experience-grids w3-agileits">
                                    <div className="experience-left">
                                        <h3>2011 - 2013</h3>
                                        <h5>Company Name </h5>
                                    </div>
                                    <div className="experience-right">
                                        <h4>Web Designer &amp; Developer</h4>
                                        <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default ExperienceModal;