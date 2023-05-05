import React, { useEffect, useRef, useState } from "react";
import "./TodoList.css";
import deleteButton from "../../assets/image-7.png";
import editButton from "../../assets/image-9.png";

export const TodoList = ({
    todo,
    deleteTodo,
    editTodo,
    editInput,
    setEditInput,
    selectedId,
    setSelectedId,
}) => {
    const editRef = useRef(null);
    useEffect(() => {
        console.log(editRef.current);
    }, [selectedId]);
    return (
        <div className="completed-todo-container">
            {todo !== null &&
                todo?.map((tod) => (
                    <div className="completed-todo-box" key={tod.id}>
                        {selectedId !== tod.id ? (
                            <div className="box">
                                <div className="todo-title">
                                    <p>{tod.task}</p>
                                </div>
                                <div className="icons-container">
                                    <div
                                        className="todo-editIcon-container"
                                        onClick={() => editTodo(tod.id)}
                                    >
                                        <img
                                            src={deleteButton}
                                            alt="edit-icon"
                                        />
                                    </div>
                                    <div
                                        className="todo-deleteIcon-container"
                                        onClick={() => deleteTodo(tod.id)}
                                    >
                                        <img
                                            src={editButton}
                                            alt="delete-icon"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            tod.id === selectedId && (
                                <div className="edit-todo-container">
                                    <div className="edit-box">
                                        <input
                                            ref={editRef}
                                            value={editInput}
                                            placeholder="Edit the todo"
                                            onChange={(e) =>
                                                setEditInput(e.target.value)
                                            }
                                        />
                                        <button style={{ marginRight: "8px" }}>
                                            SAVE
                                        </button>
                                        <button
                                            style={{ background: "#000" }}
                                            onClick={() => setSelectedId()}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                ))}
        </div>
    );
};
