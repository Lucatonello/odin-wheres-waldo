/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../Navbar.css';
import waldo from '../Images/waldo.jpg'; 
import wenda from '../Images/wenda.jfif'; 
import wizard from '../Images/wizard.jfif'; 
import odlaw from '../Images/odlaw.jpg'; 


function Navbar({ foundCharacters }) {
    const foundStyle = {
        opacity: '0.4',
    }
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="character">
                    <img 
                        src={waldo}
                        alt="Waldo" 
                        style={foundCharacters.includes('waldo') ? foundStyle : {}}
                        className="character-image" 
                    />
                    <p className="character-name" style={foundCharacters.includes('waldo') ? foundStyle : {}}>Waldo</p>
                </div>
                <div className="character">
                    <img 
                        src={wenda}
                        alt="wenda" 
                        style={foundCharacters.includes('wenda') ? foundStyle : {}}
                        className="character-image" 
                    />
                    <p className="character-name" style={foundCharacters.includes('wenda') ? foundStyle : {}}>Wenda</p>
                </div>
                <div className="character">
                    <img 
                        src={wizard}
                        alt="Wizard" 
                        style={foundCharacters.includes('wizard') ? foundStyle : {}}
                        className="character-image" 
                    />
                    <p className="character-name" style={foundCharacters.includes('wizard') ? foundStyle : {}}>Wizard</p>
                </div>
                <div className="character">
                    <img 
                        src={odlaw}
                        alt="Odlaw" 
                        style={foundCharacters.includes('odlaw') ? foundStyle : {}}
                        className="character-image" 
                    />
                    <p className="character-name" style={foundCharacters.includes('odlaw') ? foundStyle : {}}>Odlaw</p>
                </div>
            </div>
            <div className="navbar-right">
                <Link className="return-button" to="/">Home</Link>
                <Link className="return-button" to="/high-scores">High scores</Link>
            </div>
        </nav>
    )
}

export default Navbar;