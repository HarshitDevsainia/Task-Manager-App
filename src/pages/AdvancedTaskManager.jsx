import React from "react";
import { TaskProvider } from "../context/TaskContext";
import useLocalStorage from "../hooks/useLocalStorage";
import Header from "../components/Header";
import MainArea from "../components/MainArea";
import { ToastContainer } from "react-toastify";

export default function AdvancedTaskManager() {
  return (
    <TaskProvider>
      <ThemedApp />
    </TaskProvider>
  );
}

function ThemedApp() {
  const [theme, setTheme] = useLocalStorage("theme_v1", "light");

  React.useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="h-[100vh] overflow-hidden bg-gray-50 dark:bg-[#37353E] p-4 text-gray-900 dark:text-gray-100 py-5">
      <div className="w-full max-w-3xl sm:px-4 mx-auto flex flex-col item-center gap-4">
        <Header theme={theme} setTheme={setTheme} />
        <MainArea />
      </div>
      <ToastContainer
        position="top-center"
      />
    </div>
  );
}
