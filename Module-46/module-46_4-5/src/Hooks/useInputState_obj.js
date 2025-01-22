import { useState } from "react"

const useInputState_obj = (defaultValue = " ") => {
    const [value, setValue] = useState(defaultValue);

    const onChange = data => {
        setValue(data.target.value);
    }

    return {
        value,
        onChange
    }
}

export default useInputState_obj;