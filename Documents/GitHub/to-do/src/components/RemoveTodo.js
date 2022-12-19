import { useState } from "react";

const RemoveTodo = (props) => {

    const [inputValue, setInputValue] = useState('');

    const formSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        props.remover(inputValue); //VITAL
        setInputValue('');
    }

    const updateInputValue = (e) => {
        setInputValue(e.target.value);
    }


    return <form onSubmit={formSubmit} class="p-3">

        <label htmlFor="todo" class="fs-4 me-2">Remove item (by Name):</label>
        <input 
            type="text" 
            id="todo" 
            onChange={updateInputValue} 
            value={inputValue}
            />
        <input type="submit" class="bg-danger fs-3 text-white" value="Remove"/>

    </form>;
}

export default RemoveTodo;