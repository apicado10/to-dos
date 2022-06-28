export const CRREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CRREATE_TODO,
    payload: {text},
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = text =>({
    type: REMOVE_TODO,
    payload: {text},
});