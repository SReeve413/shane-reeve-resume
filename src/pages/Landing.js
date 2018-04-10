import React from 'react'

import Name from '../components/Name'

class Landing extends React.Component {

    render() {
        return (
            <React.Fragment>
                <main>
                    <section id="Name">
                        <Name/>
                    </section>
                </main>
            </React.Fragment>
        )
    }
}

export default Landing