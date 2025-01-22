import useInputState__obj from "../../Hooks/useInputState__obj";

const HookFrom__obj = () => {
    const value = useInputState__obj();
    const handleSubmit = e => {
        e.preventDefault();
        console.log("name: ", value.name, " ", "email: ",value.email, " ", "password: ", value.password);
    }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name: </label>
              {/* value is immutable, defaultValue is mutable */}
        <input value={"arif"} onChange={value.handleSetName } type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email: </label>
        <input defaultValue={"arif@gmail.com"}  onChange={value.handleSetEmail} type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input onChange={value.handleSetPassword} type="password" name="password" id="password" required />
        <br />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};

export default HookFrom__obj;
