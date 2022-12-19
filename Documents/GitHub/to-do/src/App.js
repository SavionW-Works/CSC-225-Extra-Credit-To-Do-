import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';  
import SwapTodo from './components/SwapTodo';
import RemoveTodo from './components/RemoveTodo'; 
import { useState, useEffect } from 'react';
import lscache from 'lscache';

function App() {

  // Vars and UseStates
  const [todoList, setTodoList] = useState([ {
    text: "",
  }]);

  const lscacheKey = 'currentList';



  // Cache Updater
  useEffect(() => {
    let currentList = lscache.get(lscacheKey);
    if(!currentList){
      currentList = [];
    }
    setTodoList(currentList);
  }, []);



  // Add Item Function
  const addNewTodo = title => {
    if(!title){
      return;
    }
    const todoListClone = [...todoList];
    todoListClone.push({title: title}); //Why each list item has a title
    setTodoList(todoListClone);
    lscache.set(lscacheKey, todoListClone);
  } 


  // Remove Item Function
  const removeNewTodo = title => {
    
    if(!title){
      return;
    }
    const todoListClone = [...todoList];
    
    var id; 

    //Looks for item of a specific title
    for (var i = 0; i < todoListClone.length; i++) {
        if(todoListClone[i].title === title) {
          id = i; 
          break;
        }
    }
    
    //Removes list item
    todoListClone.splice(id, 1);
    
    setTodoList(todoListClone);
    lscache.set(lscacheKey, todoListClone);
  }   


  const swapTodoItems = (num1, num2) => {
   
    const todoListClone = [...todoList];
    
    var hold; 

    //Looks for item of a specific title
    
    hold = todoListClone[num1];
    todoListClone[num1] = todoListClone[num2]; 
    todoListClone[num2] = hold;
    
    setTodoList(todoListClone);
    lscache.set(lscacheKey, todoListClone);
  } 


  

  


  return (
    <div className="App">

      <div class="container text-center p-4"> 
      <h1 class="bg-success text-light p-3 display-3"> List Maker!</h1> 
      
      <div class="row justify-content-center">
        <div class="text-start">   
        <div className="container text-center">
                <div className="row justify-content-center">
                    
                    <div className="d-flex col"> 

                        <p class="list-group-item pe-5 me-4 fs-3"> ID </p> 
                        <p class="list-group-item pe-5 me-4 w-25 fs-3">Name </p> 

                    </div>
                </div>
            </div>

            <TodoList todoList={todoList}/>
        </div>
      </div>
        
      </div>
      
      <div class="container text-center p-4 border border-dark border-4 rounded"> 
      <h2> List Controls </h2>
        <AddTodo  adder={addNewTodo} /> 
        <RemoveTodo  remover={removeNewTodo} />  
        <SwapTodo swapper={swapTodoItems}></SwapTodo>
      </div>
      
      
      
    </div>
  );
}

export default App;