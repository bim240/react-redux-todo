import { v4 as uuid } from "uuid";

let initialState = {
  allTodos: [],
  activeTab: "all",
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "add_todo":
      let newTodo = { text: action.payload, isDone: false, id: uuid() };

      return { ...state, allTodos: [...state.allTodos, newTodo] };
    case "toggle_todo":
      return {
        ...state,
        allTodos: state.allTodos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, isDone: !todo.isDone };
          }
          return todo;
        }),
      };
    case "delete_todo":
      return {
        ...state,
        allTodos: state.allTodos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}
