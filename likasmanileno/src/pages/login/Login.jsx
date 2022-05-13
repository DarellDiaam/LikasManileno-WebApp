import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./login.scss"

function Login() {
  return (
    <div className="login">
    <Sidebar/>
    <div className="loginContainer">
      <Navbar/>
    </div>
    </div>
  )
}

export default Login