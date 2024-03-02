import {useEffect, useState} from "react";
import Markdown from "react-markdown";
import {useLocation} from "react-router-dom";
import remarkGfm from "remark-gfm";
import "@css/page/WikiPage.css";


export function WikiPage () {
    const [content, setContent] = useState('');
    const location = useLocation().pathname

    useEffect(() => {
        let path = location;
        if (location.endsWith("/"))
            path = location.substring(0, location.length - 1)

        fetch(`/${import.meta.env.VITE_APP_PATH}/docs${path}.md`)
            .then(res => res.text())
            .then((content) => setContent(content), () => setContent('Error.'));
    }, [location])

    if (content.startsWith("<!doctype html>")) return (<NotFound/>)

    return (
        <div className={"WikiPage"}>
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </div>
    )
}

export function HomePage () {
    const [content, setContent] = useState('');

    useEffect(() => {
        const filename = "home.md"
        fetch(`/${import.meta.env.VITE_APP_PATH}/docs/${filename}`)
            .then(res => res.text())
            .then((content) => setContent(content), () => setContent('Error.'));
    })

    return (
        <div className={"WikiPage"}>
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </div>
    )
}

export function NotFound() {
    return (
        <div className={"NotFound"}>
            <h1>404</h1>
            <p>Page not found.</p>
        </div>
    )
}