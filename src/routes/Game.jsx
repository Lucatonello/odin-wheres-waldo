import '../Game.css';
import { useState } from React;

function Game() {
    const [clientX, setClientX] = useState("");
    const [clientY, setClientY] = useState("");

    function printMousePos(event) {
        let cords =
          "clientX: " + event.clientX +
          " - clientY: " + event.clientY;
          
          setClientX(event.clientX)
          console.log(cords);
      }
      document.addEventListener("click", printMousePos);
    return (
        <div>
            <div className='imgContainer'>
                <img src="https://images2.alphacoders.com/925/925901.jpg" alt="waldo" />
            </div>

            <select name='pointer' id='dropdown' style={dropdownStyle.dropdown}>
                <option value="waldo">Waldo</option>
                <option value="wizzard">Wizzard</option>
            </select>

        </div>
    )
}

const dropdownStyle = {
    dropdown: {
        position: 'absolute',
        left: ((e) => {e.clientX}),
        top: ((e) => {e.clientY}),
            
    }
}

export default Game;