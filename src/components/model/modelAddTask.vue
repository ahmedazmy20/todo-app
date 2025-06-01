<script setup>
import { useTasksStore } from "../../stors/tasksStore.js";
const store = useTasksStore();
let newTask = { completed: false };
</script>
<template>
  <div class="form">
    <div class="add-task">
      <h3>Add a new task</h3>
      <label class="lable" for="title">Title*</label>
      <input
        type="text"
        v-model="newTask.name"
        name="title"
        placeholder="Enter a title..."
      /><br />
      <label class="lable" for="description">Description *</label>
      <textarea
        v-model="newTask.description"
        name="description"
        rows="4"
        placeholder="Enter a description..."
      /><br />
      <button @click="store.addTask(newTask)" class="btn gray">Add Task</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
