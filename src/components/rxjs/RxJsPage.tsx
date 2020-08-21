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
            <NavItem text="Mouse Position" path={`${basePath}/mouse-position`}/>
        </ul>
    </nav>
)

const MousePositionPage = React.lazy(() => import(/* webpackChunkName: "MousePositionPage" */"./mouseposition/MousePositionPage"))

const RxJsPage = () => {
    const { url } = useRouteMatch()

    return (
        <div className="rxjs-page">
            <h2>RxJS demo's</h2>
            <Navigation basePath={url}/>
            <hr/>
            <Switch>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Route path={`${url}/mouse-position`} exact component={MousePositionPage}/>
                </Suspense>
            </Switch>
        </div>
    )
}

export default RxJsPage
