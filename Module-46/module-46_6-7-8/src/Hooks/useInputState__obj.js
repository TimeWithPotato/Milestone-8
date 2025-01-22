import { useState } from "react"

const useInputState__obj = (defaultValue = '') => {
    const [name, setName] = useState(defaultValue);
    const [email, setEmail] = useState(defaultValue);
    const [password, setPassword] = useState(defaultValue);

    const handleSetName = e => {
        setName(e.target.value);
    }
    const handleSetEmail = e => {
        setEmail(e.target.value);
    }
    const handleSetPassword = e => {
        setPassword(e.target.value);
    }

    return {
        name,
        email,
        password,
        handleSetName,
        handleSetEmail,
        handleSetPassword
    }
}

export default useInputState__obj;