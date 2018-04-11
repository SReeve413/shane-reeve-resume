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
                        <p>Full-stack Web developer, with a history of practiced technical problem solving; University
                            of Utah Mechanical Engineering Degree. Real-world problem solving as an operations manager
                            at Kinex Connect. Earned proficiency in Full Stack Web Development from Helio Training.</p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Intro