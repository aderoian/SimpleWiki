import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import {WikiPage, HomePage} from "@components/page/WikiPage.tsx";


export default function PageViewer(): ReactElement {
    return (
        <div className={"PageView"}>
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/*"} element={<WikiPage/>}/>
        </Routes>
        </div>
    );
}