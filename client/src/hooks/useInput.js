import { useState } from 'react';

function setValueDecorator(setValue) {
    function wrapper(func) {
        return func.bind(setValue, )
    }
}

export default function useInput(initialValue){
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
        onReset: e => setValue(""),
    }
}