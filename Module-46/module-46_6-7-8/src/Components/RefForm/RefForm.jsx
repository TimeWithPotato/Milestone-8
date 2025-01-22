import { useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleSubmit = e => {
        e.preventDefault();

        console.log("name: ", nameRef.current.value, " ", "email: ",emailRef.current.value, " ", "password: ", passwordRef.current.value);
    }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input ref={nameRef} type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email: </label>
        <input ref={emailRef} type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input ref={passwordRef} type="password" name="password" id="password" />
        <br />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};

export default RefForm;
