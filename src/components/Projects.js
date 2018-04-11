import React from 'react'

class Projects extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="Left flex-column flex-end">
                        <h3>Projects</h3>
                        <h4>Best Way To Learn Is To Do</h4>
                    </div>
                    <div className="Right flex-row flex-wrap">
                        <div className="Column50">
                            <h3 className="margin-gray projectHead">Warehouse Inventory Management Website</h3>
                            <div className="project" id="Warehouse"><div className="text middle">Coming Soon</div></div>
                        </div>
                        <div className="Column50">
                            <h3 className="margin-gray projectHead">Ecommerce Art Website</h3>
                            <div className="project" id="ArtEcommerce"><div className="text middle">Coming Soon</div></div>
                        </div>
                        <div className="Column50">
                            <h3 className="margin-gray projectHead">Personal Resume Website</h3>
                            <div className="project" id="PersonalResume"><div className="text middle">Coming Soon</div></div>
                        </div>
                        <div className="Column50">
                            <h3 className="margin-gray projectHead">Quad+Guard</h3>
                            <div className="project" id="QuadGuard"><div className="text middle">Coming Soon</div></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Projects