import { useState } from 'react'
import './App.css'

function App() {

    let time = new Date();
    const [ctime, setTime] = useState(time);

    const updateTime = () => {
        time = new Date();
        setTime(time);
    }
    setInterval(updateTime, 1000);

    return (
        <>
            <div class="card">
                <p>The current time is:</p>
                <h1>{ctime.getHours()}:{ctime.getMinutes()}:{String(ctime.getSeconds()).padStart(2, '0')}</h1>
            </div>
        </>
    );

}

export default App;
