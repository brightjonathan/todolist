import React, {useState, useEffect} from 'react'
//importing our useState from raect 

const TodoList = () => {
    //
    const [Todos, setTodos] = useState([]);

    //using this state for our input value 
    const [Todo, setTodo] = useState("")


    //  ***** this particular function is in the form ***** //
    
    //creating a  function to prevent default
    const handler = (e) =>{
        e.preventDefault()

        //creating an object for the todo
        const newTodo = {
            id: new Date().getTime(),
            text:Todo,
            completed: false
        }

         //I am merging the empty array into the new array by {concat}
        setTodos([...Todos].concat(newTodo))
        
        //this function help in making the input empty after rendring
        setTodo("")

    }
    
    //this function is for the delete button
    const deleteTodo = (id)=>{
        const updatedTodo = [...Todos].filter((e)=> e.id !== id)
        setTodos(updatedTodo)
    }

    //fuction for the checkBox
    //am saying whenever we click, it should either be true or false
    const checkbox = (id) =>{
        const check = [...Todos].map((e)=>{
            if(e.id === id){
               e.completed = !e.completed
            }
            return e
        })

        setTodos(check)
    }

    // ***** creating a state varible for editing ******//
    
    // 
    const [TodoEditing, setTodoediting] = useState(null)
    const [EditingText, setEditingText] = useState("")

// **** function for the submit button **** //

//function for submit
const editSubmit = (id) =>{
   const edit = [...Todos].map((e)=>{
       if(e.id === id){
           e.text = EditingText
       }
       return e
   })
   setTodos(edit)
   setTodoediting(null)
   setEditingText("")
}

// **** retriving the data from the localStorage **** //
useEffect(() => {
    const retrive = localStorage.getItem("Todos")
    const loading = JSON.parse(retrive)

    if(loading){
        setTodos(loading)
    }
 }, [])
     

// *** thist is how to set a storage local storage **** //
  useEffect(() => {
     const storage =  JSON.stringify(Todos)
     localStorage.setItem("Todos", storage)
  }, [Todos])


    return (
        <div>
            <form onSubmit={handler}>

                <input type="text" data-testid="input_1" onChange={(e)=> setTodo(e.target.value)} value={Todo}/>

                <button type="submit" data-testid="addtodo_btn" >Add Todo</button>
            </form>
            {Todos.map((e)=><div key={e.id}>
               
               {TodoEditing === e.id ? 
               (<input type="text" onChange={(e)=> setEditingText(e.target.value)} value={EditingText} data-testid="hhhhhh"/>) : 
               ( <h3>{e.text}</h3>) }
               <button onClick={()=>deleteTodo(e.id)} data-testid="delete_btn">Delete</button>
               <input type="checkbox" onChange={()=>checkbox(e.id)} checked={e.completed}/>
               {TodoEditing === e.id ? (<button onClick={()=> editSubmit(e.id)} >submit Edit</button>) : (<button onClick={()=>setTodoediting(e.id)} data-testid="edit_btn">Edit Todolist</button>)}
                </div>
                )}
        </div>
    )
}

export default TodoList
