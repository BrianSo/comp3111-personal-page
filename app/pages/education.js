import './education.scss';
import React from 'react';

var EducationModal = React.createClass({
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
                                <div className="experience-grids">
                                    <div className="experience-left">
                                        <h3>2011<span>(2 Years Course)</span> </h3>
                                        <h5> University Name</h5>
                                    </div>
                                    <div className="experience-right">
                                        <h4>Master of Web Design</h4>
                                        <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="experience-grids experience-grids-btm">
                                    <div className="experience-left">
                                        <h3>2009<span>(3 Years Course)</span></h3>
                                        <h5> University Name</h5>
                                    </div>
                                    <div className="experience-right">
                                        <h4>Diploma in Design</h4>
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
export default EducationModal;