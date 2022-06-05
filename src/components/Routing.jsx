import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Customers from '../pages/Customers'
import Dashboad from '../pages/Dashboad'

const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Dashboad} />
                <Route path="/customers" component={Customers} />
            </Switch>
        </>
    )
}

export default Routing