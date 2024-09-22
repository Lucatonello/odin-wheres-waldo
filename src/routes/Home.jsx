import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import map1 from '../Images/map1.jpg';
import waldo from '../Images/waldo.jpg'; 
import wenda from '../Images/wenda.jfif'; 
import wizard from '../Images/wizard.jfif'; 
import odlaw from '../Images/odlaw.jpg';
import '../Home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="maps-container">
            <h1>Welcome</h1>
            <Link to="/high-scores" className="high-scores-button">High Scores</Link>
            <hr />
            <h2>Maps</h2>
            <div className="map-cards" onClick={() => navigate('/')}>
                <div className="map-card">
                    <h3 className="map-title">Sky Slopes</h3>   
                    <img src={map1} alt="map1" className="map-image" />
                    <div className="characters">
                        <img src={waldo} alt="waldo" className="character-icon" />
                        <img src={wenda} alt="wenda" className="character-icon" />
                        <img src={wizard} alt="wizard" className="character-icon" />
                        <img src={odlaw} alt="odlaw" className="character-icon" />
                    </div>
                    <Link to="/" className="play-button">Play now</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;