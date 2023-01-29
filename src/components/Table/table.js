import ButtonRemove from '../buttons/button-remove'
import ButtonEdit from '../buttons/button-edit'

import './table.css'
export default function ItemLine() {
    return (
        <div className="tableClass"> 
            <div className="listHead">  
            <div>Nom</div>  
            <div>Dates</div>  
            <div>Dates des inscriptions</div>  
            <div id="last">Actions</div>  
             </div>
            <div className="listDarkGrey">
            <div>Hackathon NSU 2022</div>  
            <div>25/11/2022 - 28/11/2022</div>  
            <div>01/10/2022 - 24/11/2022</div>  
            <div className="buttonContainer"> <ButtonEdit /><ButtonRemove /> </div> </div>
            <div className="listGrey"> 
            <div>Hackathon NSU 2023</div>  
            <div>25/01/2023 - 28/01/2023</div>  
            <div>01/12/2022 - 24/01/2022</div>  
            <div className="buttonContainer"> <ButtonEdit /><ButtonRemove /> </div>
             </div>
            
        </div>
        
    )
}