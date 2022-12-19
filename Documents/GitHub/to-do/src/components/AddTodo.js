import { useState } from "react";

const AddTodo = (props) => {

    const [inputValue, setInputValue] = useState('');

    const formSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        props.adder(inputValue);
        setInputValue('');
    }

    const updateInputValue = (e) => {
        setInputValue(e.target.value);
    }


    return <form onSubmit={formSubmit} class="p-3">

        <label htmlFor="todo" class="fs-4 me-2">Enter item:</label>
        <input 
            type="text" 
            id="todo" 
            onChange={updateInputValue} 
            value={inputValue}
            />
        <input type="submit" class="bg-success fs-3 text-white" value="Add"/>

    </form>;
}

export default AddTodo;