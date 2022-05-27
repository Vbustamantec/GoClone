import React from "react";
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Results from './components/Results'
import "./globals.css";
import  {ResultContextProvider}  from "./context/ResultContextProvider";

const searchRoutes = ["image", "video", "news", "search"]

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
<ResultContextProvider>
<Router>
    <Routes>
        <Route path="/" element={<App />}>
        {searchRoutes.map((route) =>(
                <Route key={route} path={route} element={<Results/>}/>
            ))}
        </Route>
    </Routes>
</Router>
</ResultContextProvider>
);