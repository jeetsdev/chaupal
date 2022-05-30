import { NavLink } from "react-router-dom"

export const Sidemenu = ({ route, name, icon }) => {

    const activeStyle = ({ isActive }) => {
        return {
            color: isActive ? "#6e3ee4" : "#d7e1fb5",
            backgroundColor:isActive?"000000":"ffffff",
        }
    }
    return (
        <NavLink to={`${route}`} className="bg-secondary navbar-link" style={activeStyle}>
            <div className="flex items-center" >
                {icon}
                <span className="text-lg ml-4 ">{name}</span>
            </div>
        </NavLink>
    )
}
