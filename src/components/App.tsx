import React, { Suspense } from "react"
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom"
import "./App.css"

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

const CounterPage = React.lazy(() => import(/* webpackChunkName: "CounterPage" */"./counter/CounterPage"))
const TodoPage = React.lazy(() => import(/* webpackChunkName: "TodoPage" */"./todo-list/TodoPage"))

const App = () => (
    <>
        <header>
            <h1>Demo apps</h1>
            <Navigation/>
        </header>
        <hr/>
        <main>
            <Switch>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Route path="/" exact>
                        <p style={{ textAlign: "center" }}>You're home!!!</p>
                    </Route>
                    <Route path="/counter" exact component={CounterPage}/>
                    <Route path="/todolist" exact component={TodoPage}/>
                </Suspense>
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
