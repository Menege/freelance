import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      activeTasks: 0,
      nameTask: "",
      dateTask: "",
      discTask: "",
      idTask:'',
      isStatus:'',
      arrayTasks: []
    };
  },
  getters: {
    activeTask (state) {
      return state.arrayTasks.filter(task => task.isStatus==='active').length
    },
    // nameTask (state) {
    //   return state.nameTask
    // },
    // dateTask (state) {
    //   return state.dateTask
    // },
    // discTask (state) {
    //   return state.discTask
    // },
    arrayTasks (state) {
      return state.arrayTasks
    }

  },
  mutations: {
    addTask(state) {
      state.arrayTasks.push({
        nameTask:state.nameTask,
        dateTask:state.dateTask,
        discTask:state.discTask,
        isStatus:'active',
        idTask:state.arrayTasks.length+1
      })
      state.nameTask=state.discTask=state.idTask=''
    },
    updateNameTask (state, name) {
      state.nameTask = name
    },
    updateDateTask (state, name) {
      state.dateTask = name
    },
    updateDiscTask (state, name) {
      state.discTask = name
    }
  },
});
