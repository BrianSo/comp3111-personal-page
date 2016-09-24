import React from 'react';
import TopNav from './views/top-nav';
import Banner from './views/banner';
import Info from './views/info';
import Footer from './views/footer';

import AboutPage from './pages/about.js';
import SkillsPage from './pages/skills.js';
import ExperiencePage from './pages/experience.js';
import EducationPage from './pages/education.js';
import WorkPage from './pages/work.js';
import ContactPage from './pages/contact.js';
import ThisSitePage from './pages/this-site.js';

const App = React.createClass({
    render(){
        return <div>
            <TopNav/>
            <Banner/>
            <Info/>

            <AboutPage/>
            <SkillsPage/>
            <ExperiencePage/>
            <EducationPage/>
            <WorkPage/>
            <ThisSitePage/>
            <ContactPage/>

            <Footer/>
        </div>
    }
});

export default App;