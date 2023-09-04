import './Dishcontainer.css'
function Dishcontainer()
{
    return (
        <>
            <div className="dish-container">
                <div className="image-box">
                     <img id="vada" src="./images/vadai=.png" alt="" />
                     <p id="dish">Vada</p>
                     <button id="speed">30 mins Delivery</button>
                </div>
                <div className="image-box1">
                     <img id="idly" src="./images/idly.png" alt="" />
                     <p id="dish">Idly</p>
                     <button id="speed1">30 mins Delivery</button>
                </div>
                <div className="image-box2">
                     <img id="parotta" src="./images/parotta.png" alt="" />
                     <p id="dish">Parotta</p>
                     <button id="speed2">30 mins Delivery</button>
               </div>
               <div className="image-box3">
                     <img id="kichadi" src="./images/kichadi.png" alt="" />
                     <p id="dish">Kichadi</p>
                     <button id="speed3">30 mins Delivery</button>
               </div>
            </div>
        
    
        
        </>

)
}

export default Dishcontainer;