import React from 'react'

class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="Left flex-end flex-column">
                        <h3>Contact</h3>
                        <h4>Let's Work Together</h4>
                    </div>
                    <div className="Right">
                        <div id="InfoTag">

                            <div className="flex-row">
                                <div className="Column">
                                    <h5>Location</h5>
                                    <h6>Salt Lake City, UT</h6>
                                </div>
                                <div className="Column">
                                    <h5>Phone</h5>
                                    <a href="tel:+8014199702"><h6>801.419.9702</h6></a>

                                </div>
                                <div className="Column">
                                    <h5>Web</h5>
                                    <a href="http://infallible-easley-e774eb.netlify.com/" target="_blank" rel="noopener noreferrer"><h6>Shanereeve.com</h6></a>
                                </div>
                                <div className="Column">
                                    <h5>Email</h5>
                                    <a href="mailto:shanereeve@gmail.com"><h6>Shanereeve@gmail.com</h6></a>

                                </div>

                            </div>
                            <br/>
                            <br/>
                            <hr/>
                            <br/>
                            <div>
                                <h2 id="first-name-footer">Shane</h2>
                                <div className="flex-row flex-space-between">
                                    <h2 id="last-name-footer">REEVE</h2>
                                    <div className="flex-row flex-end">
                                        <a href="https://www.linkedin.com/in/shanereeve/" target="_blank" rel="noopener noreferrer"><div className='Icon'><i className=" fab fa-linkedin-in fa-2x"/></div></a>
                                        <a href="https://github.com/SReeve413" target="_blank" rel="noopener noreferrer"><div className='Icon'><i className="fab fa-github fa-2x"/></div></a>
                                        {/*Download Resume*/}

                                        <a href="/ShaneReeveResume.pdf" target="_blank" rel="noopener noreferrer"><div className='Icon'><i className="fas fa-file fa-2x"/></div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )
    }
    }

    export default Footer