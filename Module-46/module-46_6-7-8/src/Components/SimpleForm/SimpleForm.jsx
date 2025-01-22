const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("name: ", e.target.name.value, " ", "email: ", e.target.email.value, " ", "password: ", e.target.password.value);
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id="name" />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' id="email" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id="password" />
                <br />
                <input type="submit" value={"submit"} />
            </form>
        </div>
    );
};

export default SimpleForm;