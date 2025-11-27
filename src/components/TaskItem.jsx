import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import Icon from "./Icon";

export default function TaskItem({ task, index, onToggle, onDelete }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-3 flex justify-between items-center rounded-xl 
            bg-white dark:bg-[#44444E]
            transition-all duration-300 ease-out
            ${snapshot.isDragging ? "scale-105 shadow-xl" : "scale-100 shadow"}
          `}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggle(task.id)}
              className={`w-8 h-8 text-center rounded-full border transition-all duration-300
                ${
                  task.completed
                    ? "bg-green-500 text-white border-green-500"
                    : "border-gray-300"
                }`}
            >
              {task.completed ? "✓" : ""}
            </button>

            <div className="flex-1">
              <div
                className={`transition-all duration-300 ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </div>
              <div className="text-xs text-gray-400">
                {new Date(task.createdAt).toLocaleString()}
              </div>
            </div>
          </div>

          <button
            onClick={() => onDelete(task.id)}
            className="transition-transform duration-300 hover:scale-110"
          >
            <Icon name="trash" className="w-5 h-5" />
          </button>
        </li>
      )}
    </Draggable>
  );
}
