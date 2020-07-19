import React from "react";
import axios from "axios";

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      formValid: false,
    };
    this.getUsers = this.getUsers.bind(this);
  }

  // Function to get list of all users
  getUsers = () => {
    axios.get(`http://localhost:4000/users`).then((res) => {
      const users = res.data;
      this.setState({
        users: users,
      });
    });
  };

  componentDidMount() {
    this.getUsers();
  }

  // Function to submit form of Add New task
  submitForm = (e, refreshChild, closePopup) => {
    e.preventDefault();
    let formJSON = this.formToJSON(
      document.getElementById("add-task-form").elements
    );
    console.log(formJSON);
    axios
      .post("http://localhost:4000/add-new-task", { formJSON })
      .then((res) => {
        if (res.data == "success") {
          refreshChild();
          closePopup();
          window.scrollTo(0, document.body.scrollHeight);
        }
      });
  };

  // Function to convert form data to json format
  formToJSON = (elements) =>
    [].reduce.call(
      elements,
      (data, element) => {
        data[element.name] = element.value;
        return data;
      },
      {}
    );

  // Function to get users list

  render() {
    const usersList = this.state.users.map((user) => (
      <option value={JSON.stringify(user)} key={user.userid}>
        {user.username}
      </option>
    ));
    return (
      <div className="new-task-wrapper">
        <div className="add-new-task-form">
          <div className="heading">
            <h2>Create New Task</h2>
            <div className="close-pop-up" onClick={this.props.close}>
              <span>&#9587;</span>
            </div>
          </div>
          <form
            id="add-task-form"
            onSubmit={(e) => {
              this.submitForm(e, this.props.refreshTasks, this.props.close);
            }}
          >
            <input type="hidden" name="total" value={this.props.total} />
            <div className="input-field">
              <label>Title : </label>
              <input type="text" name="title" placeholder="Please enter title" required />
            </div>
            <div className="input-field">
              <label>Description : </label>
              <textarea
                type="text"
                name="description"
                placeholder="Please enter description"
                required
              ></textarea>
            </div>
            <div className="input-field">
              <label>Select User : </label>
              <select name="user" placeholder="user" required>
                {usersList}
              </select>
            </div>
            <div className="input-field">
              <label>Priority : </label>
              <select name="priority" placeholder="priority" required>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="submit-btn">
              <button type="submit">Add Task</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewTask;
