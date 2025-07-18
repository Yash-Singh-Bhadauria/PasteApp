import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return (
    <div className="nav">
      <NavLink to="/" className='homebtn' style={({isActive})=>({color:isActive?'purple':''})}>Home</NavLink>
      <NavLink to="/pastes" className='pastesbtn' style={({isActive})=>({color:isActive?'purple':''})}>Pastes</NavLink>
    </div>
  )
}

export default Navbar;
