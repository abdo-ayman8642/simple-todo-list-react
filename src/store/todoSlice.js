import { createSlice } from "@reduxjs/toolkit";

if (!localStorage.getItem("todoData")) {
  localStorage.setItem("todoData", JSON.stringify([]));
}
const todos = JSON.parse(localStorage.getItem("todoData"));

const initialTodo = {
  items: todos,
  showMessage: false,
  adjustingStatus: false,
};

const TodoSlice = createSlice({
  name: "Todo",
  initialState: initialTodo,
  reducers: {
    reset(state) {
      state.showMessage = false;
    },
    saveData(state) {
      state.showMessage = true;
      localStorage.setItem("todoData", JSON.stringify(state.items));
    },
    onAdjustingstatus(state, action) {
      state.adjustingStatus = action.payload;
    },
    addtodoitem(state, action) {
      state.items = [
        ...state.items,
        { text: action.payload, state: "none", id: Date.now() },
      ];
    },
    deleteItem(state, action) {
      state.items = state.items.filter((elem) => elem.id !== action.payload);
    },
    changeStatus(state, action) {
      const { id, status } = action.payload;
      const tempData = [...state.items];
      const changedStatusIndex = tempData.findIndex((elem) => elem.id === id);
      state.items[changedStatusIndex].state = status;
    },
  },
});

export const todoActions = TodoSlice.actions;
export default TodoSlice.reducer;
