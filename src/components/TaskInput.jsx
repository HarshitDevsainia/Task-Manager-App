import React, { useState } from "react";
import Icon from "./Icon";
import { toast } from "react-toastify";

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
        toast.error("Task cannot be empty");
        return;
    }
    onAdd(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        className="flex-1 p-3 rounded-lg border dark:bg-[#44444E]"
        placeholder="Add a task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg">
        <Icon name="plus" className="w-6 h-6" />
      </button>
    </form>
  );
}
