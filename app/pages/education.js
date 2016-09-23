import './education.scss';
import React from 'react';
import Data from '../data';
var EducationModal = React.createClass({
    getInitialState(){
        return {
            educations:Data.educations
        }
    },
    render: function() {
        return (

            <div className="modal fade modal-experience" id="education" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header w3layouts">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">My Qualification</h4>
                        </div>
                        <div className="modal-body modal-spa">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default EducationModal;