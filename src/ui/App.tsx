import '@css/App.css'
import NavSideBar from "@components/layout/NavSideBar.tsx";
import PageView from "@components/layout/PageView.tsx";

function App() {

    return (
        <>
            <div className={"App"}>
                <div className={"AppContainer"}>
                    <NavSideBar/>
                    <PageView/>
                </div>
            </div>
        </>
    )
}

export default App
