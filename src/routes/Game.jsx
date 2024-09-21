import '../Game.css';
import { useState } from 'react';

function Game() {
    const [clientX, setClientX] = useState("");
    const [clientY, setClientY] = useState("");
    const [showDD, setShowDD] = useState(false);

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

    const dropdownStyle = {
        position: 'absolute',
        left: clientX,
        top: clientY,
        display: 'flex',
        flexDirection: 'column'
    };

    return (
        <div onClick={mousePos}>
            <div className='imgContainer'>
                <img src="https://images2.alphacoders.com/925/925901.jpg" alt="waldo" />
            </div>
            {showDD && (
                <div style={dropdownStyle}>
                    <button onClick={() => alert('You selected Waldo')}>Waldo</button>
                    <button onClick={() => alert('You selected Wizzard')}>Wizzard</button>
                </div>
            
            )}
        </div>
    );
    
}

export default Game;