import React from 'react'
import {render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import TodoList from './TodoList'



//testing the input 
test("input 1 ", ()=>{
    const Compound = render(<TodoList />)
    const headerid = Compound.getByTestId("input_1")

    expect(headerid.value).toBe("")
})

//testing the input when we change a value
test("input fireevent", ()=>{
    const Compound = render(<TodoList/>)
    const headerid = Compound.getByTestId("input_1")

    fireEvent.change(headerid, {
        target: {
            value: "Bright"
        }
    })

    expect(headerid.value).toBe("Bright")
})

//testing the addtodo btn rendering method
//add button tesing
test("addTodo button", ()=>{
    const Compound = render(<TodoList/>)
    const headerid = Compound.getByTestId("addtodo_btn")

    expect(headerid.textContent).toBe("Add Todo")
})

//testing using fireEvent
test("add btn", ()=>{
    const Compound = render(<TodoList/>)
    const headerid = Compound.getByTestId("addtodo_btn")
    const counter1 = Compound.getByTestId("input_1")
   

    expect(counter1.textContent).toBe("")
   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("")
})

//testing for the delete btn
test("delete button", ()=>{
    const Compound = render(<TodoList/>)
    const headerid = Compound.getByTestId("delete_btn")

    expect(headerid.textContent).toBe("Delete")
})


//testing for the edit btn
test("edit button", ()=>{
    const Compound = render(<TodoList/>)
    const headerid = Compound.getByTestId("edit_btn")

    expect(headerid.textContent).toBe("Edit Todolist")
})









