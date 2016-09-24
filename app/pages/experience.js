import './experience.scss';
import React from 'react';
import Data from '../data';
import Modal from '../views/modal';

var ExperienceModal = React.createClass({
    getInitialState(){
        return {
            experiences:Data.experiences
        }
    },
    render: function() {
        return (
            <Modal title="My Experience" id="experience">
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
            </Modal>
        );
    }
});

export default ExperienceModal;