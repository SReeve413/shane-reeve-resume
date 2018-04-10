import React from 'react'

class Intro extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="Left flex-end flex-column">
                        <h3>Intro</h3>
                        <h4>A Little About Me</h4>
                    </div>
                    <div className="Right">
                        <p>Full-stack Web developer, with a history of technical problem solving from the
                            University of Utah with a Mechanical Engineering Degree, and real-world problem
                            solving as an operations manager at Kinex Connect. Received a proficiency certificate
                            in Full Stack Web Development from Helio Training.</p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Intro