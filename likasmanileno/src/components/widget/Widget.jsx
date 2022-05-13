import "./widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import HouseIcon from '@mui/icons-material/House';
import GroupIcon from '@mui/icons-material/Group';
import ElderlyIcon from '@mui/icons-material/Elderly';


const Widget = ({ type }) => {
    let data;
    //temporary
    const amount = 50000;
    const diff = 30;

    switch(type){
        case"newuser":
        data={
            title:"New Users",
            isUser: false,
            link:"Compared to last month",
            icon:(<PersonIcon className="icon"  style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
        };
        break;
        case"senior":
        data={
            title:"SENIOR CITIZENS",
            isUser: true,
            link:"Compared to last month",
            icon:(<ElderlyIcon className="icon" style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
        };
        break;
        case"families":
        data={
            title:"NUMBER OF FAMILIES",
            isUser: false,
            link:"Compared to last month",
            icon:(<GroupIcon className="icon"  style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
        };
        break;
        case"evacuation":
        data={
            title:"EVACUATION SITES",
            isUser: true,
            link:"Compared to last month",
            icon:(<HouseIcon className="icon" style={{color:"#FDF02D", backgroundColor:"#0047AB"}}/>),
        };
        break;

        default:
        break;
    }


  return (
    <div className="widget">
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isUser} {amount} </span>
        <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpIcon/>
                {diff}  %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget