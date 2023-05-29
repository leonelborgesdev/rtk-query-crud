import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../api/apiSlice";

function TasksList() {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task.id)}>delete</button>
          <input
            type="checkbox"
            id={task.id}
            checked={task.completed}
            onChange={(e) => {
              updateTask({
                ...task,
                completed: e.target.checked,
              });
              console.log(task.completed);
            }}
          />
          <label htmlFor={task.id}>Completed</label>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
