import React, { useState, useMemo, useCallback } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import FilterBar from "./FilterBar";
import { useTasks } from "../context/TaskContext";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export default function MainArea() {
  const { tasks, addTask, toggleTask, deleteTask, reorder, setTasks } =
    useTasks();
  const [filter, setFilter] = useState("All");

  const counts = useMemo(
    () => ({
      total: tasks.length,
      completed: tasks.filter((t) => t.completed).length,
      pending: tasks.filter((t) => !t.completed).length,
    }),
    [tasks]
  );

  const filtered = useMemo(() => {
    if (filter === "All") return tasks;
    if (filter === "Completed") return tasks.filter((t) => t.completed);
    return tasks.filter((t) => !t.completed);
  }, [tasks, filter]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    reorder(result.source.index, result.destination.index);
  };

  const clearCompleted = () =>
    setTasks((prev) => prev.filter((t) => !t.completed));

  return (
    <div className="bg-white dark:bg-[#44444E] p-4 sm:p-5 rounded-xl shadow">
      <TaskInput onAdd={addTask} />

      <div className="flex items-center justify-between mt-4">
        <FilterBar filter={filter} setFilter={setFilter} counts={counts} />

        <button
          onClick={clearCompleted}
          className="text-sm text-nowrap bg-red-100 dark:bg-red-900 px-3 py-2 rounded-md text-red-600"
        >
          Clear Completed
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              className="
                mt-4 
                h-[450px]
                sm:h-[320px] 
                overflow-y-auto 
                pr-2 
              "
            >
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="space-y-3"
              >
                {filtered.length === 0 && (
                  <div className="text-center text-gray-400 p-4">
                    No tasks yet ✨
                  </div>
                )}

                {filtered.map((task, idx) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    index={idx}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                ))}

                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400">
        Tip: drag tasks to reorder. Data persists to Local Storage.
      </div>
    </div>
  );
}
