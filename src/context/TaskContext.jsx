import React, { createContext, useContext, useCallback, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks_v1", []);

  const addTask = useCallback((text) => {
    const newTask = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  }, [setTasks]);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, [setTasks]);

  const reorder = useCallback((startIndex, endIndex) => {
    setTasks((prev) => {
      const copy = [...prev];
      const [removed] = copy.splice(startIndex, 1);
      copy.splice(endIndex, 0, removed);
      return copy;
    });
  }, [setTasks]);

  const value = useMemo(
    () => ({ tasks, addTask, toggleTask, deleteTask, reorder, setTasks }),
    [tasks, addTask, toggleTask, deleteTask, reorder, setTasks]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must be inside TaskProvider");
  return ctx;
}
