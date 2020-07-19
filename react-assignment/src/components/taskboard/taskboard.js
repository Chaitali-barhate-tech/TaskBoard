import React from "react";
import axios from "axios";
import {
  AiOutlineStar,
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import TaskInfo from "./task";
import AddNewTask from "../NewTask/NewTask";

class TaskDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: [],
      dragObjectId: "",
      newTask: {}
    };
    this.onDragOver = this.onDragOver.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.getTasksList = this.getTasksList.bind(this);
  }

  componentDidMount() {
    this.getTasksList();
  }

  getTasksList = () => {
    axios.get(`http://localhost:4000/task-list`).then((res) => {
      const taskData = res.data;
      this.setState({
        taskData: taskData,
      });
    });
  }

  onDragOver = (e) => {
    e.preventDefault();
  };

  dragStart = (event) => {
    this.state.dragObjectId = event.target.id;
  };

  onDrop = (e) => {
    let target = e.currentTarget.id;
    let taskID = this.state.dragObjectId;

    axios
      .post("http://localhost:4000/update-task", {
        status: target,
        id: taskID,
      })
      .then((res) => {
        console.log(res);
        if (res.data == "success") {
          this.getTasksList();
        }
      });
  };

  render() {
    // Todo tasks
    const toDoTasks = this.state.taskData.filter((task) => {
      if (task.status === "todo") {
        return task;
      }
    });

    // In progress task
    const inProgressTasks = this.state.taskData.filter((task) => {
      if (task.status === "inProgress") {
        return task;
      }
    });

    //   In review tasks
    const inReviewTasks = this.state.taskData.filter((task) => {
      if (task.status === "inReview") {
        return task;
      }
    });

    //   Completed tasks
    const completedTasks = this.state.taskData.filter((task) => {
      if (task.status === "done") {
        return task;
      }
    });

    return (
      <div className="dashboard">
        <div className="container">
          <AddNewTask
            addTask={this.submitForm}
            newTask={this.state.newTask}
            taskData={this.state.taskData}
          />
          <div className="dashboard-heading">
            <div className="star-icon">
              <AiOutlineStar size={24} color={"#888"} />
            </div>
            <div className="people-count">
              <div className="details">
                <span>
                  <AiOutlineUser size={14} />
                </span>
                <span>6</span>
                <span>People</span>
              </div>
            </div>
            <div className="days-left">
              <div className="details">
                <span>
                  <AiOutlineClockCircle size={14} />
                </span>
                <span>2</span>
                <span>days left</span>
              </div>
            </div>
            <div className="show-my-tasks">
              <span>Show my tasks only</span>
              <div className="checkbox">
                <input type="checkbox" id="my-tasks" />
                <label htmlFor="my-tasks"></label>
              </div>
            </div>
          </div>
          <div className="dashboard-data">
            {/* Todo Tasks */}
            <div
              className="to-do-tasks tasks-list-wrapper"
              id="todo"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e)}
            >
              <div className="list-heading">
                <h2>ToDo</h2>
                <div className="more">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="tasks-list">
                <ul>
                  {toDoTasks.map((task) => (
                    <li
                      draggable
                      id={task.id}
                      key={task.id}
                      className="draggable"
                      onDragStart={(e) => this.dragStart(e)}
                    >
                      <TaskInfo task={task} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* In Progress tasks */}
            <div
              className="in-progress-tasks tasks-list-wrapper"
              id="inProgress"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e)}
            >
              <div className="list-heading">
                <h2>In Progress</h2>
                <div className="rec">
                  <span className="circle"></span>
                  <span>REC</span>
                </div>
                <div className="more">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="tasks-list">
                <ul>
                  {inProgressTasks.map((task) => (
                    <li
                      draggable
                      id={task.id}
                      key={task.id}
                      className="draggable"
                      onDragStart={(e) => this.dragStart(e)}
                    >
                      <TaskInfo task={task} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* In Review tasks */}
            <div
              className="in-review-tasks tasks-list-wrapper"
              id="inReview"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e)}
            >
              <div className="list-heading">
                <h2>In review</h2>
                <div className="more">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="tasks-list">
                <ul>
                  {inReviewTasks.map((task) => (
                    <li
                      draggable
                      id={task.id}
                      key={task.id}
                      className="draggable"
                      onDragStart={(e) => this.dragStart(e)}
                    >
                      <TaskInfo task={task} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Completed Tasks */}
            <div
              className="completed-tasks tasks-list-wrapper"
              id="done"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e)}
            >
              <div className="list-heading">
                <h2>Done</h2>
                <div className="more">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="tasks-list">
                <ul>
                  {completedTasks.map((task) => (
                    <li
                      draggable
                      id={task.id}
                      key={task.id}
                      className="draggable"
                      onDragStart={(e) => this.dragStart(e)}
                    >
                      <TaskInfo task={task} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="add-new-task">{/* <AiOutlinePlus size={24} /> */}</div>
      </div>
    );
  }
}

export default TaskDashboard;
