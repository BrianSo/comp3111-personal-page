import './this-site.scss';
import React from 'react';
import Modal from  '../views/modal';

var ThisSiteModal = React.createClass({
    getInitialState(){
        return {
            code:""
        };
    },
    render: function() {
        return (
            <Modal title="About this site" id="this-site">
                <div className="this-site">
                    <h3><span className="glyphicon glyphicon-cog" />Technology</h3>
                    <dl className="dl-horizontal">
                        <dt>Built by</dt>
                        <dd>React.js, SCSS and webpack</dd>
                        <dt>Framework</dt>
                        <dd>Bootstrap UI framework</dd>
                        <dt>Library</dt>
                        <dd>Jquery, Vide Jquery, Font Awesome</dd>
                    </dl>
                    <h3><span className="glyphicon glyphicon-cog" />What bootstrap feature used</h3>
                    <dl className="dl-horizontal">
                        <dt>Pre & Code</dt>
                        <dd>It is used below. The <code>pre</code> and <code>code</code> element are styled by bootstrap</dd>
                        <dt>Horizontal description</dt>
                        <dd>This list of bootstrap is using the <code>dl-horizontal</code> to align the title and description</dd>
                        <dt>Gird Column System</dt>
                        <dd>This most popular features in bootstrap is employed in the main page, under the video, to show the three emphasis of my facts</dd>
                        <dt>Modal</dt>
                        <dd>All the popup are using bootstrap modal actually</dd>
                    </dl>

                    <h3><span className="glyphicon glyphicon-cog" />What's new</h3>
                    <p className="alert alert-warning" role="alert">This personal web page is based on the <a href="https://w3layouts.com/preview/?l=/easy-resume-personal-category-flat-bootstrap-responsive-web-template/">template</a> by W3layout</p>
                    <p className="alert alert-success">All the changes can be found on Github <i className="fa fa-github"></i></p>
                    <p>The personal website is first rebuild by React.js, and then componentize the elements. The following codeblock shows how the banner component is written:</p>
                    <pre>{`import './banner.scss';
import React from 'react';

var Banner = React.createClass({
    render: function() {
        return (
            <div className="my-banner">
                <div className="video" data-vide-bg="public/video/cv">
                    <div className="container">
                        <div className="banner-text agileinfo-text">
                            <h1>Brian So</h1>
                            <h6>Web Designer &amp; Developer</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Banner;`}</pre>
                    <p>Then to modify the css styles to scss, and makes the theme color as a variable so it can be changes easily later.</p>
                    <p>Using react and scss makes every thing as a component, increasing the reusability of code and maintenance efficiency.</p>
                    <p>The page is then added the three column section under the video using the bootstrap gird system</p>
                    <p>Lastly added this explanation page and many elements in here are styled by bootstrap too!</p>
                </div>
            </Modal>
        );
    }
});
export default ThisSiteModal;