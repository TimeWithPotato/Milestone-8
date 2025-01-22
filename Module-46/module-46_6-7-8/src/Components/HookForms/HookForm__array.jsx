import useInputState__array from "../../Hooks/useInputState__array";

const HookForm__array = () => {

    const [name, setName] = useInputState__array();
    const handleNameChange = e => {
        setName(e)
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log("name: ", name);
    }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" onChange={handleNameChange} />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <br />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};

export default HookForm__array;
