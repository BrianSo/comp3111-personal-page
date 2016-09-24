import './this-site.scss';
import React from 'react';
import Modal from  '../views/modal';

var ThisSiteModal = React.createClass({
    getInitialState(){
        return {
        };
    },
    render: function() {
        return (
            <Modal title="About this site" id="this-site">
                <h2>technology</h2>
                <p>Built by: React.js, SCSS and webpack</p>
                <p>Framework: Bootstrap UI framework</p>
                <p>Library: Jquery, Vide Jquery</p>
                <h2>What bootstrap feature used</h2>
                <p>Code</p>
                <p>Gird Column System</p>
                <p>Modal</p>
                <h2>What is new</h2>
                <p>This personal web page is based on the <a href="https://w3layouts.com/preview/?l=/easy-resume-personal-category-flat-bootstrap-responsive-web-template/">template</a> by W3layout</p>
                <p>All the changes can be found on Github</p>
                <p>rebuild by React.js, componentize</p>
                <p>Overall style</p>
                <p>This explanation page</p>
                <p>Three column</p>

            </Modal>
        );
    }
});
export default ThisSiteModal;