import '@css/App.css'
import NavSideBar from "@components/layout/NavSideBar.tsx";
import PageView from "@components/layout/PageView.tsx";
import {useState} from "react";
import {LoginPanel} from "@components/layout/LoginPanel.tsx";
import Cookies from "js-cookie";

export default function App() {
    const [loggedIn, setLoggedIn] = useState(isLoggedIn())

    if (import.meta.env.VITE_APP_LOCKED == "false") return renderApp();

    return (!loggedIn) ? <LoginPanel onLogin={() => {
        setLoggedIn(true)
        updateLoggedIn()
    }}/> : renderApp()
}

function renderApp() {
    return (
        <div className={"App"}>
            <div className={"AppContainer"}>
                <NavSideBar/>
                <PageView/>
            </div>
        </div>
    );
}

function isLoggedIn(): boolean {
    const savedLog = Cookies.get("logged-in");
    return savedLog == "true";
}

function updateLoggedIn(loggedIn: boolean = true) {
    Cookies.set("logged-in", loggedIn ? "true" : "false", {expires: 1});
}
