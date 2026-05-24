import React, { useState, useEffect } from "react";
import TaskTable from "../TaskTable";
import useLoading from "../hooks/useLoading";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const { loading, start, stop } = useLoading();

  useEffect(() => {
    start();
    // Simulate fetch
    setTimeout(() => {
      setTasks([{ id: 1, title: "Test Task", description: "Placeholder" }]);
      stop();
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskTable tasks={tasks} isLoading={loading} />
    </div>
  );
}
