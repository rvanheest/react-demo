import React, { Suspense } from "react"
import { Link, Route, Switch, useRouteMatch } from "react-router-dom"

interface NavItemProps {
    text: string
    path: string
}

const NavItem = ({ text, path }: NavItemProps) => (
    <li>
        <Link to={path}>{text}</Link>
    </li>
)

interface NaviationProps {
    basePath: string
}

const Navigation = ({basePath}: NaviationProps) => (
    <nav>
        <ul>
            <NavItem text="Console" path={`${basePath}/console`}/>
            <NavItem text="Mouse Position" path={`${basePath}/mouse-position`}/>
            <NavItem text="Clock" path={`${basePath}/clock`}/>
        </ul>
    </nav>
)

const ConsolePage = React.lazy(() => import(/* webpackChunkName: "ConsolePage" */"./console/ConsolePage"))
const MousePositionPage = React.lazy(() => import(/* webpackChunkName: "MousePositionPage" */"./mouseposition/MousePositionPage"))
const ClockPage = React.lazy(() => import(/* webpackChunkName: "ClockPage" */"./clock/ClockPage"))

const RxJsPage = () => {
    const { url } = useRouteMatch()

    return (
        <div className="rxjs-page">
            <h2>RxJS demo's</h2>
            <Navigation basePath={url}/>
            <hr/>
            <Switch>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Route path={`${url}/console`} exact component={ConsolePage}/>
                    <Route path={`${url}/mouse-position`} exact component={MousePositionPage}/>
                    <Route path={`${url}/clock`} exact component={ClockPage}/>
                </Suspense>
            </Switch>
        </div>
    )
}

export default RxJsPage
