import { defineStore } from "pinia";
import { reactive, ref, computed, onMounted } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  let tasks = reactive(JSON.parse(localStorage.getItem("task")) || []);
  //state => Data
  const filterBy = ref("");
  const modelActive = ref(false);

  //getters => computed
  const filteredTasks = computed(() => {
    if (filterBy.value === "todo") {
      return tasks.filter((task) => !task.completed);
    } else if (filterBy.value === "done") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks;
    }
  });

  //actions => methods(functions)
  const addTask = (newTask) => {
    if (newTask.name && newTask.description) {
      newTask.id = tasks.length
        ? Math.max(...tasks.map((task) => task.id)) + 1
        : 1; // get the highest id and then add 1
      tasks.push(newTask);
      closeModel();
    } else {
      alert("Please enter a title and description");
    }
  };

  function toggeleComplated(id) {
    tasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
  }

  function setFilter(value) {
    filterBy.value = value;
  }

  function openModel() {
    modelActive.value = true;
  }

  function closeModel() {
    modelActive.value = false;
  }

  function deleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1); // Modify the reactive array directly
    }
    localStorage.setItem("task", JSON.stringify(tasks)); // Update local storage
  }

  return {
    tasks,
    filterBy,
    filteredTasks,
    setFilter,
    addTask,
    toggeleComplated,
    modelActive,
    openModel,
    closeModel,
    deleteTask,
  };
});
