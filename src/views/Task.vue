<template>
  <div class="card">
    <h2> {{}} </h2>
    <p>
      <strong>Статус</strong>:
      <AppStatus :mail-id="link" :type="'done'" />
    </p>
    <p><strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: Описание задачи</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong> {{ link }} </strong> нет.
  </h3>
</template>

<script>
import AppStatus from "../components/AppStatus";
import {mapGetters} from 'vuex'

export default {
  components: { AppStatus },
  computed: {


...mapGetters(['arrayTasks']),



    task() {
      return this.$state.arrayTasks.find((e) => e.id === this.mailId);
    },
    link() {
      return this.$route.params.idTask;
    },
  },
};
</script>

<style scoped>
</style>