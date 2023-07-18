import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from "react-router-dom"
import {EnumRoutes, publicRoutes} from "../utils/routes";
import "../styles/index.scss"
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme!])}>
            <button onClick={toggleTheme}>theme</button>
            <div>
                <Link to={EnumRoutes.main}>Main</Link>
                <Link to={EnumRoutes.about}>About</Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {publicRoutes.map(route => <Route key={route.path} {...route} />)}
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;