import './contact.scss';
import React from 'react';

var ContactModal = React.createClass({
    render: function() {
        return (

            <div className="modal fade modal-contact" id="contact" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">Get In Touch</h4>
                        </div>
                        <div className="modal-body modal-spa">
                            <div className="contact">
                                <div className="contact-w3lsrow">
                                    <div className="col-md-6 contact-left w3-agileits">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.9940307!3d40.719109700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANADA!5e0!3m2!1sen!2sin!4v1441710758555" allowFullScreen />
                                    </div>
                                    <div className="col-md-6 contact-right">
                                        <form action="#" method="post">
                                            <div className="styled-input agile-styled-input-top">
                                                <input type="text" name="Name" required />
                                                <label>Name</label>
                                                <span />
                                            </div>
                                            <div className="styled-input">
                                                <input type="text" name="Email" required />
                                                <label>Email</label>
                                                <span />
                                            </div>
                                            <div className="styled-input">
                                                <input type="text" name="Subject" required />
                                                <label>Subject</label>
                                                <span />
                                            </div>
                                            <div className="styled-input">
                                                <textarea name="Message" required defaultValue={""} />
                                                <label>Message</label>
                                                <span />
                                            </div>
                                            <input type="submit" defaultValue="SEND" />
                                        </form>
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
export default ContactModal;