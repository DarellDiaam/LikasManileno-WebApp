import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import  "./sites.scss";

function Sites() {
  return (
    <div className="sites">
    <Sidebar/>
        <div className="sitesContainer">
            <Navbar/>
            Sites
        </div>
    </div>
  )
}

export default Sites