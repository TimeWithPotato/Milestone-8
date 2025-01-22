import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = e => {
        // console.log(e.target.value)
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        // console.log(e.target.value)
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        // console.log(e.target.value)
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password should be greater than six..!!')
        }
        else {
            setError('');
            console.log("name: ", name, " ", "email: ",email, " ", "password: ", password);
        }

    }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" onChange={handleNameChange} />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" onChange={handleEmailChange} />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" onChange={handlePasswordChange} />
        <br />
              <input type="submit" value={"submit"} />
              {
                  error && <p>{error}</p>
              }
      </form>
    </div>
  );
};

export default StatefullForm;
