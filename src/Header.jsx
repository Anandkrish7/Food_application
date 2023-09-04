import './Header.css'
function Header(){
    return (
        <>
        <header>
            <p id="logo">Hot meals</p>
            <p id="address">
                 <strong>Deliver to: </strong>
                    <span>
                        <i id='ic' className="fa-solid fa-location-dot" />
                     </span> Current Location <strong>Ashok Nagar, Chennai-600013 </strong>
            </p>
            <p>
                 <span>
                    <i id='ic' className="fa-solid fa-magnifying-glass" ></i><strong> Search Food</strong>
                </span>
            </p>
            <button>
                <span><i id='ic' className="fa-solid fa-user" ></i></span>Login
            </button> 
            </header>    
        </>
    )
}

export default Header;