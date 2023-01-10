import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';


function App() {

  const [email, setEmail] = useState("")
  const [confirmation, setConfirmation] = useState("")

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }


  function handleOnClick() {
    let email_token = (Math.random() + 1).toString(36).substring(7);

    var templateParams = {
      token: email_token,
      to_email: email
    }

    emailjs.send('service_f1925sm', 'template_3uap8j1', templateParams, 'xu7YGoImlKi7F3SkT')
      .then(function () {
          console.log('SUCCESS!');
      }, function (error) {
          console.log('FAILED...', error);
      });

    setEmail("")
    setConfirmation("Token sent to " + email)
    createToken(templateParams)
  }

  const createToken = async (tempelate) => {
    const createDetail = {
      email: tempelate.to_email,
      token: tempelate.token
    }
    fetch(`http://192.168.0.159:3000/api/user/mailtoken`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(createDetail)
    })
      .then(res => res.json())
      .then(response => {
          if (response.message) {
              console.log(response.message);
          }
      });

    console.log("create details: ", createDetail)
    
  }

  return (
    <div className="App">
      <p>Enter your email here</p>
      <input value={email} type="text" className='email-input' placeholder='enter your email here...' onChange={handleOnChange}></input>
      <div>
        <button onClick={handleOnClick}>Send token</button>
      </div>
      <p>{confirmation}</p>
      
    </div>
  );
}

export default App;
