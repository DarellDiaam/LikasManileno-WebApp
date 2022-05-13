import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import {useState} from "react";
import "./new.scss"

function New() {

  const[file,setFile] = useState(" ");
  return (
    <div className="new">
    <Sidebar/>
    <div className="newContainer">
      <Navbar/>
      <div className="top">
      <h1>Add New User</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={file ? URL.createObjectURL(file) : "https://img.washingtonpost.com/rf/image_480w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?uuid=1ku0nhPZEeeeTwmqddPsVw"} alt=""/>
        </div>

        <div className="right">
         <form>
         <div className="formInput">
             <label htmlFor="file">Upload Iamge:<DriveFolderUploadIcon className="icon"/></label>
             <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
           </div>
           <div className="formInput">
             <label>Username</label>
             <input type="text" placeholder="sample"/>
           </div>
           <div className="formInput">
             <label>Name nad surname</label>
             <input type="text" placeholder="sample"/>
           </div>
           <div className="formInput">
             <label>Email</label>
             <input type="email" placeholder="sample@email.com"/>
           </div>
           <div className="formInput">
             <label>Phone</label>
             <input type="text" placeholder="0999 999 999"/>
           </div>
           <div className="formInput">
             <label>Password</label>
             <input type="password"/>
           </div>
           <div className="formInput">
             <label>Address</label>
             <input type="text" placeholder="Sampaloc Manila"/>
           </div>
           <div className="formInput">
             <label>Country</label>
             <input type="text" placeholder="Philippines"/>
           </div>
           <button>Add</button>
         </form>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default New