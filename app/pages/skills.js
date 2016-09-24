import './skills.scss';
import React from 'react';
import Data from '../data';
import Modal from '../views/modal';

var SkillsModal = React.createClass({
    getInitialState(){
        return {
            sections: Data.skillSections
        };
    },
    render: function() {
        return (
            <Modal title="My Skills" id="skill">
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
            </Modal>
        );
    }
});
export default SkillsModal;