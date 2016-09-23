import './experience.scss';
import React from 'react';
import Data from '../data';

var ExperienceModal = React.createClass({
    getInitialState(){
        return {
            experiences:Data.experiences
        }
    },
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
                                {this.state.experiences.map(exp=>
                                    <div className="experience-grids">
                                        <div className="experience-left">
                                            <h3>{exp.period}</h3>
                                            <h5>{exp.company}</h5>
                                        </div>
                                        <div className="experience-right">
                                            <h4>{exp.title}</h4>
                                            <p>{exp.description}</p>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default ExperienceModal;