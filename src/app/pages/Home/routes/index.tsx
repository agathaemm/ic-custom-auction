import React from 'react';
import { Switch, Route } from 'react-router-dom'

const List = React.lazy(() => import('../pages/List'))

function Routes() {
    return (
        <React.Suspense fallback={<p>loading</p>} >
            <Switch>
                <Route path="/" component={List} exact/>
            </Switch>
        </React.Suspense>
    )
}

export default Routes;
