import React, { useState } from "react";

export default function EditTaskModal({ task, onSave }) {
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState(task?.title || "");

  const handleSave = async () => {
    setSaving(true);
    await onSave({ ...task, title });
    setSaving(false);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSave} disabled={saving}>
        {saving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
