import { useGetTasksQuery } from "../api/apiSlice";

function TasksList() {
  const { data, isError, isLoading, error } = useGetTasksQuery();
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  console.log(data);
  return <div>TasksList</div>;
}

export default TasksList;
