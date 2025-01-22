import useInputState_obj from "../../Hooks/useInputState_obj";

const HookForm_obj = () => {

    const nameState = useInputState_obj('akijj biirii')
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameState.value)
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input {...nameState} type="text" name="name" />
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

export default HookForm_obj;