import './this-site.scss';
import React from 'react';
import Modal from  '../views/modal';
import jquery from 'jquery';

var ThisSiteModal = React.createClass({
    getInitialState(){
        return {
            commits:[]
        };
    },
    componentDidMount(){
        jquery.ajax("https://api.github.com/repos/brianso/comp3111-personal-page/commits")
            .then((data)=>{
                this.setState({
                    commits:data
                })
            });
    },
    render: function() {
        function formatDate(d){
            return new Date(d).toLocaleDateString();
        }
        return (
            <Modal title="About this site" id="this-site">
                <div className="this-site">
                    <h3><i className="fa fa-cogs" />Technology</h3>
                    <div className="container">
                        <dl className="dl-horizontal">
                            <dt>Built by</dt>
                            <dd>React.js, SCSS and webpack</dd>
                            <dt>Framework</dt>
                            <dd>Bootstrap UI framework</dd>
                            <dt>Library</dt>
                            <dd>Jquery, Vide Jquery, Font Awesome</dd>
                        </dl>
                    </div>
                    <h3><i className="fa fa-level-down" />What bootstrap feature used</h3>
                    <div className="container">
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
                    </div>
                    <h3><i className="fa fa-plus-circle" />What's new</h3>
                    <div className="container">
                        <p className="alert alert-warning" role="alert">This personal web page is based on the <a href="https://w3layouts.com/preview/?l=/easy-resume-personal-category-flat-bootstrap-responsive-web-template/">template</a> by W3layout</p>
                        <p className="alert alert-success">All the changes can be found on Github <i className="fa fa-github"></i></p>
                        <p><span className="numbering">1. </span>The personal website is first rebuild by React.js, and then componentize the elements. The following codeblock shows how the banner component is written:</p>
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
                        <p><span className="numbering">2. </span> Then to modify the css styles to scss, and makes the theme color as a variable so it can be changes easily later. Using react and scss makes every thing as a component, increasing the reusability of code and maintenance efficiency.</p>
                        <p><span className="numbering">3. </span> The page is then added the three column section under the video using the bootstrap gird system</p>
                        <p><span className="numbering">4. </span> Lastly added this explanation page and many elements in here are styled by bootstrap too!</p>
                    </div>
                    <h3><i className="fa fa-clock-o" />Github Commits</h3>
                    <div className="container">
                        <ul>
                            {this.state.commits.map((commit,i)=>{
                                return <li key={i}>
                                        <a href={commit.commit.url}>{commit.commit.message} - {formatDate(commit.commit.committer.date)}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </Modal>
        );
    }
});
export default ThisSiteModal;