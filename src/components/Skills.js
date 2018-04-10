import React from 'react'

class Skills extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="Left flex-column flex-end">
                        <h3>Skills</h3>
                        <h4>Always Learning</h4>
                    </div>
                    <div className="Right flex-row">
                        <div className="Column50">
                            <p className="Tech-Skills">React.js</p>
                            <p className="Tech-Skills">HTML5</p>
                            <p className="Tech-Skills">CSS3</p>
                            <p className="Tech-Skills">Express/Hapi</p>
                            <p className="Tech-Skills">Node.js</p>
                            <p className="Tech-Skills">MongoDB</p>
                            <p className="Tech-Skills">Test-driven Development</p>
                            <p className="Tech-Skills">RESTful API</p>
                            <p className="Tech-Skills">GraphQL</p>
                            <p className="Tech-Skills">GitHub</p>
                            <p className="Tech-Skills">NPM</p>
                        </div>
                        <div className="Column50">
                            <p className="non-Tech-Skills">Figma</p>
                            <p className="non-Tech-Skills">Adobe Photoshop</p>
                            <p className="non-Tech-Skills">Adobe Illustrator</p>
                            <p className="non-Tech-Skills">Webstorm/VS Code</p>
                            <p className="non-Tech-Skills">Problem Solving</p>
                            <p className="non-Tech-Skills">Communication</p>
                            <p className="non-Tech-Skills">Teamwork</p>
                            <p className="non-Tech-Skills">Self-Driven</p>
                            <p className="non-Tech-Skills">Photography</p>
                            <p className="non-Tech-Skills">Cinematography</p>
                            <p className="non-Tech-Skills">Maker</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Skills