import React from "react";
import {NavPage} from "@components/nav/NavPage.tsx";
import {SlArrowDown, SlArrowRight} from "react-icons/sl";
import {FaFolder, FaFolderOpen} from "react-icons/fa";
import {Category, formatListEntryName} from "@app/backend/FileTree.ts";

interface IState {
    open: boolean
}

interface IProps {
    category: Category
    path: string
    index: number
    searchValue: string
}

class NavCategory extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() {
        const dropdownStyles = {color: "var(--text-secondary-color)", height: "12px", width: "12px"};
        const iconStyles = {height: "18px", width: "18px"};
        return (
            <div className={"Tree_Category"} id={"Tree.FileTree." + this.props.category.name}>
                <div className={"Tree_Item"} id={`${this.props.category.name}-item`} onClick={() => {
                    this.setState({open: !this.state.open})
                }}>
                    <div className={"Tree_Item_Spacer"} style={{width: `${this.props.index * 10}px`}}/>
                    <div className={"Tree_Item_Icon"}>
                        {this.state.open ? <SlArrowDown style={dropdownStyles}/> : <SlArrowRight style={dropdownStyles}/>}
                    </div>
                    <div className={"Tree_Item_Content"}>
                        <div className={"Item_Content_Icon"}>
                            {this.state.open ? <FaFolderOpen style={iconStyles}/> : <FaFolder style={iconStyles}/>}
                        </div>
                        {formatListEntryName(this.props.category.name ?? "")}
                    </div>
                </div>

                {this.state.open && this.renderContent()}
            </div>
        );
    }

    renderContent() {
        return (
            <>
                {this.props.category.categories?.filter(category => !category.hidden).map((c) => <NavCategory key={c.name} category={c}
                                                                        path={(this.props.path + c.name + "/").toLowerCase()}
                                                                        index={this.props.index + 2} searchValue={this.props.searchValue}/>)}

                {this.props.category.files?.filter(f => f.includes(this.props.searchValue)).map((f) => <NavPage key={f} name={f}
                                                               path={(this.props.path + f).toLowerCase()}
                                                               index={this.props.index + 2}/>)}
            </>
        )
    }
}

export default NavCategory