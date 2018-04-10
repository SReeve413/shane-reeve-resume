import React from 'react'

import Head_shot from '../images/headshot.png'

class Name extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section>

                    <div className='Left'>
                        <div id="HeadShot">
                            <img src={Head_shot} alt="HeadShot" id="head-shot"/>
                        </div>
                    </div>
                    <div className='Right'>
                        <div id="NameTag">
                            <div>
                            <h3 id="first-name">shane</h3>
                            <h3 id="last-name">REEVE</h3>
                                <div className="flex-row">
                                    <h3 id="title">Full-Stack Web Developer</h3>

                                    <div className="Icon"/>
                                    <div className="Icon"/>
                                    <div className="Icon"/>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}

export default Name