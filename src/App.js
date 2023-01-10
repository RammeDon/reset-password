import { useState } from 'react';
import './App.css';

function App() {

  const [email, setEmail] = useState("")

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }


  return (
    <div className="App">
      <p>Enter your email here</p>
      <input value={email} type="text" className='email-input' placeholder='enter your email here...' onChange={handleOnChange}></input>
      <div>
        <button >Send token</button>
      </div>
      
    </div>
  );
}

export default App;
