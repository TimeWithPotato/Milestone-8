const User = ({ user }) => {
    const { id, name, email, phone } = user;

    const userStyle = {
        border: "1px solid purple",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px"
    }
    return (
        <div style={userStyle}>
            <h1><span>#{id}</span> {name}</h1>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};

export default User;