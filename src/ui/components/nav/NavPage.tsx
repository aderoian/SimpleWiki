import {useNavigate} from "react-router-dom";
import {FaFileAlt} from "react-icons/fa";
import {formatListEntryName} from "@app/backend/FileTree.ts";

interface IProps {
    name: string
    path: string
    index: number
}

export function NavPage(props: IProps) {
    const navigate = useNavigate();
    return (
        <div className={"Tree_Category_Item"} onClick={() => {
            navigate(props.path)
        }}>
            <div className={"Tree_Item_Spacer"}  id={`${props.name}-item`} style={{width: `${props.index * 10}px`}}/>
            <div className={"Tree_Item_Content"}>
                <div className={"Item_Content_Icon"}>
                    <FaFileAlt style={{height: "18px", width: "18px"}}/>
                </div>
                {formatListEntryName(props.name)}
            </div>
        </div>
    )
}
