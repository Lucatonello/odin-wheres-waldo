import '../Navbar.css';

function Navbar(result) {
    let imgSrc = null;

    if (result.success) {
        imgSrc = '../waldobw';
    } else {
        imgSrc = '../waldo';
    }
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="character">
                <img 
                    src='https://seeklogo.com/images/W/wheres-waldo-logo-4AFB6FAE70-seeklogo.com.png'
                    alt="Waldo" 
                    className="character-image" 
                />
                <p className="character-name">Waldo</p>
                </div>
                <div className="character">
                <img 
                    src={imgSrc} 
                    alt="Wizard" 
                    className="character-image" 
                />
                <p className="character-name">Wizard</p>
                </div>
            </div>

            <div className="navbar-right">
                <button className="return-button">Return Home</button>
            </div>
    </nav>
    )
}

export default Navbar;