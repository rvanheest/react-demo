import React, { Suspense } from "react"
import { CombinedState, Store } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import "./App.css"
import { ReduxStore } from "../ducks"

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
            <NavItem text="Counter with global state" path="/redux-counter"/>
            <NavItem text="Todo list" path="/todolist"/>
            <NavItem text="Todo list with global state" path="/redux-todolist"/>
            <NavItem text="Mouse position" path="/mouse-position"/>
        </ul>
    </nav>
)

const CounterPage = React.lazy(() => import(/* webpackChunkName: "CounterPage" */"./counter/CounterPage"))
const ReduxCounterPage = React.lazy(() => import(/* webpackChunkName: "ReduxCounterPage" */"./counter-redux/ReduxCounterPage"))
const TodoPage = React.lazy(() => import(/* webpackChunkName: "TodoPage" */"./todo-list/TodoPage"))
const ReduxTodoPage = React.lazy(() => import(/* webpackChunkName: "ReduxTodoPage" */"./todo-list-redux/ReduxTodoPage"))
const MousePositionPage = React.lazy(() => import(/* webpackChunkName: "MousePositionPage" */"./mouseposition/MousePositionPage"))

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
                    <Route path="/redux-counter" exact component={ReduxCounterPage}/>
                    <Route path="/todolist" exact component={TodoPage}/>
                    <Route path="/redux-todolist" exact component={ReduxTodoPage}/>
                    <Route path="/mouse-position" exact component={MousePositionPage}/>
                </Suspense>
            </Switch>
        </main>
    </>
)

interface MainProps {
    store: Store<CombinedState<ReduxStore>>
}

export default ({ store }: MainProps) => (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
