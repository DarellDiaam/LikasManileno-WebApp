import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./maps.scss"

function Maps() {
  return (
    <div className="maps">
        <Sidebar/>
        <div className="mapsContainer">
        <Navbar/>
        Maps
        </div>
    </div>
  )
}

export default Maps