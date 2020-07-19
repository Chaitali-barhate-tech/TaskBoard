import React from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import {
  AiOutlineStar,
  AiOutlineUser,
  AiOutlineClockCircle,
} from "react-icons/ai";
import TaskInfo from "./task";
import AddNewTask from "../NewTask/NewTask";

class TaskDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: [],
      dragObjectId: "",
    };
    this.onDragOver = this.onDragOver.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.getTasksList = this.getTasksList.bind(this);
  }

  componentDidMount() {
    this.getTasksList();
  }

  // Function to get list of all tasks
  getTasksList = () => {
    axios.get(`http://localhost:4000/task-list`).then((res) => {
      const taskData = res.data;
      this.setState({
        taskData: taskData,
      });
    });
  };
  // Function to prevent default drag event
  onDragOver = (e) => {
    e.preventDefault();
  };

  // Function to get dragged task ID
  dragStart = (event) => {
    this.state.dragObjectId = event.target.id;
  };

  // Function to update tasks on Drop
  onDrop = (e) => {
    let target = e.currentTarget.id;
    let taskID = this.state.dragObjectId;
    // Function to update the send task data
    axios
      .post("http://localhost:4000/update-task", {
        status: target,
        id: taskID,
      })
      .then((res) => {
        console.log(res);
        if (res.data == "success") {
          this.getTasksList();
          window.scrollTo(0, document.body.scrollHeight);
        }
      });
  };

  removeTask = (taskID) => {
     axios
       .post("http://localhost:4000/delete-task", {
         id: taskID,
       })
       .then((res) => {
         if (res.data == "success") {
           this.getTasksList();
         }
       });
  };

  render() {
    // Todo tasks list
    const toDoTasks = this.state.taskData.filter((task) => {
      if (task.status === "todo") {
        return task;
      }
    });

    // In progress task list
    const inProgressTasks = this.state.taskData.filter((task) => {
      if (task.status === "inProgress") {
        return task;
      }
    });

    //   In review tasks list
    const inReviewTasks = this.state.taskData.filter((task) => {
      if (task.status === "inReview") {
        return task;
      }
    });

    //   Completed tasks list
    const completedTasks = this.state.taskData.filter((task) => {
      if (task.status === "done") {
        return task;
      }
    });

    return (
      <div className="dashboard">
        <div className="container">
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
                      <TaskInfo task={task} deleteTask={this.removeTask} />
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
                      <TaskInfo task={task} deleteTask={this.removeTask} />
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
                      <TaskInfo task={task} deleteTask={this.removeTask} />
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
                      <TaskInfo task={task} deleteTask={this.removeTask} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Popup
          modal
          trigger={
            <div className="add-new-task">
              <span>&#9547;</span>
            </div>
          }
        >
          {(close) => (
            <AddNewTask
              total={this.state.taskData.length}
              refreshTasks={this.getTasksList}
              close={close}
            />
          )}
        </Popup>
      </div>
    );
  }
}

export default TaskDashboard;
