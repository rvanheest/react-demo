import React, { Suspense } from "react"
import { AnyAction, CombinedState, Store } from "redux"
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

interface MainProps {
    store: Store<CombinedState<ReduxStore>, AnyAction>
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
