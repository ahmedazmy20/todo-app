<script setup>
import Task from "./components/Task.vue";
import Filter from "./components/Filter.vue";
import ModelWindowAddTask from "./components/model/ModelWindowAddTask.vue";
import modelAddTask from "./components/model/modelAddTask.vue";
import { useTasksStore } from "./stors/tasksStore.js";

const Title = "Tasks Manager";
//get data & methods from store
const store = useTasksStore();

store.$subscribe((mutation, state) => {
  localStorage.setItem("task", JSON.stringify(state.tasks));
});
</script>

<template>
  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>
          {{ Title }}
        </h1>
      </div>
      <div class="header-side">
        <button @click="store.openModel" class="btn secondary addTask">
          + Add Task
        </button>
      </div>
    </div>
    <!-- Filter Component -->
    <Filter />

    <div class="tasks">
      <!-- Task Component -->
      <Task
        v-for="(task, index) in store.filteredTasks"
        :task="task"
        :key="index"
      />
    </div>
    <!-- ModelWindowAddTask -->
    <ModelWindowAddTask v-if="store.modelActive">
      <modelAddTask />
    </ModelWindowAddTask>
  </main>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }
}

.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.addTask {
  // background-color: red;
  text-align: center;
}
</style>
