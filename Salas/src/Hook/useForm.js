import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [inputValues, setInputValues] = useState(initialState);

    const resetarForm = () => {
        setInputValues(initialState);
    }

    const mudancadeEntrada = ({target}) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value
        });
    }

    const setForm = (newValues) => {
        setInputValues(newValues);
    }

    return {
        inputValues,
        mudancadeEntrada,
        resetarForm,
        setForm,
    }
}
