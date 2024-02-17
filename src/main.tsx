import React from 'react'
import {createRoot} from 'react-dom/client'
import App from '@ui/App'
import {HashRouter} from "react-router-dom";

const root = document.getElementById("root")
createRoot(root!).render (
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);