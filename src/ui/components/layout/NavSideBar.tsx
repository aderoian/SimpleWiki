import '@css/layout/NavSideBar.css'
import React from "react";
import NavCategory from "@components/nav/NavCategory.tsx";
import {NavPage} from "@components/nav/NavPage.tsx";
import {Category, updateHidden} from "@app/backend/FileTree.ts";

interface IProps {

}

interface IState {
    category: Category | null
    searchValue: string
}

class NavSideBar extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            category: null,
            searchValue: ""
        }
    }

    componentDidMount() {
        fetch("/SimpleWiki/docs/index.json")
            .then(res => res.json()
                .then(data => {
                    this.setState({
                        category: data
                    });
                }));
    }

    render() {
        const category = this.state.category
        if (category == null) return;

        updateHidden(category, this.state.searchValue)
        return (
            <div className={"NavSideBar"}>
                <div className={"NavHeader"}>
                    <h1 className={"NavHeaderTitle"}>{import.meta.env.VITE_APP_NAME}</h1>
                    <input className={"NavHeaderSearch"} type={"text"} placeholder={"Search"}
                           onChange={event => this.setState({searchValue: event.target.value})}/>
                </div>

                <div className={"NavTree"}>
                    {category && category.categories?.filter(category => !category.hidden).map((c) => <NavCategory
                        key={c.name} category={c}
                        path={"/" + c.name + "/"} index={0} searchValue={this.state.searchValue}/>)}

                    {category && category.files?.filter(f => f.includes(this.state.searchValue)).map((f) => <NavPage
                        key={f} name={f} path={"/" + f} index={0}/>)}
                </div>
            </div>
        );
    }
}

export default NavSideBar;
