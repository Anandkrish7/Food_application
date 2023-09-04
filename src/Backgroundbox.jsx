import './Backgroundbox.css'
function Backgroundbox()
{
    return (
        <>
        
        <div className="background-box">
               <p id="firstline">Look at your fav Meals</p>
               <p id="secondline">Within a few clicks, find meals that are accessible near you</p>
                   <br />
                     <br />
        <div>
        <div className="outer-container">
          <div className="inner-container">
            <button id="btn1">
              <span><i className="fa-solid fa-motorcycle"style={{color: '#F17228'}} ></i></span>Deliver</button>
            <button id="btn2">
              <span>
                <i className="fa-solid fa-bag-shopping"style={{color: '#757575'}}></i></span>Pickup</button>
          </div>
        </div>

        <div className="outer-container2">
          <div className="box">
            <i className="fa-solid fa-location-dot" style={{color: '#F17228'}}></i>

            <input type="text" name="" placeholder="Enter your Address" />
          </div>
          <button id="btn3">
            <span>
              <i className="fa-solid fa-magnifying-glass" style={{color: '#ffffff'}}></i>
            </span>
            <div style={{display: 'flex' ,flexDirection: 'row', width:  ' max-content'}}>Find Food</div>
          </button>

          <div className="hero-image">
            <img src= '/images/hero pic.png' alt="heropic" />
          </div>
        </div>
      </div>
    </div>
        
        
        </>

)
}

export default Backgroundbox;