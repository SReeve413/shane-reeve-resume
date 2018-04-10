import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
//
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'

export default () => (
    <React.Fragment>

        <Router>
            <Switch>

               <Route path="/" exact component={Landing}/>
               <Route component={NotFound}/>

            </Switch>
        </Router>

    </React.Fragment>
)
