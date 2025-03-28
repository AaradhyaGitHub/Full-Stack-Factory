import { Children } from "react";
export default function TabButton({onSelect, children, isSelected}){
    return(
        <li>
            <button className = {isSelected ? 'active' : undefined} onClick ={onSelect}>
                {children}
            </button>
        </li>
    )
}