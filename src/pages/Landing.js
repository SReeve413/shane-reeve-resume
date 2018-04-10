import React from 'react'

import Name from '../components/Name'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Education from '../components/Education'
import OtherInterests from "../components/OtherInterests"
import Footer from "../components/Footer"





class Landing extends React.Component {

    render() {
        return (
            <React.Fragment>
                <main>
                    <Name/>
                    <Intro/>
                    <Skills/>
                    <Projects/>
                    <Experience/>
                    <Education/>
                    <OtherInterests/>
                    <Footer/>
                </main>
            </React.Fragment>
        )
    }
}

export default Landing