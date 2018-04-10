import React from 'react'

class Education extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="Left flex-column flex-end">
                        <h3>Education</h3>
                        <h4>Never Let School Interfere with Education</h4>
                    </div>
                    <div className="Right flex-column">
                        <div className="Experience flex-row">
                            <div className="Column50">
                                <h6 className="margin-gray">February 2018 - May 2018</h6>
                                <h3 className="margin-gray">Certificate of Proficiency</h3>
                                <h5 className="margin-gray">Helio Training Web Development</h5>
                                <h6 className="margin-gray">Salt Lake City, UT</h6>
                            </div>
                            <div className="Column50">
                                <ul>
                                    <li className="lineItem">Full Stack Web Development Course
                                    </li>
                                    <li className="lineItem">Introduced HTML, CSS, Javascript, React.js, node.js and several other web development technologies
                                    </li>
                                    <li className="lineItem">Emphasized continued learning and adaptive learning</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Experience flex-row">
                            <div className="Column50">
                                <h6 className="margin-gray">August 2012 - May 2016</h6>
                                <h3 className="margin-gray">BS in Mechanical Engineering</h3>
                                <h5 className="margin-gray">University of Utah</h5>
                                <h6 className="margin-gray">Salt Lake City, UT</h6>
                            </div>
                            <div className="Column50">
                                <ul>
                                    <li className="lineItem">Bachelors of Science in Mechanical Engineering
                                    </li>
                                    <li className="lineItem">Focused on working with others on group projects and Lab assignments
                                    </li>
                                    <li className="lineItem">Allowed for creative problem solving to specific problems with several constraints</li>
                                    <li className="lineItem">Provided time management and planning skills for long term projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Education