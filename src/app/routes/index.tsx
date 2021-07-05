import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './Routes.module.css'

import { Navbar } from 'app/components'
import { Home } from 'app/pages/Home'

function Routes() {
    return (
        <Router>
            <Navbar />
            <div className={styles.marginTop}>
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes
