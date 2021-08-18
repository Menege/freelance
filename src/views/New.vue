<template>
  <form class="card" @submit.prevent="addTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input
        placeholder="Введите название задачи"
        type="text"
        v-model="nameTask"
        required
        id="title"
      />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input
        type="date"
        min="2021-08-17"
        required
        v-model="dateTask"
        id="date"
      />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea
        id="description"
        placeholder="Введите описание задачи"
        required
        v-model="discTask"
      ></textarea>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["addTask"]),
  },
  computed: {
    // ...mapState(['nameTask','discTask','dateTask'])
    nameTask: {
      get() {
        return this.$store.state.nameTask;
      },
      set(value) {
        this.$store.commit("updateNameTask", value);
      },
    },
    discTask: {
      get() {
        return this.$store.state.discTask;
      },
      set(value) {
        this.$store.commit("updateDiscTask", value);
      },
    },
    dateTask: {
      get() {
        return this.$store.state.dateTask;
      },
      set(value) {
        this.$store.commit("updateDateTask", value);
      },
    },
  },
};
</script>