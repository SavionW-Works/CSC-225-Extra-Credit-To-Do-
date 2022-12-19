import { useState } from "react";

const SwapTodo = (props) => {

    const [inputValue1, setInputValue1] = useState(0);
    const [inputValue2, setInputValue2] = useState(0);

    const formSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        props.swapper(inputValue1, inputValue2);
        setInputValue1(0); 
        setInputValue2(0);
    }

    const updateInputValue1 = (e) => {
        setInputValue1(e.target.value);
    } 

    const updateInputValue2 = (e) => {
        setInputValue2(e.target.value);
    }


    return <form onSubmit={formSubmit}>

        <label htmlFor="todo" class="fs-4 me-2">Swap item ID#:  </label>
        <input class="mx-3"
            type="text" 
            id="todo" 
            onChange={updateInputValue1} 
            value={inputValue1}
            />
        


        
        <label htmlFor="todo" class="fs-4 me-2">With item ID#:</label>
        <input class="mx-3"
            type="text" 
            id="todo" 
            onChange={updateInputValue2} 
            value={inputValue2}
            />
        
        <input type="submit" class="bg-primary fs-3 text-white" value="Swap"/> {/*Implicitly runs onSubmit on click */}

    </form>;
}

export default SwapTodo;