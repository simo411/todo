import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../action/action";

const Todolist = () => {

    const [inputdata, setInputdata] = useState('');
    const list = useSelector((state) => state.todos.list);
    const dispatch = useDispatch();
    return (

        <div className="container">
                <div className="heading">
                    <h3>Write todo list here</h3>
                </div>

                <div className="todoForm">
                    <input type="text" placeholder="Add items..."
                        value={inputdata}
                        onChange={(event) => setInputdata(event.target.value)}
                    />
                    <i className="fa fa-plus" onClick={() => dispatch(addTodo(inputdata),
                        setInputdata(''))}></i>
                </div>

                <div className="allTodos">

                    {
                        list.map((elem) => {
                            return (
                                <div className="singleTodo" key={elem.id}>
                                    <div className="todoText">{elem.data}</div>
                                    <i className="far fa-trash-alt add-btn" title="Delete Item"
                                        onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                </div>
                            )

                        })
                    }
                </div>


                <div className="remove-btn" > 
                <button onClick={() => dispatch(removeTodo())}> Remove All </button>
                </div>
            </div>
    )
}

export default Todolist;