import React from "react"
import { Router, Link, Route, Switch } from "react-router-dom"
import * as history from "history"
import "./App.css"
import CounterPage from "./counter/CounterPage"

interface NavItemProps {
    text: string
    path: string
}

const NavItem = ({ text, path }: NavItemProps) => (
    <li>
        <Link to={path}>{text}</Link>
    </li>
)

const Navigation = () => (
    <nav>
        <ul>
            <NavItem text="Home" path="/"/>
            <NavItem text="Counter" path="/counter"/>
        </ul>
    </nav>
)

const App = () => (
    <div>
        <header>
            <h1>Demo apps</h1>
            <Navigation/>
        </header>
        <hr/>
        <main>
            <Switch>
                <Route path="/" exact>
                    <p style={{ textAlign: "center" }}>You're home!!!</p>
                </Route>
                <Route path="/counter" exact component={CounterPage}/>
            </Switch>
        </main>
    </div>
)

export default () => (
    <React.StrictMode>
        <Router history={history.createBrowserHistory()}>
            <App/>
        </Router>
    </React.StrictMode>
)
