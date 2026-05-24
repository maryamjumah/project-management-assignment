import React, { useState, useEffect } from "react";

export default function TaskTable({ tasks, isLoading }) {
  if (isLoading) return <p>Loading tasks...</p>;

  if (!tasks || tasks.length === 0) return <p>No tasks available.</p>;

  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          <th className="border px-2 py-1">Title</th>
          <th className="border px-2 py-1">Description</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td className="border px-2 py-1">{task.title}</td>
            <td className="border px-2 py-1">{task.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
