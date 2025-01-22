import { useState } from "react"

const useInputState_array = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = e => {
        setValue(e.target.value);
    }

    return [value, handleChange];
}

export default useInputState_array;