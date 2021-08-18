<template>
  <form class="card" @submit.prevent="$store.commit('increment')">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input placeholder="Введите название задачи" type="text" v-model="$store.state.nameTask" required id="title" />
     </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" min="2021-08-17" required v-model="$store.state.dateTask" id="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" placeholder="Введите описание задачи" required v-model="$store.state.discTask"></textarea>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>


<script>

export default {

  
}
</script>