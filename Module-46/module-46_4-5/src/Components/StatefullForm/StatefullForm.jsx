import { useState } from "react";

const StatefullForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = e => {
        // console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        // console.log(e.target.value)
        setPassword(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        
        if (password.length < 6) {
            setError('Password length should be greater than 6')
        }
        else {
            setError('');
            console.log('name: ', name," ","email: ",email," ","password: ",password )
        }

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" />
        <br />
              <input type="submit" value="submit" />
              {
                  error && <p>{error}</p>
              }
      </form>
      
    </div>
  );
};

export default StatefullForm;
