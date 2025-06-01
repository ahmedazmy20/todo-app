<script setup>
const props = defineProps(["task"]);
import { useTasksStore } from "@/stors/tasksStore.js";
const store = useTasksStore();
</script>
<template>
  <div>
    <div class="task">
      <div class="task-header">
        <h3>{{ task.name }}</h3>
        <button @click="store.deleteTask(task.id)">delete task</button>
      </div>
      <p>
        {{ task.description }}
      </p>
      <div class="task-check">
        <input
          @click="store.toggeleComplated(task.id)"
          type="checkbox"
          :checked="task.completed"
        />
        {{ task.completed ? "Done" : "To-Do" }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1); /* خلفية شفافة شوية */
  backdrop-filter: blur(10px); /* تأثير الزجاج */
  -webkit-backdrop-filter: blur(10px); /* دعم Safari */
  border: 1px solid rgba(255, 255, 255, 0.2); /* حواف خفيفة */
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  color: #fff; /* عشان الخط يبان على الخلفية */

  padding: 20px;
  border-radius: 12px;
  position: relative;

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  .task-check {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    right: 10px;

    label {
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 5px;
      cursor: pointer;
    }

    input {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      border: 0.77px solid #aeaeb2;
      appearance: none;
      cursor: pointer;

      &:checked {
        background-color: #0a7aff;
        border-color: #0a7aff;

        &::before {
          content: "";
          display: block;
          width: 4.5px;
          height: 9px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      border: 1px solid #ff4d4f;
      padding: 2px 4px;
      border-radius: 8px;
      background-color: transparent;
      color: rgba(232, 227, 227, 0.808);
      cursor: pointer;
      transition: all 0.2s ease-in;
      &:hover {
        border: 1px solid red;
        background-color: #ff4d4f;
        color: white;
      }
    }
  }
}
</style>
