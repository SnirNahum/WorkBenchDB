import { NavLink } from "react-router-dom"

function AppHeader() {
    return <div className="app-header">
        <ul className="flex row clean-list">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/products"><li>Products</li></NavLink>
            <NavLink to="integration"><li>Integration</li></NavLink>
            <NavLink to="/Profile"><li>Profile</li></NavLink>
        </ul>
    </div>
}

export default AppHeader