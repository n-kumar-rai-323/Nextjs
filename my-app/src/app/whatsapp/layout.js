
import React from "react"
import SideNav from "../../components/side-nav"
import ChatUi from "../../components/chat-ui"
const layout = ({ children }) => {
    return (
        <div className=" flex flex-gap-4"> 
            <SideNav />
            {children}
        </div>
    )
}
export default layout