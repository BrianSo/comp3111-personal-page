import './experience.scss';
import React from 'react';

var ExperienceModal = React.createClass({
    getInitialState(){
        return {
            experiences:[
                {
                    period:"2015 - Now",
                    company:"BrianSo Studio",
                    title:"Chairman",
                    description:"Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at"
                },
                {
                    period:"2014 - 2015",
                    company:"Google Inc.",
                    title:"Software Engineer",
                    description:"Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at"
                },
                {
                    period:"2013 - 2014",
                    company:"Oracle Inc.",
                    title:"Web App Developer",
                    description:"Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at"
                }
            ]
        };
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