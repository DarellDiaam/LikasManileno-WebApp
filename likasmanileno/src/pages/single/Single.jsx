import Chart from "../../components/chart/Chart"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import List from "../../components/table/Table"
import "./single.scss"

function Single() {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="indi">
              <img src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/278508806_5207949865893600_4974729196013864451_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rFzNxlRnUeMAX-_UJCm&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT8e3usqcl6e9cPtqq4Iv0n9rZYjNT_Yxe3ocI7vpKbu1g&oe=62703BE9"
               alt="" className="indiImg" />

               <div className="details">
                 <h1 className="indiTitle">Diamond Darell Calalang</h1>
                 <div className="detailIndi">
                   <span className="infoKey">Email:</span>
                   <span className="infoValue">sample@email.com</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">Address:</span>
                   <span className="infoValue">567 Algeciras Street Sampaloc Manila</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">Country:</span>
                   <span className="infoValue">Philippines</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">Contact No.:</span>
                   <span className="infoValue">0999 999 999</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={ 3 / 1} title=" Updates from the last 6 months "/>
          </div>
        </div>

        <div className="bottom">
        <h1 className="title">Family members</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single