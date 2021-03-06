import React from 'react'

class Experience extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="Left flex-column flex-end">
                        <h3>Experience</h3>
                        <h4>Experience Can Not Be Taught</h4>
                    </div>
                    <div className="Right">
                        <div className="Experience flex-row">
                            <div className="Column50">
                                <h3 className="margin-gray ">Operations Manager</h3>
                                <h5 className="margin-gray LineHeight">Kinex Connect</h5>
                                <h6 className="margin-gray LineHeight">May 2016 - January 2018</h6>
                                <h6 className="margin-gray LineHeight">Salt Lake City, UT</h6>
                            </div>
                            <div className="Column50">
                                <ul>
                                    <li className="lineItem">Managed 7 Mechanical Engineering Students
                                    </li>
                                    <li className="lineItem">Organized production plans to optimize work flow
                                    </li>
                                    <li className="lineItem">Created testing and quality standards</li>
                                    <li className="lineItem">Trained all new employees on manufacturing operations</li>
                                    <br/>
                                </ul>
                            </div>
                        </div>
                        <div className="Experience flex-row">
                            <div className="Column50">
                                <h3 className="margin-gray ">Development Engineer</h3>
                                <h5 className="margin-gray LineHeight">Method Therapeutic Solutions</h5>
                                <h6 className="margin-gray LineHeight">February 2014 - May 2016</h6>
                                <h6 className="margin-gray LineHeight">Salt Lake City, UT</h6>
                            </div>
                            <div className="Column50">
                                <ul>
                                    <li className="lineItem">Designed and developed improvements to a knee therapy
                                        device with 2 coworkers
                                    </li>
                                    <li className="lineItem">Modified/Enhanced photos for advertisement and user’s
                                        manual
                                    </li>
                                    <li className="lineItem">Devised test criteria for device quality standards</li>
                                    <li className="lineItem">Tested and approved devices for use in the field</li>
                                    <br/>

                                </ul>
                            </div>
                        </div>
                        <div className="Experience flex-row">
                            <div className="Column50">
                                <h3 className="margin-gray">Head Lifeguard</h3>
                                <h5 className="margin-gray LineHeight">Cowabunga Bay</h5>
                                <h6 className="margin-gray LineHeight">April 2012 - August 2013</h6>
                                <h6 className="margin-gray LineHeight">Draper, UT</h6>
                            </div>
                            <div className="Column50">
                                <ul>
                                    <li className="lineItem">Managed 20+ lifeguards during the day to day operations
                                    </li>
                                    <li className="lineItem">Dealt and resolved customer complains and issues
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Experience