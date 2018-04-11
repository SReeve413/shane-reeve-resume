import React from 'react'

class OtherInterests extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="Left flex-column flex-end">
                        <h3>Other Interests</h3>
                        <h4>Never Stop Learning New Things</h4>
                    </div>
                    <div className="Right flex-row flex-wrap">
                        <div className="Column50">
                            <h3 className="margin-gray projectHead">Photography</h3>
                            <div className="project" id="Photography"> <div className="text middle">Coming Soon</div></div>
                        </div>
                        <div className="Column50">
                            <h3 className="margin-gray projectHead">Woodworking</h3>
                            <div className="project" id="Woodworking"> <div className="text middle">Coming Soon</div></div>
                        </div>
                        <div className="Column50">
                            <h3 className="margin-gray projectHead">Running/Triathlon</h3>
                            <div className="project" id="RunTri">
                                <div className="text middle">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default OtherInterests