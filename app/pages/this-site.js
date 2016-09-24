import './this-site.scss';
import React from 'react';

var ThisSiteModal = React.createClass({
    getInitialState(){
        return {
            works:Data.works
        };
    },
    render: function() {
        return (
            <Modal title="About this site" id="this-site">
                <div className="this-site">
                    Content 123
                    <p>para1</p>
                    <p>para2</p>
                    <p>para3</p>
                </div>
            </Modal>
        );
    }
});
export default ThisSiteModal;