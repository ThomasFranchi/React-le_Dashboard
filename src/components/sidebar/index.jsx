import './sidebar.css';
import imge from "../../img/nicestartup.png";

export default function Sidebar() {
return ( 
    <div className='sidebar'>
            <p>Hackahton<span>(S)</span><br/>Manager</p>
            <p> <span id="par">par</span>  <img src={imge}/> </p>
       <div className='barRouge'></div>
       <div className='buttonContainer'>
        <div className='SideBarMenuElement'> <div class="menuElementContainer"><div className="logoPeople"></div>   Evènements</div> </div>
        <div className='SideBarMenuElement'> <div class="menuElementContainer"><div className="logoStaff "></div>   Staff</div> </div>
       </div>
    </div>
)
}
