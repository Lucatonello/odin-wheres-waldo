import '../Game.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import map1 from '../Images/map1.jpg';
import Navbar from './Navbar';

function Game() {
    const [clientX, setClientX] = useState("");
    const [clientY, setClientY] = useState("");
    const [dropdownX, setDropdownX] = useState("");
    const [dropdownY, setDropdownY] = useState("");
    const [showDD, setShowDD] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [result, setResult] = useState("");
    const [timePassed, setTimePassed] = useState(null);
    const [foundCharacters, setFoundCharacters] = useState([]);
    const [isOver, setIsOver] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const navigate = useNavigate();


    function mousePos(event) {
        const imgContainer = document.querySelector('.imgContainer');
        const bounds = imgContainer.getBoundingClientRect();

        const relativeX = ((event.clientX - bounds.left) / bounds.width) * 100;
        const relativeY = ((event.clientY - bounds.top) / bounds.height) * 100;

        setClientX(relativeX);
        setClientY(relativeY);

        setDropdownX(event.clientX);
        setDropdownY(event.clientY);

        if (
            event.clientX >= bounds.left &&
            event.clientX <= bounds.right &&
            event.clientY >= bounds.top &&
            event.clientY <= bounds.bottom
        ) {
            setShowDD(true);
        } else {
            setShowDD(false);
        }
        setResult(null);
        console.log(relativeX, relativeY);
    }

    const addTimeToDB = async (playerName, time) => {
        try {
            await fetch('http://localhost:3000/addtime', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ playerName, time }),
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleGuess = async (character) => {
        try {
            const response = await fetch(`http://localhost:3000/guess/${character}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ clientX, clientY })
            });
            const fetchResult = await response.json();

            if (fetchResult.success == true) {
                setFoundCharacters((prev) => [...prev, character]);
            }

            setShowDD(false);  
            setResult(fetchResult) 
            console.log(fetchResult)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const id = setInterval(() => {
            setTimePassed((prevTime) => prevTime + 1);
        }, 1000);
        setIntervalId(id);
        
        return () => clearInterval(id);
    }, [])

    useEffect(() => {
        if (foundCharacters.length === 4 && !isOver) { 
            setIsOver(true); 
            clearInterval(intervalId); 
            const playerName = prompt(`You found all the characters! Time: ${timePassed} seconds. What's your name?`); 
            addTimeToDB(playerName, timePassed); 
            navigate('/high-scores');
        }
    }, [foundCharacters, isOver, timePassed, intervalId, navigate]);

    const dropdownStyle = {
        position: 'absolute',
        left: dropdownX,
        top: dropdownY,
        display: 'flex',
        flexDirection: 'column'
    };

    return (
        <>
            <Navbar foundCharacters={foundCharacters}/>
            <div onClick={mousePos}>
                <h2 id='timePassed'>Time: {timePassed}</h2>

                <div className='imgContainer'>
                    <img src={map1} alt="wenda" />
                </div>
                {showDD && (
                    <div style={dropdownStyle} className='dropdownStyle'>
                        {!foundCharacters.includes('waldo') && (
                            <button onClick={() => handleGuess('waldo')}>Waldo</button>
                        )}
                        {!foundCharacters.includes('wenda') && (
                            <button onClick={() => handleGuess('wenda')}>Wenda</button>
                        )}
                        {!foundCharacters.includes('wizard') && (
                            <button onClick={() => handleGuess('wizard')}>Wizard</button>
                        )}
                        {!foundCharacters.includes('odlaw') && (
                            <button onClick={() => handleGuess('odlaw')}>Odlaw</button>
                        )}
                    
                    </div>
                )}
            </div>
        </>
    );
    
}

export default Game;