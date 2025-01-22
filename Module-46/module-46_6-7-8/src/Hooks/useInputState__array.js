import { useState } from "react"

const useInputState__array = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    const handleToSetValue = e => {
        setValue(e.target.value);
    }

    return [value, handleToSetValue]
}

export default useInputState__array;