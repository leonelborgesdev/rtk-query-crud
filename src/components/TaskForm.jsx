function TaskForm() {
  return (
    <form action="">
      <input type="text" name="name" />
      <input type="text" name="description" />
      <input type="checkbox" name="completed" />
      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;
