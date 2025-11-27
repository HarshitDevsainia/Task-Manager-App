import React from "react";
import Icon from "./Icon";

export default function Header({ theme, setTheme }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Fast, accessible, and delightful.</p>
      </div>

      <button
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
      >
        {theme === "dark" ? (
          <Icon name="sun" className="w-5 h-5" />
        ) : (
          <Icon name="moon" className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
