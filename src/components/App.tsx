import React from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import "./App.css"
import CounterPage from "./counter/CounterPage"
import TodoPage from "./todo-list/TodoPage"

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
            <NavItem text="Todo list" path="/todolist"/>
        </ul>
    </nav>
)

const App = () => (
    <>
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
                <Route path="/todolist" exact component={TodoPage}/>
            </Switch>
        </main>
    </>
)

export default () => (
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)
