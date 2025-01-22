import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be greater than 6')
        }
        else {
            setError('')
            console.log(name, " ", email, " ", password)
        }
        
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
              <input
                  onChange={handleNameChange}
                  type="text" name="name" />
        <br />
              <input
                  onChange={handleEmailChange}
                  type="email" name="email" />
        <br />
              <input
                  onChange={handlePasswordChange}
                  type="password" name="password" />
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
