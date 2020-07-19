import React from "react";
import "./App.scss";
import TaskDashboard from "./components/taskboard/taskboard";
import Header from "./components/header/header";
import FixedHeader from "./components/FixedHeader/fixedHeader";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <FixedHeader />
        <TaskDashboard />
      </main>
    </div>
  );
}

export default App;
