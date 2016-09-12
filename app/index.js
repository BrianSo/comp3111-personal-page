import React from 'react';
import TopNav from './views/top-nav';
import Banner from './views/banner';
import Footer from './views/footer';

import AboutPage from './pages/about.js';
import SkillsPage from './pages/skills.js';
import ExperiencePage from './pages/experience.js';
import EducationPage from './pages/education.js';
import WorkPage from './pages/work.js';
import ContactPage from './pages/contact.js';

const App = React.createClass({
    render(){
        return <div>
            <TopNav/>
            <Banner/>

            <AboutPage/>
            <SkillsPage/>
            <ExperiencePage/>
            <EducationPage/>
            <WorkPage/>
            <ContactPage/>

            <Footer/>
        </div>
    }
});

export default App;