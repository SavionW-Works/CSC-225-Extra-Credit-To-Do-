

const TodoList = (props) => {
    //todoList

   
      

    if(props.todoList.length === 0) {
        return <p>Awaiting the first item...</p>
    } 

    
    const removeItem = (title) => {
        console.log(title + "has been removed");
        props.remover(title); //Only removes last item for some reason. Works as intended in RemoveTodo
        
    } 

    const moveItem = (e) => {
        console.log(e + "has been moved");
        props.target(props.title);
    } 
    
    var num = -1;

    return props.todoList.map(item => {
        
         
        num++
        
        console.log(item);
        return <> 

            <div className="container">
                <div className="row justify-content-center text-center">
                    
                    <div class="d-flex col"> 

                        <p class="list-group-item pe-5 me-4 fs-3" key={num}> #{num} </p> 
                        <p class="list-group-item pe-5 me-4 fs-3">{item.title} </p> 

                        {/* <button class="btn-lg btn-danger py-2 px-3 h-25 mx-1 fs-3" type="submit" onClick={removeItem}>X</button>  
                        <button class="btn-lg btn-primary p-2 h-100 mx-1" type="submit" onClick={moveItem}><i class="bi bi-arrow-up fs-3"></i></button> 
                        <button class="btn-lg btn-primary p-2 h-25 mx-1" type="submit" onClick={moveItem}><i class="bi bi-arrow-down fs-3"></i></button> */}
                    </div>
                </div>
            </div>
           
                           

        </> 
     
     
    }); 

    
}

export default TodoList;