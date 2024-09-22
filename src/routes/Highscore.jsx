import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Highscore.css';

function Highscores() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/high-scores')
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setScores(data)
          }).catch(err => console.error(err));   
    }, []);

    return (
        <div className="score-table-container">
            <h1>High scores</h1>
            <table className="score-table">
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td> 
                            <td>{score.playername}</td>
                            <td>{score.time} s</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/home">Home</Link>
        </div>
    )

}
export default Highscores;