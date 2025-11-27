import React from "react";

export default function FilterBar({ filter, setFilter, counts }) {
  return (
    <div className="flex flex-wrap item-center gap-2">
      {["All", "Pending", "Completed"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-full ${
            filter === f ? "bg-indigo-600 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {f} (
          {f === "All"
            ? counts.total
            : f === "Pending"
            ? counts.pending
            : counts.completed}
          )
        </button>
      ))}
    </div>
  );
}
