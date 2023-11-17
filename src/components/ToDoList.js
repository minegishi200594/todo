import React, { useState, useEffect, useContext } from "react";
import * as Api from "../service/api"; //api.jsでexportしているものを全てimport
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProvider";

const TodoList = (props) =>{
const deleteHandle = async(id) => {
    await Api.todoDelete(id);
    props.fetch();
}
// propsをもとにliタグを作る
const TodoList = props.todos.map((todo) => {
    return (
        <li key={todo.id}>{todo.content}<button type="button" onClick={() => deleteHandle(todo.id)}>削除</button></li>
    )
})
    return(
        <div>
            <h2>あなたのToDo</h2>
            <ul>{TodoList}</ul>
        </div>
    )
}
export default TodoList;