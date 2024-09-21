import '../Game.css';
import { useState } from 'react';

function Game() {
    const [clientX, setClientX] = useState("");
    const [clientY, setClientY] = useState("");
    const [showDD, setShowDD] = useState(false);
    const [result, setResult] = useState("");

    function mousePos(event) {
          setClientX(event.clientX);
          setClientY(event.clientY);

          const imgContainer = document.querySelector('.imgContainer');
          const bounds = imgContainer.getBoundingClientRect();

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
        console.log(event.clientX, event.clientY);
      }

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
            setShowDD(false);  
            setResult(fetchResult) 
            console.log(fetchResult)
        } catch (err) {
            console.error(err);
        }
    };

    const dropdownStyle = {
        position: 'absolute',
        left: clientX,
        top: clientY,
        display: 'flex',
        flexDirection: 'column'
    };

    return (
        <div onClick={mousePos}>
            {result && (
                <h1>{result.message}</h1>
            )}
            <div className='imgContainer'>
                <img src="https://images2.alphacoders.com/925/925901.jpg" alt="waldo" />
            </div>
            {showDD && (
                <div style={dropdownStyle}>
                    <button onClick={() => handleGuess('waldo')}>Waldo</button>
                    <button >Wizzard</button>
                
                </div>
            
            )}
            
        </div>
    );
    
}

export default Game;