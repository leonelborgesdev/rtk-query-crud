import { useGetTasksQuery } from "../api/apiSlice";

function TasksList() {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button>delete</button>
          <input type="checkbox" name="" id={task.id} />
          <label htmlFor={task.id}>Completed</label>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
