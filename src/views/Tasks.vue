<template>
  <h1 class="text-white center" v-if="!$store.state.arrayTasks.length">
    Задач пока нет
  </h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{$store.getters.activeTask}}</h3>
    <div class="card" v-for="arr in $store.state.arrayTasks" :key="arr.length">
      <h2 class="card-title">
        {{ arr.nameTask }}
        <AppStatus :type="arr.isStatus" :arr='arr'/>
      </h2>
      <p>
        <strong>
          <small>
            {{ arr.dateTask }}
          </small>
        </strong>
      </p>
      <button class="btn primary">
        <router-link class="btn primary" to="/task">Посмотреть</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";

export default {
  components: { AppStatus },
};
</script>
