import React from "react"
import { Router, Link, Route, Switch } from "react-router-dom"
import * as history from "history"
import "./App.css"
import CounterPage from "./counter/CounterPage"

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
        </ul>
    </nav>
)

const App = () => (
    <div>
        <h1>Demo apps</h1>
        <Navigation/>
        <hr/>
        <Switch>
            <Route path="/" exact>
                <p style={{textAlign: "center"}}>You're home!!!</p>
            </Route>
            <Route path="/counter" exact component={CounterPage}/>
        </Switch>
    </div>
)

export default () => (
    <React.StrictMode>
        <Router history={history.createBrowserHistory()}>
            <App/>
        </Router>
    </React.StrictMode>
)
