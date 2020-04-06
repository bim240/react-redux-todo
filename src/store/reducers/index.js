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

    default:
      return state;
  }
}
