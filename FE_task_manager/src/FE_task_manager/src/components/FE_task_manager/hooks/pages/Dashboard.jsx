return (
  <div>
    <h1>Dashboard</h1>
    {tasks.length === 0 ? (
      <div>
        <p>No tasks match your filters</p>
        <button onClick={() => setTasks([{ id: 1, title: "Test Task", description: "Placeholder" }])}>
          Clear filters
        </button>
      </div>
    ) : (
      <TaskTable tasks={tasks} isLoading={loading} />
    )}
  </div>
);
