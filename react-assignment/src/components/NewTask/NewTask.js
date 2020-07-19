import React from "react";
import axios from "axios";

class AddNewTask extends React.Component {
  fetchData = (e) => {
    let taskAttr = e.target.name;
    this.props.newTask[taskAttr] = e.target.value;
  };

  submitForm = (e, refreshChild) => {
    var self = this;
    e.preventDefault();
    let formJSON = this.formToJSON(
      document.getElementById("add-task-form").elements
    );

    console.log(formJSON);

    axios
      .post("http://localhost:4000/add-new-task", { formJSON })
      .then((res) => {
        console.log(res);
        // if (res.data == "success") {
        //   this.showMsgs("success", res.data.msg);
        //   refreshChild();
        // } else {
        //   this.showMsgs("error", res.data.msg);
        // }
      });
  };

  formToJSON = (elements) =>
    [].reduce.call(
      elements,
      (data, element) => {
        data[element.name] = element.value;
        return data;
      },
      {}
    );

  render() {
    return (
      <div className="new-task-wrapper">
        <div className="add-new-task-form">
          <form
            id="add-task-form"
            onSubmit={(e) => {
              this.submitForm(e);
            }}
          >
            <div className="input-field">
              <input
                type="text"
                name="title"
                onChange={this.fetchData}
                placeholder="Title"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="description"
                onChange={this.fetchData}
                placeholder="Description"
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="user"
                onChange={this.fetchData}
                placeholder="user"
              />
            </div>
            <input type="submit" value="Add User" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewTask;
