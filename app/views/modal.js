import './modal.scss';
import React from 'react';

var Modal = React.createClass({
    render: function() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">{this.props.title}</h4>
                        </div>
                        <div className="modal-body modal-spa">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Modal;