import useInputState_array from "../../Hooks/useInputState_array";

const HookForm_array = () => {  

    const [name, setName] = useInputState_array('Xarifff');
    const handleSubmit = e => {
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm_array;
