import React, { useState } from "react";

export default function AddTaskModal({ onSave }) {
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState("");

  const handleSave = async () => {
    setSaving(true);
    await onSave({ title });
    setSaving(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSave} disabled={saving}>
        {saving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
