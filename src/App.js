import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';


function App() {

  const [email, setEmail] = useState("")
  

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
  }



  // alert("A login token has successfully been sent to your email.");



  return (
    <div className="App">
      <p>Enter your email here</p>
      <input value={email} type="text" className='email-input' placeholder='enter your email here...' onChange={handleOnChange}></input>
      <div>
        <button onClick={handleOnClick}>Send token</button>
      </div>
      
    </div>
  );
}

export default App;
