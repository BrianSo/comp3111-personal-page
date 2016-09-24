import './education.scss';
import React from 'react';
import Data from '../data';
import Modal from '../views/modal';

var EducationModal = React.createClass({
    getInitialState(){
        return {
            educations:Data.educations
        }
    },
    render: function() {
        return (
            <Modal title="My Qualification" id="education">
                <div className="experience">
                    {this.state.educations.map(exp=>
                        <div className="experience-grids">
                            <div className="experience-left">
                                <h3>{exp.period}</h3>
                                <h5>{exp.institution}</h5>
                            </div>
                            <div className="experience-right">
                                <h4>{exp.program}</h4>
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
export default EducationModal;