import './skills.scss';
import React from 'react';

var SkillsModal = React.createClass({
    render: function() {
        return (

            <div className="modal fade modal-skills" id="skill" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">My Skills</h4>
                        </div>
                        <div className="modal-body modal-spa">
                            <div className="skills">
                                <div className="col-md-6 bar-grids">
                                    <h4><span className="glyphicon glyphicon-cog" /> Technical Skills </h4>
                                    <h6>web design  <span> 80% </span></h6>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active" style={{width: '80%'}}>
                                        </div>
                                    </div>
                                    <h6>ui design &amp; developer <span> 70% </span></h6>
                                    <div className="progress  w3-agile">
                                        <div className="progress-bar progress-bar-striped active" style={{width: '70%'}}>
                                        </div>
                                    </div>
                                    <h6>Javascript<span>90% </span></h6>
                                    <div className="progress  w3-agile">
                                        <div className="progress-bar progress-bar-striped active" style={{width: '90%'}}>
                                        </div>
                                    </div>
                                    <h6>Photoshop <span> 75% </span></h6>
                                    <div className="progress  w3-agile">
                                        <div className="progress-bar progress-bar-striped active" style={{width: '75%'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 bar-grids  w3-agile">
                                    <h4><span className="glyphicon glyphicon-briefcase" /> Professional Skills </h4>
                                    <h6>Communication<span> 85% </span></h6>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active" style={{width: '85%'}}>
                                        </div>
                                    </div>
                                    <h6>Social media marketing<span> 95% </span></h6>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active" style={{width: '95%'}}>
                                        </div>
                                    </div>
                                    <h6>Leadership<span>90% </span></h6>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped active" style={{width: '90%'}}>
                                        </div>
                                    </div>
                                    <h6>Confidence<span>86% </span></h6>
                                    <div className="progress prgs-w3agile-last">
                                        <div className="progress-bar progress-bar-striped active" style={{width: '86%'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default SkillsModal;