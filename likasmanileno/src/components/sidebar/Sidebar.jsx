import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HouseIcon from '@mui/icons-material/House';
import ChatIcon from '@mui/icons-material/Chat';
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Likas <span style={{color:"#FDF02D"}}>Manileño</span></span>
        </Link>
        </div>
        <div className="center">
            <ul>
                <p className="title">QUICK ACCESS</p>

                <Link to="/" style={{textDecoration:"none"}}>
                <li>
                <DashboardIcon className="icons" />
                <span>Dashboard</span>
                </li>
                </Link>

                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                <PersonIcon className="icons"/>
                <span>Users</span>
                </li>
                </Link>

                <p className="title">USEFUL</p>

                <Link to="/maps" style={{textDecoration:"none"}}>
                <li>
                <MapIcon className="icons"/>
                <span>Map</span>
                </li>
                </Link>

                <Link to="/sites" style={{textDecoration:"none"}}>
                <li>
                <HouseIcon className="icons"/>
                <span>Evacuation Sites</span>
                </li>
                </Link>

                <p className="title">NOTIFICATIONS</p>
                <li>
                <ChatIcon className="icons"/>
                    <span>Messeges</span>
                </li>

                <p className="title">ACCOUNT SETTINGS</p>
                <li>
                <AccountCircleIcon className="icons"/>
                    <span>Profile</span>
                </li>
                <li>
                <LogoutIcon className="icons"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>

        {/* <div className="bottom"> if want nyo pa mag add sa side bar</div> */}

    </div>
  )
}

export default Sidebar