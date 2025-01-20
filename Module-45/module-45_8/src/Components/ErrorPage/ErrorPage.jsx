import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()

    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/')
    }
    // console.log(error)
    return (
        <div>
            <h2>Oops...!!!</h2>
            <p style={{ color: "yellow" }}>{error.error.message || error.statusText}</p>
            {
                error.status === 404 && <p style={{color:"yellow"}}>Page Not Found</p>
            }

            <button onClick={handleGoHome} style={{color:"red"}}>Go Home</button>
        </div>
    );
};

export default ErrorPage;