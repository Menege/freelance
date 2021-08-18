<template>
  <h1 class="text-white center" v-if="!arrayTasks.length">
    Задач пока нет
  </h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{activeTask}}</h3>
    <div class="card" v-for="arr in arrayTasks" :key="arr.idTask">
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
      <button class="btn primary" @click="inTask(arr)">          
        Посмотреть
      </button>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";
import {mapGetters} from 'vuex'

export default {
  methods:{
inTask(arr){
return this.$router.push('/task/'+arr.idTask)
}
  },
  computed:{
...mapGetters(['activeTask','arrayTasks'])
  },
  components: { AppStatus }
};
</script>
