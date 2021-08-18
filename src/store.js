import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      activeTasks: 0,
      nameTask: "",
      dateTask: "",
      discTask: "",
      isStatus:'',
      arrayTasks: []
    };
  },
  getters: {
    activeTask (state) {
      return state.arrayTasks.filter(task => task.isStatus==='active').length
    }
  },
  mutations: {
    increment(state) {
      state.arrayTasks.push({
        nameTask:state.nameTask,
        dateTask:state.dateTask,
        discTask:state.discTask,
        isStatus:'active'
      })
      state.nameTask=state.discTask=''
    }
  },
});
