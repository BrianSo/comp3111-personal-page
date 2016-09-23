import './skills.scss';
import React from 'react';
import Data from '../data';
var SkillsModal = React.createClass({
    getInitialState(){
        return {
            sections: Data.skillSections
        };
    },
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
                                {this.state.sections.map(section=>
                                    <div className="col-md-6 bar-grids">
                                        <h4><span className={`glyphicon ${section.icon}`} />{section.name}</h4>
                                        {section.skills.map(skill=><div>
                                            <h6>{skill[0]}<span> {skill[1]} </span></h6>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped active" style={{width: skill[1]}}>
                                                </div>
                                            </div>
                                        </div>)
                                        }
                                    </div>)
                                }
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